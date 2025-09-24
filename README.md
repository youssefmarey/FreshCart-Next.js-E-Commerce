This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Local Setup

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Create `.env.local` from `env.example` and adjust values:
   ```bash
   copy env.example .env.local  # Windows
   # or
   cp env.example .env.local    # macOS/Linux
   ```
   Required variables:
   - `API` (e.g. `https://ecommerce.routemisr.com/api/v1`)
   - `NEXTAUTH_URL` (use `http://localhost:3000` locally)
   - `NEXTAUTH_SECRET` (any strong random string)
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Vercel Deployment

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel and select the repo.
3. Set Environment Variables in Vercel Project Settings → Environment Variables:
   - `API = https://ecommerce.routemisr.com/api/v1`
   - `NEXTAUTH_URL = https://<your-vercel-domain>`
   - `NEXTAUTH_SECRET` (click "Generate" in Vercel or paste your own)
4. Build & Deploy. Vercel detects Next.js automatically.

Notes:
- Auth uses `CredentialsProvider` and reads `API` and `NEXTAUTH_*` vars.
- Image domain `ecommerce.routemisr.com` is allowed in `next.config.ts`.
- API route `/api/users` proxies external products and is used by `getAllProducts()`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# FreshCart-Next.js-E-Commerce
