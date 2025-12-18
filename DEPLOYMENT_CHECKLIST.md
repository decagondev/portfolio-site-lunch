# Netlify Deployment Checklist

## Pre-Deployment

- [x] ✅ All code changes committed
- [x] ✅ Build passes locally (`npm run build`)
- [x] ✅ Linting passes (`npm run lint`)
- [x] ✅ All images and assets are in place
- [x] ✅ SEO meta tags updated in `index.html`
- [x] ✅ `manifest.json` updated with app name
- [x] ✅ `netlify.toml` configured
- [x] ✅ `_redirects` file in `public/` folder

## Manual Deployment Steps

### Option 1: Drag & Drop (Easiest)

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder
   - Your site will be live immediately!

### Option 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Post-Deployment Configuration

### 1. Set Environment Variables (if needed)

If you need to set `VITE_BASE_URL`:
- Go to Site settings → Environment variables
- Add: `VITE_BASE_URL` = `https://your-site-name.netlify.app` (or your custom domain)
- Redeploy the site

### 2. Configure Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow Netlify's DNS instructions
4. SSL certificate is automatically provisioned

### 3. Verify Deployment

- [ ] Site loads correctly
- [ ] All routes work (test navigation)
- [ ] Images load properly
- [ ] Forms work (if applicable)
- [ ] SEO meta tags are correct
- [ ] Mobile responsive
- [ ] Theme toggle works

### 4. Test SEO

- Use [Open Graph Debugger](https://www.opengraph.xyz/) to verify OG tags
- Check Google Search Console (if configured)
- Verify canonical URLs

## Build Configuration

The `netlify.toml` file is already configured with:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ Node version: 20
- ✅ SPA redirect rules
- ✅ Security headers
- ✅ Cache headers for assets

## Troubleshooting

### Routes not working
- Ensure `_redirects` file is in `public/` folder (it will be copied to `dist/`)
- Verify `netlify.toml` redirect rules

### Build fails
- Check Node.js version (should be 20+)
- Review build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`

### Environment variables not working
- Variables must be prefixed with `VITE_`
- Redeploy after adding variables
- Check variable names match your code

## Quick Deploy Command

For future deployments, simply run:
```bash
npm run build && netlify deploy --prod --dir=dist
```

Or use drag & drop method with the `dist` folder.

---

**Ready to deploy!** 🚀

