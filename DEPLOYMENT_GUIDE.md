# cPanel Deployment Guide for Alpha Dental Clinic

## Pre-Deployment Checklist ✅

### Files Ready for Upload:
1. **All files in `/client/clinic/` directory**
2. **`.next/` folder** (build output)
3. **`node_modules/` folder** (dependencies)
4. **`package.json`** (updated with correct scripts)
5. **`server.js`** (custom server)
6. **`.htaccess`** (in root directory - IMPORTANT!)

## cPanel Upload Instructions:

### Step 1: Upload Files
1. Login to your cPanel
2. Go to **File Manager**
3. Navigate to your domain's root directory (e.g., `/home8/sandiipc/alphadental.com.np/`)
4. Upload all files from `/client/clinic/` folder
5. **CRITICAL**: Make sure `.htaccess` is in the root directory (same level as `server.js`)

### Step 2: Set Up Node.js App
1. In cPanel, go to **Node.js Selector**
2. Create a new Node.js application:
   - **Node.js version**: 18.x or higher
   - **Application root**: `/home8/sandiipc/alphadental.com.np/` (your domain root)
   - **Application URL**: Your domain name
   - **Application startup file**: `server.js`
   - **Environment variables**: Leave empty (not needed)

### Step 3: Install Dependencies
1. In Node.js Selector, click **NPM Install**
2. This will install all dependencies from `package.json`

### Step 4: Start Application
1. Click **Start App** in Node.js Selector
2. Your app should be running on your domain

## Important Notes:

### Backend API Configuration:
- Your frontend is configured to connect to: `http://backend.alphadental.com.np/api/appointments/`
- Make sure your Django backend is deployed and accessible at this URL
- If backend URL changes, update `src/utils/api.js`

### Environment Variables:
- The app will run in production mode automatically
- Port is set to 3000 (cPanel will handle port mapping)
- No additional environment variables needed

### Static Files:
- All static files are optimized and ready
- Images are unoptimized for better cPanel compatibility
- CSS and JS files are minified and compressed

## Troubleshooting:

### If App Doesn't Start:
1. Check Node.js version (should be 18+)
2. Verify `server.js` is the startup file
3. Check cPanel error logs
4. Ensure `.htaccess` is in the root directory (not in public folder)

### If Pages Don't Load:
1. Verify `.htaccess` is uploaded correctly in root directory
2. Check file permissions (should be 644 for files, 755 for folders)
3. Ensure all files are in the correct directory structure
4. Make sure `.htaccess` is at the same level as `server.js`

### Common cPanel Issues:
- **Error: No such file or directory: '/home8/sandiipc/alphadental.com.np/.htaccess'**
  - Solution: Upload `.htaccess` to the root directory, not in public folder
- **Node.js app not starting**
  - Solution: Check that `server.js` is in the root directory
- **Environment variables error**
  - Solution: Leave environment variables empty in cPanel Node.js setup
- **Domain shows file directory instead of app**
  - Solution: Make sure Node.js app is running and `.htaccess` has `Options -Indexes`
  - Check that your Node.js application is started in cPanel Node.js Selector
- **Domain shows index.html instead of Next.js app**
  - Solution: Remove any `index.html` file from root directory
  - Ensure Node.js app is running and accessible via the assigned port
  - Check cPanel Node.js Selector shows "Running" status
- **403 Forbidden Error**
  - Solution: Upload the updated `.htaccess` file that allows access
  - Check file permissions in cPanel File Manager (should be 644 for files, 755 for folders)
  - Ensure Node.js app is running in cPanel Node.js Selector
  - Try accessing via the Node.js Application URL instead of regular domain

### If API Calls Fail:
1. Verify backend is running and accessible
2. Check CORS settings on Django backend
3. Update API URL in `src/utils/api.js` if needed

## Performance Optimizations 
- ✅ Static generation for all pages
- ✅ Image optimization disabled for cPanel compatibility
- ✅ Compression enabled via .htaccess
- ✅ Browser caching configured
- ✅ Security headers added

## Your app is now ready for cPanel hosting! 🚀
