"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
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

// Global cache to prevent multiple API calls across components
let globalCountryCache: any = null;
let globalPriceCache: Record<string, Record<string, PriceInfo>> = {};

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

  // Memoize the prices object to prevent unnecessary re-renders
  const memoizedPrices = useMemo(() => prices, [prices]);

  // Create a cache key for the current prices
  const pricesCacheKey = useMemo(() => {
    return JSON.stringify(memoizedPrices);
  }, [memoizedPrices]);

  const convertPricesForCountry = useCallback(
    (countryInfo: any, pricesObj: Record<string, string>) => {
      const convertedPrices: Record<string, PriceInfo> = {};

      for (const [courseId, priceString] of Object.entries(pricesObj)) {
        const usdPrice = parsePriceString(priceString);
        convertedPrices[courseId] = convertPrice(
          usdPrice,
          countryInfo.currency,
          countryInfo.currencySymbol
        );
      }

      return convertedPrices;
    },
    []
  );

  const createFallbackPrices = useCallback(
    (pricesObj: Record<string, string>) => {
      const fallbackPrices: Record<string, PriceInfo> = {};
      for (const [courseId, priceString] of Object.entries(pricesObj)) {
        const usdPrice = parsePriceString(priceString);
        fallbackPrices[courseId] = {
          amount: usdPrice,
          formattedPrice: priceString,
          currency: "USD",
          currencySymbol: "$",
        };
      }
      return fallbackPrices;
    },
    []
  );

  useEffect(() => {
    // Skip if prices object is empty
    if (Object.keys(memoizedPrices).length === 0) {
      setIsLoading(false);
      return;
    }

    // Check if we have cached prices for this exact price set
    if (globalPriceCache[pricesCacheKey]) {
      setLocalizedPrices(globalPriceCache[pricesCacheKey]);
      setIsLoading(false);
      return;
    }

    // Flag to track if the component is still mounted
    let isMounted = true;

    async function detectLocationAndConvertPrices() {
      try {
        setIsLoading(true);

        let countryInfo;

        // Use cached country info if available
        if (globalCountryCache) {
          countryInfo = globalCountryCache;
        } else {
          // Get user's country information
          countryInfo = await getUserCountry();
          globalCountryCache = countryInfo;
        }

        // Only update state if component is still mounted
        if (!isMounted) return;

        setCountryCode(countryInfo.countryCode);
        setCurrency(countryInfo.currency);
        setCurrencySymbol(countryInfo.currencySymbol);

        // Convert all prices to the local currency
        const convertedPrices = convertPricesForCountry(
          countryInfo,
          memoizedPrices
        );

        // Cache the converted prices
        globalPriceCache[pricesCacheKey] = convertedPrices;

        // Only update state if component is still mounted
        if (!isMounted) return;
        setLocalizedPrices(convertedPrices);
      } catch (error) {
        // Only update state if component is still mounted
        if (!isMounted) return;

        // Fallback to USD prices
        const fallbackPrices = createFallbackPrices(memoizedPrices);
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
  }, [
    memoizedPrices,
    pricesCacheKey,
    convertPricesForCountry,
    createFallbackPrices,
  ]);

  return {
    localizedPrices,
    isLoading,
    countryCode,
    currency,
    currencySymbol,
  };
}
