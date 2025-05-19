"use client";
import { Box, Button } from "@chakra-ui/react";
import NewCalculator from "./NewCalculator";

/**
 * Loan calculator component
 * Allows users to calculate loan repayments based on different parameters
 */
export default function Calculator(props: any) {
  // Function to reset pageMode and reload page
  const handleResetPageMode = () => {
    try {
      localStorage.setItem("pageMode", "0");
      console.log("PageMode reset to 0");
      // Reload the page to apply changes
      window.location.reload();
    } catch (error) {
      console.error("Error resetting pageMode:", error);
    }
  };

  // Only show reset button if not used as a child component
  const showResetButton = !props.border && !props.boxShadow;

  return (
    <Box
      minH={props.minH || "calc(100vh - 30rem)"}
      mt={props.mt || "10rem"}
      {...props}
    >
      {/* Reset button for users stuck in calculator mode */}
      {showResetButton && (
        <Box textAlign="center" mb="2rem">
          <Button onClick={handleResetPageMode} colorScheme="blue" size="sm">
            Show Full Website
          </Button>
        </Box>
      )}

      {/* New Calculator Component */}
      <NewCalculator {...props} />
    </Box>
  );
}
