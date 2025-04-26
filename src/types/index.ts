/**
 * Common type definitions for the application
 */

/**
 * Navigation link type
 */
export interface NavLink {
  id: string | number;
  navLink: string;
  href: string;
}

/**
 * User profile type
 */
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}

/**
 * Course type
 */
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image?: string;
  features?: string[];
}

/**
 * Loan type
 */
export interface Loan {
  id: string;
  name: string;
  description: string;
  amount: number;
  interestRate: number;
  term: number; // in months
  features?: string[];
}

/**
 * Testimonial type
 */
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  image?: string;
  text: string;
  rating?: number;
}

/**
 * FAQ item type
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Contact form data type
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
