{
  description = "Nix configuration for codemanufacture.com (Hugo)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/x86_64-linux";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    gitignore.url = "github:hercules-ci/gitignore.nix";
    gitignore.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    inputs@{ flake-parts, gitignore, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.treefmt-nix.flakeModule
      ];
      systems = import inputs.systems;
      perSystem =
        {
          config,
          self',
          inputs',
          pkgs,
          system,
          ...
        }:
        let
          mkSite =
            {
              name,
              baseURL ? null,
            }:
            pkgs.stdenv.mkDerivation {
              inherit name;
              src = gitignore.lib.gitignoreSource ./.;

              nativeBuildInputs = with pkgs; [
                hugo
              ];

              buildPhase = ''
                hugo --minify ${pkgs.lib.optionalString (baseURL != null) "--baseURL ${baseURL}"}
              '';

              installPhase = ''
                runHook preInstall
                mkdir -p $out
                cp -r public/* $out/
                runHook postInstall
              '';
            };
        in
        {

          packages.default = mkSite { name = "codemanufacture-website"; };

          # Production build served locally at https://codemanufacture.test:
          # nix build .#preview -o result-preview
          packages.preview = mkSite {
            name = "codemanufacture-website-preview";
            baseURL = "https://codemanufacture.test/";
          };

          # Live server behind https://dev.codemanufacture.test (fixed port so
          # it can run next to piotrkwiecinski.com on 1314): nix run .#dev
          apps.dev = {
            type = "app";
            program = pkgs.lib.getExe (
              pkgs.writeShellApplication {
                name = "hugo-dev";
                runtimeInputs = [ pkgs.hugo ];
                text = ''
                  exec hugo server --bind 127.0.0.1 --port 1313 \
                    --baseURL https://dev.codemanufacture.test/ \
                    --appendPort=false --liveReloadPort 443 "$@"
                '';
              }
            );
          };

          treefmt = {
            projectRootFile = "flake.lock";
            settings.global.excludes = [
              "*.gitignore"
              ".envrc"
              "LICENSE"
              "public/*"
              "resources/*"
            ];

            programs.nixfmt.enable = true;
            programs.prettier = {
              enable = true;
              settings = {
                semi = false;
                singleQuote = true;
                trailingComma = "es5";
                arrowParens = "avoid";
                plugins = [
                  "${pkgs.prettier-plugin-go-template}/lib/node_modules/prettier-plugin-go-template/lib/index.js"
                ];
                overrides = [
                  {
                    files = [ "layouts/**/*.html" ];
                    options.parser = "go-template";
                  }
                ];
              };
            };
          };

          devShells.default = pkgs.mkShellNoCC {
            nativeBuildInputs = [
              pkgs.hugo
              pkgs.awscli2
            ];

            inputsFrom = [
              config.treefmt.build.devShell
            ];
          };
        };
    };
}
