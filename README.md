# VWO + SSR Nextjs

This application aims to demonstrate SSR issues with the vwo-node-sdk library and serverside-rendered Next.js.

## Setup

Configure the expected environment variables by:
1. Copying `.env.local.sample` as `.env.local`
2. Updating the values in `.env.local` (names are self-explanatory but see `config.js` for descriptions on what's expected)

Install dependencies and run:
```
npm install

npm run dev
```

## Architecture

This application uses `vwo-node-sdk` and `next` which is self-explanatory.

A [custom document](https://nextjs.org/docs/advanced-features/custom-document)
is configured to inject the VWO smart code.

A [custom application](https://nextjs.org/docs/advanced-features/custom-app) is
configured to setup `react-query` with [SSR via
hydration](https://react-query.tanstack.com/guides/ssr#using-hydration), and a
[library to manage cookies](https://github.com/bouzuya/cookie-storage)
(`cookie-storage`).

See `pages/index.js` for the main entry, and `vwo.js` for the react-query
methods to fetch, prefetch, and hooks to use experiment data.

## Issue

Intermittently the following error is returned on the serverside when prefetching the experiment variation:

```
error - uncaughtException: Error: read ECONNRESET
    at TLSWrap.onStreamRead (node:internal/stream_base_commons:220:20) {
  errno: -54,
  code: 'ECONNRESET',
  syscall: 'read'
}
```
