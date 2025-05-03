/**
 * Utility functions for geolocation and country detection
 */

// Cache for country information to prevent multiple API calls
let countryInfoCache: CountryInfo | null = null;

/**
 * Interface for country information
 */
interface CountryInfo {
  country: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
}

/**
 * Default country information (US)
 */
const defaultCountry: CountryInfo = {
  country: "United States",
  countryCode: "US",
  currency: "USD",
  currencySymbol: "$",
};

/**
 * Map of country codes to currency information
 */
const countryCurrencyMap: Record<string, { currency: string; symbol: string }> =
  {
    US: { currency: "USD", symbol: "$" },
    GB: { currency: "GBP", symbol: "£" },
    EU: { currency: "EUR", symbol: "€" },
    NG: { currency: "NGN", symbol: "₦" },
    KE: { currency: "KES", symbol: "KSh" },
    ZA: { currency: "ZAR", symbol: "R" },
    GH: { currency: "GHS", symbol: "GH₵" },
    IN: { currency: "INR", symbol: "₹" },
    CA: { currency: "CAD", symbol: "C$" },
    AU: { currency: "AUD", symbol: "A$" },
    // Add more countries as needed
  };

/**
 * Get user's country information using a free IP geolocation API
 * @returns Promise with country information
 */
export async function getUserCountry(): Promise<CountryInfo> {
  // Return cached result if available to prevent multiple API calls
  if (countryInfoCache) {
    console.log("Using cached country info:", countryInfoCache);
    return countryInfoCache;
  }

  try {
    console.log("Fetching country info from API...");
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    console.log("Geolocation API response:", data);

    if (data.country_code && countryCurrencyMap[data.country_code]) {
      const currencyInfo = countryCurrencyMap[data.country_code];
      const countryInfo = {
        country: data.country_name,
        countryCode: data.country_code,
        currency: currencyInfo.currency,
        currencySymbol: currencyInfo.symbol,
      };

      // Cache the result
      countryInfoCache = countryInfo;
      return countryInfo;
    }

    // Cache the default country as well
    countryInfoCache = defaultCountry;
    return defaultCountry;
  } catch (error) {
    console.error("Error detecting country:", error);
    return defaultCountry;
  }
}

/**
 * Get country information from a country code
 * @param countryCode ISO country code
 * @returns Country information
 */
export function getCountryInfoByCode(countryCode: string): CountryInfo {
  if (countryCode && countryCurrencyMap[countryCode]) {
    const currencyInfo = countryCurrencyMap[countryCode];
    return {
      country: countryCode, // We don't have the full country name here
      countryCode: countryCode,
      currency: currencyInfo.currency,
      currencySymbol: currencyInfo.symbol,
    };
  }

  return defaultCountry;
}
