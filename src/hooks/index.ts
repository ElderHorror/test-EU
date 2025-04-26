import { useEffect } from "react";
import useSWR from "swr";

/**
 * Hook to handle scrolling to hash fragments in URLs
 * @param offset - Offset from the top of the element (in pixels)
 * @param trigger - Whether to trigger the scroll effect
 */
export function useHashFragment(offset = 0, trigger = true) {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace("#", ""));

      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior: "smooth",
      });
    };

    if (!trigger) return;

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return () => window.removeEventListener("hashchange", scrollToHashElement);
  }, [trigger, offset]);
}

/**
 * Interface for geolocation data
 */
export interface GeoLocationData {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

/**
 * Hook to get user's geolocation data
 * @returns Object containing location data, loading state, and error state
 */
export const useLocation = () => {
  const { data, error } = useSWR(`/location`, async () => {
    try {
      const data = fetch("https://ipapi.co/json/", { method: "GET" });
      return (await data).json() ?? { country_code: "DN" };
    } catch (err: any) {
      return {
        country_code: "DN",
      };
    }
  });

  return {
    data: data as GeoLocationData,
    isLoading: !data,
    isError: !!error,
  };
};
