# Push to GitHub - Quick Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `barber-studio-ploiesti` (or any name you prefer)
4. Description: "Barber Studio Ploiești - Modern barber shop website"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Copy Repository URL

After creating the repo, GitHub will show you the repository URL. It will look like:
- HTTPS: `https://github.com/YOUR_USERNAME/barber-studio-ploiesti.git`
- SSH: `git@github.com:YOUR_USERNAME/barber-studio-ploiesti.git`

**Copy the HTTPS URL** (easier for first-time setup)

## Step 3: Add Remote and Push

Run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/barber-studio-ploiesti.git
git branch -M main
git push -u origin main
```

## Alternative: I can help you push if you provide the repository URL

Just tell me your GitHub repository URL and I'll run the commands for you!

