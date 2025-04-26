#!/bin/bash

# Script to update all pages to use the PageLayout component

# Function to update a page
update_page() {
  local file=$1
  echo "Updating $file..."
  
  # Replace Navbar import with PageLayout import
  sed -i 's/import Navbar from ".*Components\/Navbar\/Navbar";/import PageLayout from "@\/components\/layout\/PageLayout";/g' "$file"
  
  # Replace Footer import
  sed -i 's/import Footer from ".*Footer\/Footer";//' "$file"
  
  # Replace Navbar usage with PageLayout
  sed -i 's/<Box>.*<Navbar setPageMode={[^}]*} \/>.*<\/Box>/<PageLayout>/g' "$file"
  
  # Replace Footer usage with closing PageLayout tag
  sed -i 's/<Box>.*<Footer \/>.*<\/Box>/<\/PageLayout>/g' "$file"
  
  # Replace closing tag
  sed -i 's/<\/>//g' "$file"
  
  echo "Updated $file"
}

# List of files to update
files=(
  "src/app/blog/page.tsx"
  "src/app/bootcamp/page.tsx"
  "src/app/consultation/page.tsx"
  "src/app/cookie-policy/page.tsx"
  "src/app/courses/01/page.tsx"
  "src/app/courses/checkout/checkout.tsx"
  "src/app/courses/checkout/page.tsx"
  "src/app/loans/page.tsx"
  "src/app/online-courses/page.tsx"
  "src/app/privacy-policy/page.tsx"
  "src/app/terms-of-service/page.tsx"
)

# Update each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    update_page "$file"
  else
    echo "File $file not found, skipping..."
  fi
done

echo "All pages updated!"
