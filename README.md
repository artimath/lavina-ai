# Lavina AI

## Project Overview
Lavina AI is a Cloudflare Workers project that provides a versatile API with routing capabilities, including redirection and proxying functionalities. It serves as a foundation for building more complex serverless applications on the Cloudflare Workers platform.

## Prerequisites
- Node.js (version 20.15.0 as specified in package.json)
- pnpm (for package management)
- Wrangler CLI (for Cloudflare Workers deployment)

## Installation
1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```

## Development
To start the development server:
```
pnpm run dev-worker
```

For HTML development:
```
pnpm run dev-html
```

## Building
To build the project:
```
pnpm run build
```

## Deployment
To deploy to Cloudflare Workers:
```
wrangler deploy
```

## Linting
To run the linter:
```
pnpm run lint
```

## Project Structure
The project is structured as follows:
- `src/index.ts`: Main entry point for the Cloudflare Worker
- `src/proxy.ts`: Handles proxy functionality
- `src/redirect.ts`: Handles redirect functionality
- `src/router.ts`: Defines API routes

## Features
1. **Redirection**: Accessible via `/redirect` endpoint
2. **Proxying**: Accessible via `/proxy` endpoint
3. **API Routing**: Handles requests starting with `/api/`

## Configuration
The project uses `wrangler.toml` for Cloudflare Workers configuration. Key settings include:
- Compatibility date: 2024-06-20
- Main script: src/index.ts
- Project name: "broad-water-de89"

## Dependencies
Key dependencies include:
- itty-router: For API routing
- @cloudflare/workers-types: For Cloudflare Workers type definitions

For a full list of dependencies, refer to the `package.json` file.

## License
[Specify your license here]

## Contributing
[Instructions for how to contribute to your project]

## Support
[How users can get support for your project]
