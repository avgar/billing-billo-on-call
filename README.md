# Billing Billo On-Call

Wix serverless application for billing billo on-call.

## Project Structure

```
billing-billo-on-call/
├── backend/
│   ├── http-functions/    # HTTP endpoint handlers
│   └── events/            # Event handlers
├── .wix/
│   └── config.json        # Wix configuration
└── package.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Wix:
```bash
./deploy.sh
```

Or deploy manually:
```bash
npm run build
npx @wix/serverless-cli deploy
```

## HTTP Functions

HTTP functions are located in `backend/http-functions/`. Each exported function corresponds to an HTTP endpoint.

## Event Handlers

Event handlers are located in `backend/events/` and respond to Wix platform events.
