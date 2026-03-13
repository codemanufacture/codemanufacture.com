# Codemanufacture Website

The official website for [Codemanufacture](https://codemanufacture.com) - Magento experts.

Built with [Hugo](https://gohugo.io/) and modern CSS (nesting, `@layer`, custom properties, `oklch()`).

## Development

### Prerequisites

- [Nix](https://nixos.org/) with flakes enabled (recommended)
- Or: Hugo extended

### Using Nix (recommended)

```bash
# Enter the development shell
nix develop

# Start development server
hugo server
```

### Manual Setup

```bash
# Start Hugo development server
hugo server
```

The site will be available at `http://localhost:1313`.

## Build

```bash
hugo --minify
```

The output will be in the `public/` directory.

## Deployment

The site is automatically deployed to AWS S3 via GitHub Actions when pushing to the `master` branch.

Required GitHub Secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`

## Project Structure

```
.
├── archetypes/          # Content templates
├── assets/
│   ├── css/             # Stylesheets (modern CSS)
│   └── js/              # JavaScript
├── content/
│   ├── blog/            # Blog posts
│   └── privacy-policy.md
├── data/
│   ├── authors.json     # Author data
│   └── services.json    # Services data
├── layouts/
│   ├── _default/        # Default templates
│   ├── blog/            # Blog templates
│   └── partials/        # Reusable partials
├── static/
│   └── images/          # Static images
├── hugo.toml            # Hugo configuration
└── flake.nix            # Nix configuration
```

## License

Apache-2.0
