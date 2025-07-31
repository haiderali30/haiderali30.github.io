# 🚀 Deployment Guide - GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
5. Make it **Public**
6. Click "Create repository"

### 2. Upload Your Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `CV_Haider_Ali.pdf`
   - `README.md`
3. Click "Commit changes"

**Option B: Using Git (if you have Git installed)**
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
# Copy all files to this folder
git add .
git commit -m "Initial portfolio website"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main"
6. Click "Save"

### 4. Your Site is Live! 🎉

Your portfolio will be available at: `https://yourusername.github.io`

**Note**: It may take a few minutes for the site to become available.

## Alternative: Netlify Deployment

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag your folder to the deploy area
3. Your site will be live instantly with a URL like: `your-site.netlify.app`

## Custom Domain (Optional)

### GitHub Pages Custom Domain:
1. In your repository Settings → Pages
2. Add your custom domain in the "Custom domain" field
3. Add a CNAME record in your domain provider pointing to `yourusername.github.io`

### Netlify Custom Domain:
1. In your Netlify dashboard, go to Site settings → Domain management
2. Add your custom domain
3. Follow the DNS instructions provided

## Troubleshooting

### Site not showing up?
- Wait 5-10 minutes for GitHub Pages to build
- Check that your repository is public
- Verify `index.html` is in the root directory

### Images not loading?
- Make sure all image files are uploaded
- Check file paths in your HTML

### Styling issues?
- Verify `styles.css` is uploaded
- Check browser console for errors

## Next Steps

1. **Customize Content**: Update the HTML with your actual projects
2. **Add Your Photo**: Replace the icon with your actual photo
3. **Update Contact Info**: Add your real email and social links
4. **Add Projects**: Follow the instructions in README.md to add your work
5. **Test**: Visit your site on different devices

## Need Help?

- Check the [README.md](README.md) for detailed customization instructions
- Create an issue in your GitHub repository
- Ask questions in GitHub Discussions

---

**Congratulations! 🎉 Your portfolio is now live and accessible to everyone around the world!** 