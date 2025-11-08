# 403 Error Troubleshooting Guide

## Immediate Steps to Try:

### Step 1: Upload Minimal .htaccess
- Upload the new minimal `.htaccess` file (only contains `Options -Indexes`)
- This removes any potential conflicts

### Step 2: Check Node.js App Status
1. **Login to cPanel**
2. **Go to Node.js Selector**
3. **Check your app status:**
   - Should show "Running" (green)
   - If "Stopped" (red), click "Start App"
   - If "Error", check the error logs

### Step 3: Try Different URLs
Try accessing your site using these URLs:
1. **Regular domain**: `https://yourdomain.com`
2. **Node.js Application URL**: Check cPanel Node.js Selector for the exact URL
3. **With port**: `https://yourdomain.com:3000` (or whatever port is assigned)

### Step 4: Check File Permissions Again
Make sure permissions are correct:
- **Files**: `644`
- **Folders**: `755`
- **server.js**: `755` (executable)

### Step 5: Verify File Structure
Your root directory should look like this:
```
/home8/sandiipc/alphadental.com.np/
├── .htaccess          (644)
├── server.js          (755)
├── package.json       (644)
├── .next/            (755)
├── node_modules/     (755)
├── src/              (755)
├── public/           (755)
└── ... (other files)
```

## Common Causes of Persistent 403:

### 1. Node.js App Not Running
- **Solution**: Start the app in cPanel Node.js Selector
- **Check**: App status should be "Running"

### 2. Wrong Application URL
- **Solution**: Use the Node.js Application URL from cPanel
- **Check**: This might be different from your regular domain

### 3. Server Configuration Issues
- **Solution**: Contact your hosting provider
- **Check**: Some hosts have specific Node.js requirements

### 4. Domain DNS Issues
- **Solution**: Check if domain points to correct server
- **Check**: DNS propagation might take time

## Alternative Solutions:

### Option 1: Try Without .htaccess
1. **Rename `.htaccess`** to `.htaccess.backup`
2. **Test your domain** - if it works, the issue was .htaccess
3. **If still 403**, the issue is elsewhere

### Option 2: Check cPanel Error Logs
1. **Go to cPanel** → **Error Logs**
2. **Look for specific error messages**
3. **Share the error details** for better troubleshooting

### Option 3: Contact Hosting Support
- **Share**: Your Node.js app configuration
- **Ask**: About Node.js hosting requirements
- **Request**: Help with 403 error on Node.js app

## Quick Test:
Try accessing: `https://yourdomain.com/server.js`
- If this works, your files are accessible
- If this gives 403, it's a server configuration issue
