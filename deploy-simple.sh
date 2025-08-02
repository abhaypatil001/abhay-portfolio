#!/bin/bash

echo "🚀 Simple deployment to GitHub Pages..."

# Build the project
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Copy built files to root for GitHub Pages
    cp -r dist/* .
    
    # Add and commit
    git add .
    git commit -m "Deploy built files to GitHub Pages"
    git push
    
    echo "🎉 Deployment complete!"
    echo "Your site should be available at: https://abhaypatil001.github.io/abhay-portfolio/"
else
    echo "❌ Build failed!"
fi
