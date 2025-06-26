# Files to Remove After Migration

The following files have been migrated to the new structure and can be safely removed:

## Components Folder (outside src)

- `Components/Button/BtnBlue.tsx` - Replaced by `src/components/common/buttons/Button.tsx`
- `Components/Button/BtnYellow.tsx` - Replaced by `src/components/common/buttons/Button.tsx`
- `Components/Button/NoarrowBtn.tsx` - Replaced by `src/components/common/buttons/Button.tsx`
- `Components/Commitment/CommitmentText.tsx` - Replaced by new section components
- `Components/Commitment/GridComp.tsx` - Replaced by new section components
- `Components/Commitment/GridProp.tsx` - Replaced by new section components
- `Components/Footer/Footerpropone.tsx` - Replaced by `src/components/layout/footer/Footer.tsx`
- `Components/Footer/Footerpropthree.tsx` - Replaced by `src/components/layout/footer/Footer.tsx`
- `Components/Footer/FooterProptwo.tsx` - Replaced by `src/components/layout/footer/Footer.tsx`
- `Components/Heropage/HeropageBody.tsx` - Replaced by `src/components/sections/hero/HomeHero.tsx`
- `Components/hooks.ts` - Replaced by `src/hooks/index.ts`
- `Components/Navbar/Navbar.tsx` - Replaced by `src/components/layout/navbar/Navbar.tsx`
- `Components/Navbar/NavbarList.tsx` - Replaced by `src/components/layout/navbar/NavbarList.tsx`
- `Components/Navbar/NavbarLogo.tsx` - Replaced by `src/components/layout/navbar/NavbarLogo.tsx`
- `Components/Provider/Fonts.tsx` - Replaced by `src/styles/fonts.tsx`
- `Components/Provider/Providers.tsx` - Replaced by `src/components/layout/Providers.tsx`
- `Components/ReviewsComp/ReviewList.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`
- `Components/ReviewsComp/ReviewMobile.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`
- `Components/ReviewsComp/ReviewsComp.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`

## Sections Folder

- `src/Sections/HeroSection/Heropage.tsx` - Replaced by `src/components/sections/hero/HomeHero.tsx`
- `src/Sections/Commitment/Commitment.tsx` - Replaced by `src/components/sections/training/TrainingSection.tsx` and `src/components/sections/consulting/ConsultingSection.tsx`
- `src/Sections/Footer/Footer.tsx` - Replaced by `src/components/layout/footer/Footer.tsx`
- `src/Sections/Footer/GITright.tsx` - No longer used
- `src/Sections/Loans/Loans.tsx` - Replaced by `src/components/sections/loans/LoansSection.tsx`
- `src/Sections/Loans/Testimonial.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`
- `src/Sections/Pros/Pros.tsx` - No longer used
- `src/Sections/Reviews/Reviews.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`

## App Pages Folder

- `src/app/pages/Home/Sections/Faq/faq.tsx` - Replaced by `src/components/sections/faq/Faq.tsx`
- `src/app/pages/Home/Sections/Footer/Footer.tsx` - Replaced by `src/components/layout/footer/Footer.tsx`
- `src/app/pages/Home/Sections/Testimonial/Testimonials.tsx` - Replaced by `src/components/sections/testimonials/Testimonials.tsx`

## Backup Files

- `src/app/page copy.tsx` - Backup file, can be removed
- `src/app/courses/page copy.tsx` - Backup file, can be removed

## Empty Directories

The following empty directories can be removed:
- `src/components/layout/` (if empty after migration)
- `src/components/sections/` (if empty after migration)
- `src/components/ui/` (if empty)

## Note

Before removing any files, make sure all functionality has been properly migrated and tested. It's recommended to keep the original files until the new structure has been thoroughly tested.
