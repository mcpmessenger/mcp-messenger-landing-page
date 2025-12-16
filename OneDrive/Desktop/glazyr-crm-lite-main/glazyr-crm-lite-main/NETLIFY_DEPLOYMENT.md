# Netlify Deployment (Alternative to Vercel)

Netlify is another great option for Next.js and might work better than Vercel.

## Quick Setup

1. **Go to Netlify**
   - https://app.netlify.com
   - Sign up/login with GitHub

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" and authorize
   - Choose repository: `mcpmessenger/glazyr-crm-lite`
   - Branch: `main`

3. **Build Settings** (auto-detected)
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

## Advantages
- Often faster than Vercel
- Better cache handling
- Free tier available
- Easy GitHub integration

