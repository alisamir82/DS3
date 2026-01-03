# DigitalSelf Website — GoDaddy Deployment Guide

## Quick Start

This guide provides step-by-step instructions for deploying the DigitalSelf website to GoDaddy hosting.

---

## Pre-Deployment Checklist

Before uploading to GoDaddy, verify the following:

- [ ] All files are organized in the correct directory structure
- [ ] `index.html` is in the root directory
- [ ] `css/`, `js/`, and `assets/` folders are in the root directory
- [ ] All video files are MP4 format (H.264 codec)
- [ ] All image files are PNG or WebP format
- [ ] File paths in HTML are relative (not absolute)
- [ ] No sensitive information in code
- [ ] All links use relative paths or full URLs
- [ ] Tested locally in multiple browsers

---

## File Structure for Deployment

```
public_html/                    (or your root directory)
├── index.html                  (main page)
├── css/
│   └── styles.css             (all styling)
├── js/
│   └── script.js              (all interactivity)
└── assets/
    ├── images/
    │   ├── hero_digital_presence.png
    │   ├── infrastructure_depth.png
    │   ├── digital_continuity_flow.png
    │   ├── human_signal_abstract.png
    │   └── atmospheric_divider.png
    └── videos/
        ├── video1_digital_identity_emergence.mp4
        ├── video2_compute_presence_continuity.mp4
        └── video3_human_signal.mp4
```

---

## Step 1: Access GoDaddy File Manager

1. Log in to your GoDaddy account
2. Navigate to **Hosting** → **My Products**
3. Find your hosting plan and click **Manage**
4. Look for **File Manager** or **cPanel**
5. Click to open the file manager

---

## Step 2: Navigate to Root Directory

1. In File Manager, locate the **public_html** folder (or equivalent)
2. This is your website's root directory
3. Any files here are accessible at your domain

---

## Step 3: Upload Website Files

### Option A: Upload via File Manager (Recommended for Beginners)

1. Click **Upload** button in File Manager
2. Select all files from your local `digitalself` folder
3. Upload in this order:
   - `index.html` (first)
   - `css/` folder
   - `js/` folder
   - `assets/` folder

4. Wait for all uploads to complete (may take 5-10 minutes for videos)

### Option B: Upload via FTP (Recommended for Advanced Users)

1. Get FTP credentials from GoDaddy:
   - Go to Hosting → My Products → Manage
   - Look for FTP credentials or SSH access
   - Note the FTP server, username, and password

2. Use FTP client (FileZilla, Cyberduck, etc.):
   - Connect to FTP server with credentials
   - Navigate to `public_html` folder
   - Drag and drop all files from local folder
   - Wait for upload to complete

---

## Step 4: Verify File Permissions

1. In File Manager, right-click each folder
2. Select **Permissions** or **Change Permissions**
3. Set permissions as follows:
   - **Folders**: 755 (read, write, execute for owner; read and execute for others)
   - **Files**: 644 (read and write for owner; read for others)

4. For videos and images, ensure they are readable by all users

---

## Step 5: Test Your Website

1. Open your domain in a web browser
2. Verify the following:
   - [ ] Page loads without errors
   - [ ] Navigation menu works
   - [ ] All sections display correctly
   - [ ] Videos autoplay and loop
   - [ ] Images load properly
   - [ ] Scroll animations work
   - [ ] Buttons are clickable
   - [ ] Responsive design works on mobile

3. Check browser console for errors:
   - Press F12 to open Developer Tools
   - Go to Console tab
   - Look for any red error messages

---

## Step 6: Configure Domain

1. In GoDaddy, go to **Domains** → **My Domains**
2. Find your domain and click **Manage**
3. Go to **DNS** settings
4. Verify **A Record** points to your hosting IP address
5. Wait for DNS propagation (up to 24 hours)

---

## Step 7: Enable HTTPS (SSL Certificate)

1. In GoDaddy hosting, go to **SSL Certificates**
2. Look for free SSL option (usually included)
3. Click **Install** or **Activate**
4. Wait for certificate to be issued (5-30 minutes)
5. Update all links to use `https://` instead of `http://`

---

## Step 8: Performance Optimization

### Enable Caching

1. In cPanel, look for **Caching** options
2. Enable browser caching
3. Set cache expiration:
   - Images: 1 month
   - CSS/JS: 1 week
   - HTML: 1 day

### Enable Compression

1. In cPanel, look for **GZIP Compression** or **Compression**
2. Enable GZIP compression
3. This reduces file sizes by 50-70%

### Optimize Images

1. Consider converting PNG to WebP format
2. Use image optimization tools
3. Reduce file sizes without losing quality

---

## Step 9: Monitor Performance

### Check Load Time

1. Use Google PageSpeed Insights:
   - Go to https://pagespeed.web.dev/
   - Enter your domain
   - Review recommendations

2. Use GTmetrix:
   - Go to https://gtmetrix.com/
   - Enter your domain
   - Check performance metrics

### Monitor Uptime

1. Set up monitoring service:
   - Use UptimeRobot (free tier available)
   - Get alerts if site goes down
   - Track uptime percentage

---

## Troubleshooting

### Videos Not Playing

**Problem**: Videos don't autoplay or show as broken

**Solutions**:
1. Verify MP4 files are uploaded correctly
2. Check file permissions (should be 644)
3. Verify file paths in HTML are correct
4. Check browser console for CORS errors
5. Try different browser or device

### Images Not Loading

**Problem**: Images show as broken or don't display

**Solutions**:
1. Verify PNG files are uploaded correctly
2. Check file paths are relative (not absolute)
3. Verify file permissions (should be 644)
4. Check file names match exactly (case-sensitive)
5. Try clearing browser cache (Ctrl+Shift+Delete)

### Animations Not Working

**Problem**: Scroll animations don't trigger or are choppy

**Solutions**:
1. Check JavaScript is enabled in browser
2. Open browser console (F12) for errors
3. Verify `js/script.js` is uploaded correctly
4. Try different browser
5. Check for JavaScript conflicts

### Slow Loading

**Problem**: Website takes too long to load

**Solutions**:
1. Enable GZIP compression (see Step 8)
2. Enable browser caching (see Step 8)
3. Optimize video file sizes
4. Use CDN for static assets (optional)
5. Reduce number of HTTP requests

### HTTPS Issues

**Problem**: Site shows as "not secure" or mixed content warnings

**Solutions**:
1. Ensure SSL certificate is installed
2. Update all URLs to use `https://`
3. Check external resources use `https://`
4. Clear browser cache
5. Wait 24 hours for propagation

---

## Maintenance Tasks

### Regular Updates

- Check for broken links monthly
- Test all forms and buttons
- Verify videos still play
- Monitor analytics

### Content Updates

To update content:
1. Download `index.html` from server
2. Make changes locally
3. Upload updated file back to server
4. Clear browser cache to see changes

### Backup Strategy

1. Download all files regularly
2. Keep local copy of entire website
3. Save database backups (if applicable)
4. Store backups in secure location

---

## Security Best Practices

### Protect Your Site

1. **Keep software updated**: Update any CMS or backend software
2. **Use strong passwords**: For FTP and GoDaddy accounts
3. **Enable HTTPS**: Always use SSL certificate
4. **Monitor access logs**: Check for suspicious activity
5. **Regular backups**: Maintain current backups
6. **Disable directory listing**: Prevent browsing of folders
7. **Remove unnecessary files**: Delete unused files

### htaccess Configuration (Optional)

Create `.htaccess` file in root directory:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Set cache expiration
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType video/mp4 "access plus 1 month"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>

# Prevent directory listing
Options -Indexes

# Redirect HTTP to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Advanced Configuration

### Custom Domain Email (Optional)

1. In GoDaddy, set up email for your domain
2. Use email addresses like `hello@digitalself.live`
3. Configure email forwarding if needed

### Analytics Integration (Optional)

Add Google Analytics to track visitors:

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your actual tracking ID.

### Contact Form (Optional)

To add a working contact form:

1. Use third-party service (Formspree, Netlify Forms, etc.)
2. Or use PHP backend (if supported by GoDaddy)
3. Update form action in HTML

---

## Support Resources

### GoDaddy Support

- **Phone**: 1-480-505-8877 (US)
- **Chat**: Available in GoDaddy account
- **Help Center**: https://www.godaddy.com/help
- **Community**: https://www.godaddy.com/community

### General Web Resources

- **MDN Web Docs**: https://developer.mozilla.org/
- **W3C Standards**: https://www.w3.org/
- **Stack Overflow**: https://stackoverflow.com/
- **Can I Use**: https://caniuse.com/

---

## Deployment Checklist

Final verification before going live:

- [ ] All files uploaded to correct locations
- [ ] File permissions set correctly (755 for folders, 644 for files)
- [ ] Domain points to hosting
- [ ] HTTPS/SSL certificate installed
- [ ] Website loads without errors
- [ ] All videos autoplay and loop
- [ ] All images display correctly
- [ ] Navigation links work
- [ ] Scroll animations function
- [ ] Buttons are clickable
- [ ] Responsive design works on mobile
- [ ] No console errors in browser
- [ ] Page loads in under 3 seconds
- [ ] Analytics tracking installed (if desired)
- [ ] Backup of all files created

---

## Post-Launch

### Monitor Performance

1. Check analytics daily for first week
2. Monitor uptime
3. Track page load times
4. Review user feedback

### Gather Feedback

1. Share link with team
2. Test on various devices
3. Collect feedback
4. Make adjustments as needed

### Promote Your Site

1. Share on social media
2. Add to email signatures
3. Update business directories
4. Submit to search engines

---

## Next Steps

Once deployed, consider:

1. **SEO Optimization**: Add meta descriptions, keywords
2. **Social Media Integration**: Add share buttons
3. **Email Integration**: Set up contact forms
4. **Analytics**: Track visitor behavior
5. **Content Updates**: Keep content fresh
6. **Performance Monitoring**: Track metrics regularly

---

## Questions?

If you encounter issues:

1. Check this guide for solutions
2. Review browser console for errors
3. Contact GoDaddy support
4. Check file permissions and paths
5. Verify all files are uploaded

---

**Deployment Date**: [Insert date]  
**Domain**: [Insert domain]  
**Status**: Ready for Production  
**Last Updated**: January 2026
