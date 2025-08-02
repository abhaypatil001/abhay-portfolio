# 🚀 GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - **Repository name**: `abhay-portfolio` (or your preferred name)
   - **Description**: "Professional DevOps & Cloud Engineer Portfolio"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Don't check any boxes (we have files ready)
4. Click "Create repository"

### Option B: Using GitHub CLI (if you have it installed)
```bash
gh repo create abhay-portfolio --public --description "Professional DevOps & Cloud Engineer Portfolio"
```

## Step 2: Upload Your Portfolio Files

### Method 1: Using Git Commands (Recommended)
```bash
# Navigate to your portfolio directory
cd /Users/Abhay/Documents/Labs/Portfolio/abhay-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Professional DevOps portfolio with complete CV integration"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/abhay-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Method 2: Using GitHub Desktop
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "Add an Existing Repository from your Hard Drive"
4. Select your portfolio folder: `/Users/Abhay/Documents/Labs/Portfolio/abhay-portfolio`
5. Publish to GitHub

### Method 3: Upload via Web Interface
1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files from your portfolio folder
4. Commit the files

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Source**: "GitHub Actions"
5. The workflow will automatically trigger on your next push

## Step 4: Custom Domain Setup

### A. If you already have a domain:

#### For Root Domain (e.g., abhaypatil.dev):
1. In your repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `abhaypatil.dev`
3. Check "Enforce HTTPS"

**DNS Settings (at your domain registrar):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### For Subdomain (e.g., portfolio.abhaypatil.dev):
1. In **Settings** → **Pages** → **Custom domain**: `portfolio.abhaypatil.dev`
2. Check "Enforce HTTPS"

**DNS Settings:**
```
Type: CNAME
Name: portfolio
Value: YOUR_USERNAME.github.io
```

### B. If you need to purchase a domain:

**Recommended Domain Registrars:**
- **Namecheap** (affordable, good support)
- **Google Domains** (simple interface)
- **Cloudflare** (includes free SSL/CDN)

**Suggested Domain Names:**
- `abhaypatil.dev` (professional)
- `abhaypatil.cloud` (cloud-focused)
- `abhaydevops.com` (DevOps-focused)

## Step 5: Create CNAME File

Create this file in your repository root:

```bash
# Create CNAME file (replace with your domain)
echo "abhaypatil.dev" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## Step 6: Verify Deployment

1. **Check GitHub Actions**:
   - Go to your repository → **Actions** tab
   - Verify the deployment workflow completed successfully

2. **Test Your Site**:
   - Visit your custom domain (e.g., `https://abhaypatil.dev`)
   - Test all navigation links
   - Verify mobile responsiveness
   - Check download resume functionality

3. **Performance Check**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Verify SSL certificate is working
   - Test loading speed

## Step 7: Post-Deployment Optimization

### Update SEO Meta Tags
Update `index.html` with your actual domain:
```html
<meta property="og:url" content="https://abhaypatil.dev/" />
<meta property="twitter:url" content="https://abhaypatil.dev/" />
<link rel="canonical" href="https://abhaypatil.dev/" />
```

### Enable Analytics (Optional)
Add Google Analytics to track visitors:
```html
<!-- Add to index.html head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Common Issues:

1. **404 Error on Custom Domain**:
   - Wait 24-48 hours for DNS propagation
   - Verify DNS settings with your registrar
   - Check CNAME file exists in repository root

2. **Build Fails**:
   - Check GitHub Actions logs
   - Verify all dependencies in package.json
   - Ensure no syntax errors in code

3. **SSL Certificate Issues**:
   - Wait for GitHub to provision certificate (can take up to 24 hours)
   - Ensure "Enforce HTTPS" is checked
   - Try disabling and re-enabling custom domain

4. **Resume Download Not Working**:
   - Verify CV file is in `/public` folder
   - Check file path in Resume component
   - Ensure file is committed to repository

## Final Checklist

- [ ] Repository created and files uploaded
- [ ] GitHub Pages configured with GitHub Actions
- [ ] Custom domain configured (if applicable)
- [ ] DNS settings updated
- [ ] HTTPS enforced
- [ ] Site loads correctly
- [ ] All navigation works
- [ ] Resume download functions
- [ ] Mobile responsive
- [ ] SEO meta tags updated

## Support

If you encounter any issues:
1. Check GitHub Actions logs for build errors
2. Verify DNS settings with online DNS checkers
3. Test site in incognito mode to avoid cache issues
4. Contact me for additional support

---

**Your portfolio will be live at your custom domain within 24-48 hours after DNS propagation!**
