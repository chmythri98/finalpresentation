# Quick GitHub Deployment Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Install gh-pages
```bash
cd /app/frontend
yarn add -D gh-pages
```

### Step 2: Update package.json

Add these two lines to your `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/alumni-portfolio",
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

**Replace `YOUR_USERNAME` with your GitHub username!**

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `alumni-portfolio`
3. Keep it public
4. Don't add README, .gitignore, or license (we have them)
5. Click **Create repository**

### Step 4: Push to GitHub

```bash
cd /app/frontend

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Alumni Management Portfolio"

# Add your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/alumni-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### Step 5: Deploy

```bash
yarn deploy
```

**That's it!** Your site will be live at:
`https://YOUR_USERNAME.github.io/alumni-portfolio`

---

## 📱 If Using a Subdirectory

If your site is at `https://username.github.io/alumni-portfolio`, update `App.js`:

```jsx
// In /app/frontend/src/App.js
<BrowserRouter basename="/alumni-portfolio">
  {/* rest of code */}
</BrowserRouter>
```

---

## ✅ Verify Deployment

1. Go to your repo: `https://github.com/YOUR_USERNAME/alumni-portfolio`
2. Click **Settings** → **Pages**
3. You should see: "Your site is published at https://..."
4. Click the link to view your live site!

---

## 🔄 Update Your Site

After making changes:

```bash
git add .
git commit -m "Update content"
git push
yarn deploy
```

---

## 🆘 Troubleshooting

**Blank page?**
- Check if `homepage` in `package.json` matches your GitHub Pages URL

**Images not loading?**
- All images are using full URLs, should work fine

**Need help?**
- Check the full guide: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**Ready to deploy? Start with Step 1! 🎉**
