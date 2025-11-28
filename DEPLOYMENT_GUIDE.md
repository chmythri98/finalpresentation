# GitHub Deployment Guide for Alumni Management System Portfolio

## Option 1: Deploy to GitHub Pages (Recommended for Portfolio)

### Step 1: Prepare Your React App

1. **Update `package.json`** - Add homepage and deployment scripts:

```json
{
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. **Install gh-pages package**:
```bash
cd /app/frontend
yarn add -D gh-pages
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `alumni-management-portfolio`
3. Don't initialize with README (we'll push existing code)

### Step 3: Push Code to GitHub

```bash
cd /app/frontend

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Alumni Management System Portfolio"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
# Build and deploy
yarn deploy
```

This will:
- Create a production build in the `build` folder
- Push it to the `gh-pages` branch
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Your site will be live in a few minutes!

---

## Option 2: Deploy to Netlify (Alternative)

### Quick Deploy

1. **Build the project**:
```bash
cd /app/frontend
yarn build
```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://www.netlify.com/)
   - Drag and drop the `build` folder
   - Your site is live instantly!

### Continuous Deployment from GitHub

1. Push your code to GitHub (follow Step 2 & 3 from Option 1)
2. Go to [Netlify](https://app.netlify.com)
3. Click **New site from Git**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `yarn build`
   - **Publish directory**: `build`
6. Click **Deploy site**

---

## Option 3: Deploy to Vercel

1. Push code to GitHub (follow Option 1, Steps 2-3)
2. Go to [Vercel](https://vercel.com)
3. Click **Import Project**
4. Select your GitHub repository
5. Vercel auto-detects React and configures everything
6. Click **Deploy**

---

## Important: Update Router for GitHub Pages

If deploying to GitHub Pages with a subdirectory, update your router:

**In `/app/frontend/src/App.js`**:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Change BrowserRouter to include basename
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/YOUR_REPO_NAME">
        {/* rest of your code */}
      </BrowserRouter>
    </div>
  );
}
```

---

## Pre-Deployment Checklist

- [ ] Update `package.json` with correct homepage URL
- [ ] Test production build locally: `yarn build && npx serve -s build`
- [ ] Verify all images and links work
- [ ] Check responsive design on different screen sizes
- [ ] Remove any sensitive data or API keys
- [ ] Update README.md with project description

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check if `homepage` in `package.json` matches your GitHub Pages URL

### Issue: 404 on page refresh
**Solution**: Add a `404.html` file in `/public` that redirects to `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Alumni Management System</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

### Issue: Images not loading
**Solution**: Use relative paths or ensure image URLs are absolute

---

## Quick Commands Reference

```bash
# Build production version
yarn build

# Test production build locally
npx serve -s build

# Deploy to GitHub Pages
yarn deploy

# Check build size
yarn build && ls -lh build/static/js/
```

---

## Custom Domain (Optional)

If you have a custom domain:

1. Create a file `CNAME` in `/public` folder:
```
yourdomain.com
```

2. Configure DNS records:
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add CNAME record: `YOUR_USERNAME.github.io`

---

**Your portfolio website is now ready to deploy! 🚀**

For this specific project, **GitHub Pages** is recommended as it's:
- Free
- Easy to set up
- Perfect for static portfolios
- Provides HTTPS automatically
- Professional URL structure
