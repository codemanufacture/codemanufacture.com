# Codemanufacture Website

The official website for [Codemanufacture](https://codemanufacture.com) - Magento experts.

Built with [Hugo](https://gohugo.io/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Development

### Prerequisites

- [Nix](https://nixos.org/) with flakes enabled (recommended)
- Or: Hugo extended and Node.js 22+

### Using Nix (recommended)

```bash
# Enter the development shell
nix develop

# Install npm dependencies
npm install

# Start development server
npm run watch:css &
hugo server
```

### Manual Setup

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Start Hugo development server
hugo server
```

The site will be available at `http://localhost:1313`.

## Build

```bash
# Build CSS
npm run build:css

# Build the site
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
│   ├── css/             # Tailwind CSS
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
├── package.json         # Node dependencies
└── flake.nix            # Nix configuration
```

## License

Apache-2.0
