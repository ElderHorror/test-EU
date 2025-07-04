"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  FormLabel,
  Select,
  FormControl,
  FormErrorMessage,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Loan purpose options
const LOAN_PURPOSE = {
  FLIGHT: "Flight",
  ACCOMMODATION: "Accommodation",
  SETTLEMENT: "Settlement",
};

// Repayment plan options
const REPAYMENT_PLANS = {
  SWIFT: "Swift Settlement Plan",
  BALANCED: "Balanced Two-Phase Plan",
  STRUCTURED: "Structure Three-Phase Plan",
  FLEX_TWO: "Flex Two-Phase Plan",
  FLEX_THREE: "Flex Three-Phase Plan",
};

// Initial state for the calculator
const initialState = {
  loanPurpose: "",
  loanAmount: "",
  repaymentPlan: "",
  installmentStructure: "",
  maxAmount: 0,
};

/**
 * New Loan calculator component
 * Allows users to calculate loan repayments based on different parameters
 */
export default function NewCalculator(props: any) {
  // State for form data
  const [formData, setFormData] = useState(initialState);

  // State for available repayment plans based on loan purpose
  const [availableRepaymentPlans, setAvailableRepaymentPlans] = useState<
    string[]
  >([]);

  // State for repayment details
  const [repaymentMonths, setRepaymentMonths] = useState(0);
  const [interestBreakdown, setInterestBreakdown] = useState("");
  const [installmentPlaceholder, setInstallmentPlaceholder] = useState("");

  // State for form submission and results
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculationResults, setCalculationResults] = useState<any>(null);

  // State for form errors
  const [errors, setErrors] = useState({
    loanPurpose: false,
    loanAmount: false,
    repaymentPlan: false,
    installmentStructure: false,
    installmentSum: false,
    installmentCount: false,
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear submission state when form changes
    if (isSubmitted) {
      setIsSubmitted(false);
      setCalculationResults(null);
    }
  };

  // Define section headers for dropdown
  const SECTION_HEADERS = {
    FIXED: "FIXED_HEADER",
    FLEXIBLE: "FLEXIBLE_HEADER",
  };

  // Update available repayment plans when loan purpose changes
  useEffect(() => {
    if (formData.loanPurpose === LOAN_PURPOSE.FLIGHT) {
      // For Flight, just show the regular plans without categories
      setAvailableRepaymentPlans([
        REPAYMENT_PLANS.SWIFT,
        REPAYMENT_PLANS.BALANCED,
        REPAYMENT_PLANS.STRUCTURED,
      ]);
      setFormData((prev) => ({
        ...prev,
        repaymentPlan: "",
        maxAmount: 2000,
      }));
    } else if (
      formData.loanPurpose === LOAN_PURPOSE.ACCOMMODATION ||
      formData.loanPurpose === LOAN_PURPOSE.SETTLEMENT
    ) {
      // For Accommodation and Settlement, include category headers
      setAvailableRepaymentPlans([
        SECTION_HEADERS.FIXED, // This is a header, not a selectable option
        REPAYMENT_PLANS.SWIFT,
        REPAYMENT_PLANS.BALANCED,
        REPAYMENT_PLANS.STRUCTURED,
        SECTION_HEADERS.FLEXIBLE, // This is a header, not a selectable option
        REPAYMENT_PLANS.FLEX_TWO,
        REPAYMENT_PLANS.FLEX_THREE,
      ]);
      setFormData((prev) => ({
        ...prev,
        repaymentPlan: "",
        maxAmount: 1500,
      }));
    } else {
      setAvailableRepaymentPlans([]);
      setFormData((prev) => ({
        ...prev,
        repaymentPlan: "",
        maxAmount: 0,
      }));
    }
  }, [formData.loanPurpose, SECTION_HEADERS.FIXED, SECTION_HEADERS.FLEXIBLE]);

  // Update repayment details when repayment plan changes
  useEffect(() => {
    switch (formData.repaymentPlan) {
      case REPAYMENT_PLANS.SWIFT:
        setRepaymentMonths(1);
        setInterestBreakdown("First month = 10%");
        setInstallmentPlaceholder("100%");
        setFormData((prev) => ({
          ...prev,
          installmentStructure: "100",
        }));
        break;
      case REPAYMENT_PLANS.BALANCED:
        setRepaymentMonths(2);
        setInterestBreakdown("First month = 10%, Second month = 5%");
        setInstallmentPlaceholder("50, 50");
        setFormData((prev) => ({
          ...prev,
          installmentStructure: "50, 50",
        }));
        break;
      case REPAYMENT_PLANS.STRUCTURED:
        setRepaymentMonths(3);
        setInterestBreakdown(
          "First month = 10%, Second month = 5%, Third month = 5%"
        );
        setInstallmentPlaceholder("40, 30, 30");
        setFormData((prev) => ({
          ...prev,
          installmentStructure: "40, 30, 30",
        }));
        break;
      case REPAYMENT_PLANS.FLEX_TWO:
        setRepaymentMonths(2);
        setInterestBreakdown("First month = 10%, Second month = 5%");
        setInstallmentPlaceholder("Enter two percentages, e.g., 60, 40");
        setFormData((prev) => ({
          ...prev,
          installmentStructure: "",
        }));
        break;
      case REPAYMENT_PLANS.FLEX_THREE:
        setRepaymentMonths(3);
        setInterestBreakdown(
          "First month = 10%, Second month = 5%, Third month = 5%"
        );
        setInstallmentPlaceholder("Enter three percentages, e.g., 40, 30, 30");
        setFormData((prev) => ({
          ...prev,
          installmentStructure: "",
        }));
        break;
      default:
        setRepaymentMonths(0);
        setInterestBreakdown("");
        setInstallmentPlaceholder("");
    }
  }, [formData.repaymentPlan]);

  // Validate form data
  const validateForm = () => {
    const newErrors = {
      loanPurpose: !formData.loanPurpose,
      loanAmount:
        !formData.loanAmount ||
        Number(formData.loanAmount) <= 0 ||
        Number(formData.loanAmount) > formData.maxAmount,
      repaymentPlan: !formData.repaymentPlan,
      installmentStructure: false,
      installmentSum: false,
      installmentCount: false,
    };

    // For fixed repayment plans, validation is not needed as values are pre-set
    // For flex plans, validate structure, count, and sum
    if (
      formData.repaymentPlan === REPAYMENT_PLANS.FLEX_TWO ||
      formData.repaymentPlan === REPAYMENT_PLANS.FLEX_THREE
    ) {
      // Check if structure is provided
      if (!formData.installmentStructure) {
        newErrors.installmentStructure = true;
      } else {
        // Parse and validate installments
        const installments = formData.installmentStructure
          .split(",")
          .map((val) => val.trim())
          .filter((val) => val !== "") // Filter out empty values
          .map((val) => Number(val));

        // Validate number of installments
        const requiredCount =
          formData.repaymentPlan === REPAYMENT_PLANS.FLEX_TWO ? 2 : 3;
        if (installments.length !== requiredCount) {
          newErrors.installmentCount = true;
        }

        // Validate sum equals 100%
        const sum = installments.reduce((acc, val) => acc + val, 0);
        newErrors.installmentSum = Math.abs(sum - 100) > 0.01; // Allow for small floating point errors

        // Check for invalid values (NaN, negative, etc.)
        if (installments.some((val) => isNaN(val) || val < 0)) {
          newErrors.installmentStructure = true;
        }
      }
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Calculate repayment amounts
    const amount = Number(formData.loanAmount);

    // Parse installment structure based on the repayment plan
    let installments: number[] = [];

    if (formData.repaymentPlan === REPAYMENT_PLANS.SWIFT) {
      installments = [1]; // 100%
    } else if (formData.repaymentPlan === REPAYMENT_PLANS.BALANCED) {
      installments = [0.5, 0.5]; // 50%, 50%
    } else if (formData.repaymentPlan === REPAYMENT_PLANS.STRUCTURED) {
      installments = [0.4, 0.3, 0.3]; // 40%, 30%, 30%
    } else {
      // For flex plans, parse the user input
      installments = formData.installmentStructure
        .split(",")
        .map((val) => Number(val.trim()) / 100);
    }

    // Determine the payment structure display
    let paymentStructureDisplay = "";
    if (formData.repaymentPlan === REPAYMENT_PLANS.SWIFT) {
      paymentStructureDisplay = "100%";
    } else if (formData.repaymentPlan === REPAYMENT_PLANS.BALANCED) {
      paymentStructureDisplay = "50%, 50%";
    } else if (formData.repaymentPlan === REPAYMENT_PLANS.STRUCTURED) {
      paymentStructureDisplay = "40%, 30%, 30%";
    } else {
      // For flex plans, use the user input
      paymentStructureDisplay = formData.installmentStructure
        .split(",")
        .map((val) => `${val.trim()}%`)
        .join(", ");
    }

    const results = {
      purpose: formData.loanPurpose,
      amount: amount,
      repaymentPlan: formData.repaymentPlan,
      paymentStructure: paymentStructureDisplay,
      serviceCharges: 10,
      repayments: [] as {
        month: number;
        installment: number;
        interest: number;
        serviceCharge: number;
        remainingPrincipal: number;
        amount: number;
      }[],
      total: 0,
    };

    // Calculate repayments based on plan
    let total = 0;
    let remainingPrincipal = amount;

    for (let i = 0; i < repaymentMonths; i++) {
      const interestRate = i === 0 ? 0.1 : 0.05; // 10% for first month, 5% for others

      // Calculate installment amount for this month
      const installmentAmount = amount * installments[i];

      // Calculate interest based on remaining principal
      const interestAmount = remainingPrincipal * interestRate;

      // Add service charge only to the first month
      const serviceCharge = i === 0 ? results.serviceCharges : 0;

      // Calculate total monthly payment
      const monthlyAmount = installmentAmount + interestAmount + serviceCharge;

      // Update remaining principal
      remainingPrincipal -= installmentAmount;

      // Add to total
      total += monthlyAmount;

      results.repayments.push({
        month: i + 1,
        installment: parseFloat(installmentAmount.toFixed(2)),
        interest: parseFloat(interestAmount.toFixed(2)),
        serviceCharge: serviceCharge,
        remainingPrincipal: parseFloat(remainingPrincipal.toFixed(2)),
        amount: parseFloat(monthlyAmount.toFixed(2)),
      });
    }

    results.total = parseFloat(total.toFixed(2));

    setCalculationResults(results);
    setIsSubmitted(true);
  };

  return (
    <Box minH="auto" {...props}>
      <Box
        mt={{ base: "2rem", lg: "0rem" }}
        margin={!props ? "auto" : "unset"}
        p={{ base: "1rem", md: "1.5rem 2rem" }}
        border={props.border || "1px solid black"}
        borderRadius="0.5rem"
        maxW={!props ? "30rem" : "40rem"}
        width={{ base: "95%", sm: "auto" }}
        boxShadow={props.boxShadow}
        overflow="hidden"
      >
        <Text
          fontFamily="ClashDisplay"
          fontSize="1.5rem"
          fontWeight="700"
          textAlign="center"
          my="2rem"
        >
          Loan Calculator
        </Text>

        <form onSubmit={handleSubmit}>
          {/* Loan Purpose */}
          <FormControl isInvalid={errors.loanPurpose} mb="1rem">
            <FormLabel fontWeight="700">Loan Purpose:</FormLabel>
            <Select
              name="loanPurpose"
              placeholder="--Please choose an option--"
              value={formData.loanPurpose}
              onChange={handleChange}
              size="md"
              borderRadius="md"
            >
              <option value={LOAN_PURPOSE.FLIGHT}>{LOAN_PURPOSE.FLIGHT}</option>
              <option value={LOAN_PURPOSE.ACCOMMODATION}>
                {LOAN_PURPOSE.ACCOMMODATION}
              </option>
              <option value={LOAN_PURPOSE.SETTLEMENT}>
                {LOAN_PURPOSE.SETTLEMENT}
              </option>
            </Select>
            {errors.loanPurpose && (
              <FormErrorMessage>Please select a loan purpose</FormErrorMessage>
            )}
          </FormControl>

          {/* Loan Amount */}
          <FormControl isInvalid={errors.loanAmount} mb="1rem">
            <FormLabel fontWeight="700">
              Loan Amount (Max €: {formData.maxAmount || "1500"})
            </FormLabel>
            <Input
              name="loanAmount"
              placeholder="Enter amount, e.g.: 300"
              value={formData.loanAmount}
              onChange={handleChange}
              type="number"
              max={formData.maxAmount}
              min={1}
              size="md"
              borderRadius="md"
            />
            {errors.loanAmount && (
              <FormErrorMessage>
                Please enter a valid amount (1-{formData.maxAmount})
              </FormErrorMessage>
            )}
          </FormControl>

          {/* Repayment Plan */}
          <FormControl isInvalid={errors.repaymentPlan} mb="1rem">
            <FormLabel fontWeight="700">Repayment Plan</FormLabel>
            <Select
              name="repaymentPlan"
              placeholder="--Please choose an option--"
              value={formData.repaymentPlan}
              onChange={handleChange}
              isDisabled={!formData.loanPurpose}
              size="md"
              borderRadius="md"
            >
              {availableRepaymentPlans.map((plan) => {
                // Check if this is a section header
                if (plan === SECTION_HEADERS.FIXED) {
                  return (
                    <option
                      key={plan}
                      value=""
                      disabled
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      Fixed Repayment
                    </option>
                  );
                } else if (plan === SECTION_HEADERS.FLEXIBLE) {
                  return (
                    <option
                      key={plan}
                      value=""
                      disabled
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      Flexible Repayment
                    </option>
                  );
                } else {
                  // Regular option with indentation
                  return (
                    <option key={plan} value={plan}>
                      {"        " + plan}
                    </option>
                  );
                }
              })}
            </Select>
            {errors.repaymentPlan && (
              <FormErrorMessage>
                Please select a repayment plan
              </FormErrorMessage>
            )}
          </FormControl>

          {/* Repayment Month Display */}
          {repaymentMonths > 0 && (
            <Box mb="1rem">
              <Text fontWeight="700">
                Repayment Month:{" "}
                <Text as="span" fontSize="0.8rem" color="#d0710b">
                  {repaymentMonths} {repaymentMonths === 1 ? "Month" : "Months"}
                </Text>
              </Text>
            </Box>
          )}

          {/* Interest Breakdown Display */}
          {interestBreakdown && (
            <Box mb="1rem">
              <Text fontWeight="700">
                Interest Breakdown:{" "}
                <Text as="span" fontSize="0.8rem" color="#d0710b">
                  {interestBreakdown}
                </Text>
              </Text>
            </Box>
          )}

          {/* Installment Payment Structure */}
          {formData.repaymentPlan && (
            <FormControl
              isInvalid={
                errors.installmentStructure ||
                errors.installmentSum ||
                errors.installmentCount
              }
              mb="1.5rem"
            >
              <FormLabel fontWeight="700">
                Installment Payment Structure (sums up to 100)
              </FormLabel>
              <Input
                name="installmentStructure"
                placeholder={installmentPlaceholder}
                value={formData.installmentStructure}
                onChange={handleChange}
                isDisabled={
                  formData.repaymentPlan === REPAYMENT_PLANS.SWIFT ||
                  formData.repaymentPlan === REPAYMENT_PLANS.BALANCED ||
                  formData.repaymentPlan === REPAYMENT_PLANS.STRUCTURED
                }
                size="md"
                borderRadius="md"
              />
              {errors.installmentStructure && (
                <FormErrorMessage>
                  Please enter valid installment percentages
                </FormErrorMessage>
              )}
              {errors.installmentSum && (
                <FormErrorMessage>
                  Installment percentages must sum to 100%
                </FormErrorMessage>
              )}
              {errors.installmentCount && (
                <FormErrorMessage>
                  {formData.repaymentPlan === REPAYMENT_PLANS.FLEX_TWO
                    ? "Please enter exactly 2 installment percentages"
                    : "Please enter exactly 3 installment percentages"}
                </FormErrorMessage>
              )}
              {(formData.repaymentPlan === REPAYMENT_PLANS.SWIFT ||
                formData.repaymentPlan === REPAYMENT_PLANS.BALANCED ||
                formData.repaymentPlan === REPAYMENT_PLANS.STRUCTURED) && (
                <Text fontSize="sm" color="gray.600" mt="1">
                  This repayment plan has a fixed payment structure.
                </Text>
              )}
            </FormControl>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            width="100%"
            mt="0.75rem"
            color="white"
            bgColor="black"
            borderRadius="none"
            _hover={{ bg: "#333" }}
            isDisabled={!formData.loanPurpose || !formData.repaymentPlan}
          >
            Submit
          </Button>
        </form>

        {/* Results Display */}
        {isSubmitted && calculationResults && (
          <Box mt="2rem" width="100%">
            <TableContainer
              width="100%"
              overflowX="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  height: "8px",
                  borderRadius: "8px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.2)`,
                  borderRadius: "8px",
                },
              }}
            >
              {/* Loan Details Table */}
              <Table
                variant="simple"
                size={{ base: "xs", sm: "sm" }}
                width="100%"
              >
                <Thead>
                  <Tr>
                    <Th
                      bg="blue.500"
                      color="white"
                      colSpan={2}
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Loan Details
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td
                      bg="blue.100"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                      width="40%"
                    >
                      Purpose
                    </Td>
                    <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                      {calculationResults.purpose}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      bg="blue.100"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Amount
                    </Td>
                    <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                      {calculationResults.amount} Euro
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      bg="blue.100"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Repayment Plan
                    </Td>
                    <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                      {calculationResults.repaymentPlan}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      bg="blue.100"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Payment Structure
                    </Td>
                    <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                      {calculationResults.paymentStructure}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      bg="blue.100"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Service charges
                    </Td>
                    <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                      {calculationResults.serviceCharges} Euro
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer
              mt="1rem"
              width="100%"
              overflowX="auto"
              sx={{
                "&::-webkit-scrollbar": {
                  height: "8px",
                  borderRadius: "8px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.2)`,
                  borderRadius: "8px",
                },
              }}
            >
              {/* Repayment Breakdown Table */}
              <Table
                variant="simple"
                size={{ base: "xs", sm: "sm" }}
                width="100%"
              >
                <Thead>
                  <Tr>
                    <Th
                      bg="blue.500"
                      color="white"
                      colSpan={2}
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Repayment Breakdown
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {calculationResults.repayments.map((repayment: any) => (
                    <Tr key={`month-${repayment.month}`}>
                      <Td
                        bg="blue.100"
                        fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                        width="40%"
                      >
                        Month {repayment.month}
                      </Td>
                      <Td fontSize={{ base: "0.75rem", sm: "0.85rem" }}>
                        {repayment.amount.toFixed(2)} Euro
                      </Td>
                    </Tr>
                  ))}
                  <Tr>
                    <Td
                      bg="blue.500"
                      color="white"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      Total
                    </Td>
                    <Td
                      bg="blue.500"
                      color="white"
                      fontSize={{ base: "0.75rem", sm: "0.85rem" }}
                    >
                      {calculationResults.total.toFixed(2)} Euro
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
}
