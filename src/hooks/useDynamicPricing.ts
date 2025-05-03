"use client";

import { useState, useEffect } from "react";
import { getUserCountry } from "@/utils/geolocation";
import { convertPrice, parsePriceString, PriceInfo } from "@/utils/pricing";

/**
 * Interface for the return value of the useDynamicPricing hook
 */
interface UseDynamicPricingReturn {
  localizedPrices: Record<string, PriceInfo>;
  isLoading: boolean;
  countryCode: string;
  currency: string;
  currencySymbol: string;
}

/**
 * Custom hook for dynamic pricing based on user's location
 * @param prices Object with course IDs as keys and USD price strings as values
 * @returns Object with localized prices and location information
 */
export function useDynamicPricing(
  prices: Record<string, string>
): UseDynamicPricingReturn {
  const [localizedPrices, setLocalizedPrices] = useState<
    Record<string, PriceInfo>
  >({});
  const [isLoading, setIsLoading] = useState(true);
  const [countryCode, setCountryCode] = useState("US");
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(() => {
    // Skip if prices object is empty
    if (Object.keys(prices).length === 0) {
      return;
    }

    // Flag to track if the component is still mounted
    let isMounted = true;

    async function detectLocationAndConvertPrices() {
      try {
        setIsLoading(true);

        // Get user's country information
        const countryInfo = await getUserCountry();
        console.log("Country info detected:", countryInfo);

        // Only update state if component is still mounted
        if (!isMounted) return;

        setCountryCode(countryInfo.countryCode);
        setCurrency(countryInfo.currency);
        setCurrencySymbol(countryInfo.currencySymbol);

        // Convert all prices to the local currency
        const convertedPrices: Record<string, PriceInfo> = {};

        console.log("Converting prices:", prices);

        for (const [courseId, priceString] of Object.entries(prices)) {
          console.log(
            `Processing course ${courseId} with price ${priceString}`
          );
          const usdPrice = parsePriceString(priceString);
          console.log(`Parsed USD price: ${usdPrice}`);

          convertedPrices[courseId] = convertPrice(
            usdPrice,
            countryInfo.currency,
            countryInfo.currencySymbol
          );

          console.log(
            `Converted price for ${courseId}:`,
            convertedPrices[courseId]
          );
        }

        console.log("All converted prices:", convertedPrices);

        // Only update state if component is still mounted
        if (!isMounted) return;
        setLocalizedPrices(convertedPrices);
      } catch (error) {
        console.error("Error in dynamic pricing:", error);

        // Only update state if component is still mounted
        if (!isMounted) return;

        // Fallback to USD prices
        const fallbackPrices: Record<string, PriceInfo> = {};
        for (const [courseId, priceString] of Object.entries(prices)) {
          const usdPrice = parsePriceString(priceString);
          fallbackPrices[courseId] = {
            amount: usdPrice,
            formattedPrice: priceString,
            currency: "USD",
            currencySymbol: "$",
          };
        }
        console.log("Using fallback USD prices:", fallbackPrices);
        setLocalizedPrices(fallbackPrices);
      } finally {
        // Only update state if component is still mounted
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    detectLocationAndConvertPrices();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [prices]);

  return {
    localizedPrices,
    isLoading,
    countryCode,
    currency,
    currencySymbol,
  };
}
