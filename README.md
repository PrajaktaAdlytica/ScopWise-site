# Scopwise

Premium SaaS website for Scopwise, an enterprise agent access governance platform.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Keep the detected framework as **Next.js**.
3. Use the repository root as the Root Directory.
4. Keep the default build command (`next build`) and output settings.
5. Deploy. No environment variables are required for this demo website.
6. Add `scopwise.com` under **Project Settings > Domains** and apply the DNS records shown by Vercel.
