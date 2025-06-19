/**
 * Utility functions for dynamic pricing
 */

/**
 * Exchange rates for different currencies relative to USD
 * These are approximate and should be updated regularly with real exchange rates
 * Last updated: May 2024
 */
const exchangeRates: Record<string, number> = {
  USD: 1.0,
  GBP: 0.79,
  EUR: 0.93,
  NGN: 1500.0,
  KES: 132.0,
  ZAR: 18.7,
  GHS: 15.5,
  INR: 83.3,
  CAD: 1.37,
  AUD: 1.51,
  // Add more currencies as needed
};

/**
 * Interface for price information
 */
export interface PriceInfo {
  amount: number;
  formattedPrice: string;
  currency: string;
  currencySymbol: string;
}

/**
 * Convert a USD price to another currency
 * @param usdPrice Price in USD (without the $ symbol)
 * @param targetCurrency Target currency code
 * @param currencySymbol Currency symbol for the target currency
 * @returns Converted price information
 */
export function convertPrice(
  usdPrice: number,
  targetCurrency: string,
  currencySymbol: string
): PriceInfo {
  // Default to USD if the target currency is not supported
  const exchangeRate = exchangeRates[targetCurrency] || 1.0;

  // Convert the price
  const convertedAmount = usdPrice * exchangeRate;

  // Format the price based on the currency
  let formattedAmount: string;

  if (targetCurrency === "USD") {
    formattedAmount = convertedAmount.toFixed(2);
  } else if (["EUR", "GBP", "AUD", "CAD"].includes(targetCurrency)) {
    // Most western currencies use 2 decimal places
    formattedAmount = convertedAmount.toFixed(2);
  } else if (["JPY", "KRW", "IDR"].includes(targetCurrency)) {
    // Some currencies don't typically use decimal places
    formattedAmount = Math.round(convertedAmount).toString();
  } else if (["NGN", "KES", "ZAR", "GHS"].includes(targetCurrency)) {
    // Round to nearest whole number for some African currencies
    formattedAmount = Math.round(convertedAmount).toString();
  } else {
    // Default formatting
    formattedAmount = convertedAmount.toFixed(2);
  }

  const result = {
    amount: convertedAmount,
    formattedPrice: `${currencySymbol}${formattedAmount}`,
    currency: targetCurrency,
    currencySymbol,
  };

  return result;
}

/**
 * Parse a price string (e.g., "$74.99") to get the numeric value
 * @param priceString Price string with currency symbol
 * @returns Numeric price value
 */
export function parsePriceString(priceString: string): number {
  // Remove currency symbols and other non-numeric characters except decimal point
  const numericString = priceString.replace(/[^0-9.]/g, "");
  return parseFloat(numericString);
}
