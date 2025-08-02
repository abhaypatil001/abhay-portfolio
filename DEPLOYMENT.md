# Deployment & Customization Guide

## 🚀 Quick Deployment

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push to main

3. **Custom Domain (Optional)**
   - Update `CNAME` in `.github/workflows/deploy.yml`
   - Add your domain in GitHub Pages settings

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 🎨 Customization Guide

### 1. Personal Information

**Update the following files with your information:**

- `src/components/Hero.jsx` - Name, roles, description
- `src/components/About.jsx` - Personal background, location, stats
- `src/components/Contact.jsx` - Email, phone, social links
- `src/components/Footer.jsx` - Contact information
- `index.html` - Meta tags, structured data

### 2. Profile Photo

Replace `src/assets/profile-photo.jpg` with your professional headshot:
- Recommended size: 400x400px or larger
- Format: JPG, PNG, or WebP
- Keep the filename or update the import in `Hero.jsx`

### 3. Resume PDF

Add your resume PDF to the `public` folder:
- Name it `resume-abhay-patil.pdf` or update the filename in `Resume.jsx`
- Ensure it's optimized for web viewing

### 4. Projects

Update `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    category: 'infrastructure', // or 'automation', 'monitoring', etc.
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-url.com',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      // ...
    ]
  },
  // Add more projects...
];
```

### 5. Skills

Update `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Your Skill Category',
    icon: YourIcon, // Import from lucide-react
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Skill Name', level: 90, icon: '🔧' },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### 6. Experience & Education

Update `src/components/Resume.jsx`:
- Modify the `experience` array with your work history
- Update the `education` array with your academic background
- Add your certifications to the `certifications` array

### 7. Colors & Branding

Update `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... continue with your brand colors
    900: '#your-color-900',
  },
  accent: {
    // Your accent colors
  }
}
```

### 8. Favicon & Logo

Replace `public/favicon.svg` with your logo:
- Create a simple SVG logo
- Update the favicon references in `index.html`

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Custom Animations

Add custom animations in `src/index.css`:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-animation-class {
  animation: yourAnimation 2s ease-in-out infinite;
}
```

### Environment Variables

Create `.env` file for configuration:
```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=your@email.com
VITE_GITHUB_USERNAME=yourusername
```

Access in components:
```javascript
const siteUrl = import.meta.env.VITE_SITE_URL;
```

## 📊 SEO Optimization

### Meta Tags

Update `index.html` with your information:
- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)

### Performance

- Optimize images (use WebP format when possible)
- Minimize bundle size
- Enable gzip compression on your server
- Use a CDN for static assets

### Analytics

Add Google Analytics or other tracking:
```html
<!-- Add to index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Build Issues

1. **CSS errors**: Check for invalid Tailwind classes
2. **Import errors**: Verify file paths and extensions
3. **Image loading**: Ensure images are in the correct directory

### Deployment Issues

1. **GitHub Pages**: Check workflow logs in Actions tab
2. **Netlify**: Check build logs in deploy section
3. **Custom domain**: Verify DNS settings

### Performance Issues

1. **Large bundle size**: Use code splitting
2. **Slow loading**: Optimize images and fonts
3. **Layout shift**: Add proper dimensions to images

## 📞 Support

If you need help with customization or deployment:
- Check the GitHub Issues
- Review the documentation
- Contact: abhay.patil@example.com

---

Happy coding! 🚀
