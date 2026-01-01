{
  description = "Nix configuration for codemanufacture.com";

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
        {

          packages.default = pkgs.buildNpmPackage {
            name = "codemanufacture-website";
            src = gitignore.lib.gitignoreSource ./.;

            nativeBuildInputs = [pkgs.pkg-config];

            buildInputs = with pkgs; [
              nodejs_22
              vips
            ];

            npmDeps = pkgs.importNpmLock {
              npmRoot = ./.;
            };

            npmFlags = [ "--legacy-peer-deps" ];

            npmConfigHook = pkgs.importNpmLock.npmConfigHook;

            npmBuild = "npm run build";

            makeCacheWritable = true;

            installPhase = ''
              runHook preInstall

              mkdir $out
              cp -r public $out

              runHook postInstall
            '';
          };

          treefmt = {
            projectRootFile = "flake.lock";
            settings.global.excludes = [
              "*.gitignore"
              ".envrc"
              "LICENSE"
              "*.snap"
            ];

            programs.nixfmt.enable = true;
            programs.prettier.enable = true;
          };

          devShells.default = pkgs.mkShellNoCC {
            nativeBuildInputs = [
              pkgs.nodejs_22
              pkgs.awscli2
            ];

            inputsFrom = [
              config.treefmt.build.devShell
            ];
          };
        };
    };
}
