#!/bin/bash

# Script to remove redundant files after migration
# This script should be run after thorough testing of the new structure

echo "Starting cleanup of redundant files..."

# Components Folder (outside src)
echo "Removing redundant components..."
rm -f Components/Button/BtnBlue.tsx
rm -f Components/Button/BtnYellow.tsx
rm -f Components/Button/NoarrowBtn.tsx
rm -f Components/Commitment/CommitmentText.tsx
rm -f Components/Commitment/GridComp.tsx
rm -f Components/Commitment/GridProp.tsx
rm -f Components/Footer/Footerpropone.tsx
rm -f Components/Footer/Footerpropthree.tsx
rm -f Components/Footer/FooterProptwo.tsx
rm -f Components/Heropage/HeropageBody.tsx
rm -f Components/hooks.ts
rm -f Components/Navbar/Navbar.tsx
rm -f Components/Navbar/NavbarList.tsx
rm -f Components/Navbar/NavbarLogo.tsx
rm -f Components/Provider/Fonts.tsx
rm -f Components/Provider/Providers.tsx
rm -f Components/ReviewsComp/ReviewList.tsx
rm -f Components/ReviewsComp/ReviewMobile.tsx
rm -f Components/ReviewsComp/ReviewsComp.tsx

# Sections Folder
echo "Removing redundant sections..."
rm -f src/Sections/HeroSection/Heropage.tsx
rm -f src/Sections/Commitment/Commitment.tsx
rm -f src/Sections/Footer/Footer.tsx
rm -f src/Sections/Footer/GITright.tsx
rm -f src/Sections/Loans/Loans.tsx
rm -f src/Sections/Loans/Testimonial.tsx
rm -f src/Sections/Pros/Pros.tsx
rm -f src/Sections/Reviews/Reviews.tsx

# App Pages Folder
echo "Removing redundant app pages..."
rm -f src/app/pages/Home/Sections/Faq/faq.tsx
rm -f src/app/pages/Home/Sections/Footer/Footer.tsx
rm -f src/app/pages/Home/Sections/Testimonial/Testimonials.tsx

# Backup Files
echo "Removing backup files..."
rm -f src/app/page\ copy.tsx
rm -f src/app/courses/page\ copy.tsx

echo "Cleanup complete!"
echo "Note: Please test the application thoroughly after cleanup."
