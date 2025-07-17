// src/components/ApplyModal.tsx
"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Select,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Image as ChakraImage,
  List,
  ListItem,
  useToast,
  UnorderedList,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import LoanProgressTracker from "./LoanProgressTracker";
import FileUploadProgress from "./FileUploadProgress";
import { countries } from "@/utils/countries";

const LOAN_PURPOSE = {
  FLIGHT: "Flight Loan",
  ACCOMMODATION: "Accommodation Loan",
  SETTLEMENT: "Settlement Loan",
};

const REPAYMENT_PLANS = {
  SWIFT: "Swift Settlement Plan",
  BALANCED: "Balanced Two-Phase Plan",
  STRUCTURED: "Structured Three-Phase Plan",
  FLEX_TWO: "Flex Two-Phase Plan",
  FLEX_THREE: "Flex Three-Phase Plan",
};

const SECTION_HEADERS = {
  FIXED: "FIXED_HEADER",
  FLEXIBLE: "FLEXIBLE_HEADER",
};

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FileUpload = { url: string; name: string };

type FileUploads = {
  passportPhoto?: FileUpload;
  visaPage?: FileUpload;
  passportDataPage?: FileUpload;
  admissionLetter?: FileUpload;
  confirmationOfAward?: FileUpload;
  scholarshipContract?: FileUpload;
  guarantorId?: FileUpload;
  attestation?: FileUpload;
  policeReport?: FileUpload;
};

type UploadingFile = {
  file: File;
  progress: number;
  name: string;
  inputName: keyof FileUploads;
};

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formPage, setFormPage] = useState(0);
  const [fileUploads, setFileUploads] = useState<FileUploads>({});
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [iAgree, setIAgree] = useState(false);
  // State to track if current page is valid for mobile view
  const [isPageValid, setIsPageValid] = useState(false);
  const toast = useToast();
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [fileErrors, setFileErrors] = useState<
    Partial<Record<keyof FileUploads, string>>
  >({});
  const [availableRepaymentPlans, setAvailableRepaymentPlans] = useState<
    string[]
  >([]);
  const [repaymentMonths, setRepaymentMonths] = useState(0);
  const [interestBreakdown, setInterestBreakdown] = useState("");
  const [installmentPlaceholder, setInstallmentPlaceholder] = useState("");
  const [installmentError, setInstallmentError] = useState("");

  const [formData, setFormData] = useState({
    title: "Mr",
    firstName: "",
    email: "",
    lastName: "",
    middleName: "",
    pronouns: "Him/He",
    nationality: "",
    phoneNumber: "",
    passportNumber: "",
    currentAddress: "",
    destinationAddress: "",
    hostInstitution: "",
    programName: "",
    programCoordinatorName: "",
    programCoordinatorEmail: "",
    guarantorFullName: "",
    guarantorPhoneNumber: "",
    guarantorEmail: "",
    guarantorIdNumber: "",
    loanService: "",
    amountToBorrow: "",
    repaymentTerms: "",
    installmentStructure: "",
    isFirstTimer: "",
  });

  useEffect(() => {
    if (formData.loanService === "Flight Loan") {
      setAvailableRepaymentPlans([
        REPAYMENT_PLANS.SWIFT,
        REPAYMENT_PLANS.BALANCED,
        REPAYMENT_PLANS.STRUCTURED,
      ]);
    } else if (
      formData.loanService === "Accommodation Loan" ||
      formData.loanService === "Settlement Loan"
    ) {
      setAvailableRepaymentPlans([
        SECTION_HEADERS.FIXED,
        REPAYMENT_PLANS.SWIFT,
        REPAYMENT_PLANS.BALANCED,
        REPAYMENT_PLANS.STRUCTURED,
        SECTION_HEADERS.FLEXIBLE,
        REPAYMENT_PLANS.FLEX_TWO,
        REPAYMENT_PLANS.FLEX_THREE,
      ]);
    } else {
      setAvailableRepaymentPlans([]);
    }
  }, [formData.loanService]);

  useEffect(() => {
    switch (formData.repaymentTerms) {
      case REPAYMENT_PLANS.SWIFT:
        setRepaymentMonths(1);
        setInterestBreakdown("First month = 10%");
        setInstallmentPlaceholder("100");
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
  }, [formData.repaymentTerms]);

  useEffect(() => {
    const { repaymentTerms, installmentStructure } = formData;
    const installments = installmentStructure
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map(Number);

    let error = "";

    if (repaymentTerms === REPAYMENT_PLANS.FLEX_TWO) {
      if (installments.length !== 2) {
        error = "Please provide exactly two installment percentages.";
      } else if (installments.some(isNaN)) {
        error = "Please enter valid numbers.";
      } else if (installments.reduce((a, b) => a + b, 0) !== 100) {
        error = "The sum of the installments must be 100.";
      }
    } else if (repaymentTerms === REPAYMENT_PLANS.FLEX_THREE) {
      if (installments.length !== 3) {
        error = "Please provide exactly three installment percentages.";
      } else if (installments.some(isNaN)) {
        error = "Please enter valid numbers.";
      } else if (installments.reduce((a, b) => a + b, 0) !== 100) {
        error = "The sum of the installments must be 100.";
      }
    }

    setInstallmentError(error);
  }, [formData.repaymentTerms, formData.installmentStructure]);

  const fileInputRefs = {
    passportPhoto: useRef<HTMLInputElement>(null),
    visaPage: useRef<HTMLInputElement>(null),
    passportDataPage: useRef<HTMLInputElement>(null),
    admissionLetter: useRef<HTMLInputElement>(null),
    confirmationOfAward: useRef<HTMLInputElement>(null),
    scholarshipContract: useRef<HTMLInputElement>(null),
    guarantorId: useRef<HTMLInputElement>(null),
    attestation: useRef<HTMLInputElement>(null),
    policeReport: useRef<HTMLInputElement>(null),
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const inputName = name as keyof FileUploads;

    if (fileErrors[inputName]) {
      setFileErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[inputName];
        return newErrors;
      });
    }

    const maxSize =
      name === "passportPhoto" ||
      name === "attestation" ||
      name === "policeReport"
        ? 1 * 1024 * 1024
        : 10 * 1024 * 1024; // 1MB for passport, attestation, police report, 10MB for others
    if (file.size > maxSize) {
      toast({
        title: "File too large.",
        description: `The file for ${name} exceeds the size limit.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const newUploadingFile: UploadingFile = {
      file,
      progress: 0,
      name: file.name,
      inputName,
    };

    setUploadingFiles((prev) => [
      ...prev.filter((f) => f.inputName !== inputName),
      newUploadingFile,
    ]);

    try {
      // Simulate progress for UX while uploading
      const progressInterval = setInterval(() => {
        setUploadingFiles((prev) =>
          prev.map((f) => {
            if (f.inputName === inputName && f.progress < 90) {
              // Stop at 90% until upload is complete
              return { ...f, progress: f.progress + 10 };
            }
            return f;
          })
        );
      }, 200);

      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const newBlob = await response.json();

      setFileUploads((prev) => ({
        ...prev,
        [inputName]: { url: newBlob.url, name: file.name },
      }));

      // Set progress to 100%
      setUploadingFiles((prev) =>
        prev.map((f) =>
          f.inputName === inputName ? { ...f, progress: 100 } : f
        )
      );

      // Keep the progress bar at 100% for a moment for better UX
      setTimeout(() => {
        setUploadingFiles((prev) =>
          prev.filter((f) => f.inputName !== inputName)
        );
      }, 1000);
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed.",
        description: "An error occurred while uploading the file.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      // Remove the file from the uploading list on failure
      setUploadingFiles((prev) =>
        prev.filter((f) => f.inputName !== inputName)
      );
    }
  };

  const triggerFileInput = (name: keyof FileUploads) => {
    fileInputRefs[name]?.current?.click();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let processedValue = value;
    if (name === "amountToBorrow") {
      processedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "guarantorPhoneNumber") {
      processedValue = value.replace(/[^0-9+()-\s]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof formData];
        return newErrors;
      });
    }
  };

  const validatePage = (page: number) => {
    const newErrors: Partial<typeof formData> = {};
    const newFileErrors: Partial<Record<keyof FileUploads, string>> = {};
    let isValid = true;

    const requiredFields: { [key: number]: (keyof typeof formData)[] } = {
      1: [
        "firstName",
        "lastName",
        "email",
        "nationality",
        "phoneNumber",
        "passportNumber",
        "currentAddress",
      ],
      2: ["programName", "programCoordinatorName", "programCoordinatorEmail"],
      4: ["loanService", "amountToBorrow", "repaymentTerms", "isFirstTimer"],
    };

    const requiredFiles: { [key: number]: (keyof FileUploads)[] } = {
      1: ["passportPhoto", "visaPage", "passportDataPage"],
      2: ["confirmationOfAward", "scholarshipContract"],
      3: ["admissionLetter"],
    };

    if (requiredFields[page]) {
      requiredFields[page].forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "This field is required.";
          isValid = false;
        }
      });
    }

    if (page === 3) {
      const guarantorFields: (keyof typeof formData)[] = [
        "guarantorFullName",
        "guarantorPhoneNumber",
        "guarantorEmail",
        "guarantorIdNumber",
      ];
      const hasGuarantorInfo =
        guarantorFields.some((field) => !!formData[field]) ||
        !!fileUploads.guarantorId;

      if (hasGuarantorInfo) {
        guarantorFields.forEach((field) => {
          if (!formData[field]) {
            newErrors[field] = "This field is required.";
            isValid = false;
          }
        });
        if (!fileUploads.guarantorId) {
          newFileErrors.guarantorId = "This field is required.";
          isValid = false;
        }
      } else {
        if (!fileUploads.attestation) {
          newFileErrors.attestation = "This field is required.";
          isValid = false;
        }
        if (!fileUploads.policeReport) {
          newFileErrors.policeReport = "This field is required.";
          isValid = false;
        }
      }
    }

    if (requiredFiles[page]) {
      requiredFiles[page].forEach((fileField) => {
        if (!fileUploads[fileField]) {
          newFileErrors[fileField] = "This field is required.";
          isValid = false;
        }
      });
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (
      formData.programCoordinatorEmail &&
      !/\S+@\S+\.\S+/.test(formData.programCoordinatorEmail)
    ) {
      newErrors.programCoordinatorEmail = "Email is invalid.";
      isValid = false;
    }
    if (
      formData.guarantorEmail &&
      !/\S+@\S+\.\S+/.test(formData.guarantorEmail)
    ) {
      newErrors.guarantorEmail = "Email is invalid.";
      isValid = false;
    }

    setErrors(newErrors);
    setFileErrors(newFileErrors);
    return isValid;
  };

  const handleNextPage = (page: number) => {
    if (validatePage(page)) {
      setFormPage(page + 1);
    }
  };

  // New state to track mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Re-validate page when form data or files change
  useEffect(() => {
    if (formPage > 0 && formPage < 6) {
      validatePage(formPage);
    }
  }, [formData, fileUploads, formPage]);

  const handleAccept = () => {
    setFormPage(1);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleCancelUpload = (inputName: keyof FileUploads) => {
    setUploadingFiles((prev) => prev.filter((f) => f.inputName !== inputName));
    setFileUploads((prev) => {
      const newUploads = { ...prev };
      delete newUploads[inputName];
      return newUploads;
    });
  };

  const progress = useMemo(() => {
    const mandatoryFields: (keyof typeof formData)[] = [
      "firstName",
      "lastName",
      "email",
      "nationality",
      "phoneNumber",
      "passportNumber",
      "currentAddress",
      "hostInstitution",
      "programName",
      "programCoordinatorName",
      "programCoordinatorEmail",
      "loanService",
      "amountToBorrow",
      "repaymentTerms",
      "isFirstTimer",
    ];

    const mandatoryFiles: (keyof FileUploads)[] = [
      "passportPhoto",
      "visaPage",
      "passportDataPage",
      "admissionLetter",
      "confirmationOfAward",
      "scholarshipContract",
    ];

    const guarantorFields: (keyof typeof formData)[] = [
      "guarantorFullName",
      "guarantorPhoneNumber",
      "guarantorEmail",
      "guarantorIdNumber",
    ];
    const guarantorFile: (keyof FileUploads)[] = ["guarantorId"];

    let filledCount = 0;
    let totalMandatory = mandatoryFields.length + mandatoryFiles.length;

    mandatoryFields.forEach((f) => {
      if (formData[f]) filledCount++;
    });

    mandatoryFiles.forEach((f) => {
      if (fileUploads[f]) filledCount++;
    });

    const guarantorInfoProvided =
      guarantorFields.every((f) => !!formData[f]) &&
      guarantorFile.every((f) => !!fileUploads[f]);

    const alternativeInfoProvided =
      !!fileUploads.attestation && !!fileUploads.policeReport;

    if (guarantorInfoProvided) {
      totalMandatory += guarantorFields.length + guarantorFile.length;
      guarantorFields.forEach((f) => {
        if (formData[f]) filledCount++;
      });
      guarantorFile.forEach((f) => {
        if (fileUploads[f]) filledCount++;
      });
    } else if (alternativeInfoProvided) {
      totalMandatory += 2; // For attestation and policeReport
      if (fileUploads.attestation) filledCount++;
      if (fileUploads.policeReport) filledCount++;
    } else {
      // If neither is fully provided, still count partial progress
      totalMandatory += guarantorFields.length + guarantorFile.length;
      guarantorFields.forEach((f) => {
        if (formData[f]) filledCount++;
      });
      guarantorFile.forEach((f) => {
        if (fileUploads[f]) filledCount++;
      });
    }

    return (filledCount / totalMandatory) * 100;
  }, [formData, fileUploads]);

  const handleFinalSubmit = async () => {
    try {
      const submissionData = {
        ...formData,
        amountToBorrow:
          parseFloat(formData.amountToBorrow.replace(/,/g, "")) || 0,
        fileUploads,
      };

      console.log("Submitting data:", JSON.stringify(submissionData, null, 2));

      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        // Attempt to parse error response
        const errorResult = await response.json().catch(() => ({
          error: "An unexpected error occurred.",
          details: "Could not parse error response.",
        }));
        throw new Error(errorResult.error || "An unexpected error occurred.");
      }

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted.",
          description:
            "We've received your application and will review it shortly.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose(); // Close the modal on success
      } else {
        // Handle cases where the API returns a success status but indicates failure in the body
        throw new Error(result.error || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed.",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while submitting the application.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      isCentered
      size="full"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent
        display="flex"
        flexDirection="column"
        height="100vh"
        position="relative"
        bgColor="gray.50"
      >
        <Box position="fixed" top="0" left="0" right="0" zIndex={1000}>
          <Navbar setPageMode={() => {}} />
        </Box>

        <Flex as="main" flex="1" pt="5rem" overflow="hidden">
          {formPage === 0 && (
            <Flex
              justifyContent="center"
              alignItems="center"
              flex="1"
              flexDirection="column"
              pt="2rem"
              pb={8}
              px={{ base: 4, md: 0 }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                width="100%"
                height="100%"
              >
                <HStack
                  spacing={0}
                  width={{ base: "100%", md: "80%", lg: "66%" }}
                  alignSelf="center"
                  mb={4}
                >
                  <Text color="#2b51d5" fontWeight="semibold">
                    Home
                  </Text>
                  <Text color="gray.500">/</Text>
                  <Text color="gray.500">Loan Application</Text>
                </HStack>
                <Flex
                  width={{ base: "100%", md: "80%", lg: "66%" }}
                  flexDirection="column"
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  height="100%"
                  overflow="hidden"
                >
                  <VStack
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    spacing={2}
                    align="stretch"
                    p={6}
                    color="gray.500"
                    pr={4}
                    rounded="xl"
                    border="1px solid"
                    borderBottom="0px"
                    borderColor="gray.100"
                  >
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                      color="gray.900"
                      pb={4}
                      fontFamily="heading"
                    >
                      Terms and Conditions
                    </Text>
                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        Data Privacy Statement
                      </Text>
                      <Text fontFamily="body">
                        We prioritize the security and confidentiality of your
                        personal information. By completing this form, you agree
                        to the following terms regarding the collection, use,
                        and protection of your data:
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        1. We collect only the information necessary to provide
                        our services effectively. This may include, but is not
                        limited to:
                      </Text>
                      <VStack spacing={0} pl={4} align="stretch">
                        <Text fontFamily="body">• Full name</Text>
                        <Text fontFamily="body">
                          • Contact details (phone number, email address, etc.)
                        </Text>
                        <Text fontFamily="body">• Guarantor information</Text>
                        <Text fontFamily="body">
                          • Any other information relevant to the service being
                          provided
                        </Text>
                      </VStack>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        2. Use of Information
                      </Text>
                      <VStack spacing={0} pl={4} align="stretch">
                        <Text fontFamily="body">
                          • Delivering and managing the service(s) for which the
                          form was completed
                        </Text>
                        <Text fontFamily="body">
                          • Internal record-keeping and compliance with
                          regulatory obligations
                        </Text>
                        <Text fontFamily="body">
                          • Communication regarding your transactions or
                          inquiries
                        </Text>
                        <Text fontFamily="body">
                          • Promotional and testimonial purposes, such as social
                          media content or marketing materials, using your name
                          or written feedback
                        </Text>
                      </VStack>
                      <Box pl={8}>
                        <Text fontFamily="body">
                          • We will never use your photo or video content unless
                          you give explicit consent.
                        </Text>
                        <Text fontFamily="body">
                          • Sensitive information—such as your identity card,
                          international passport, or similar documents—will
                          never be published, shared, or disclosed under any
                          circumstances.
                        </Text>
                      </Box>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        3. Data Sharing
                      </Text>
                      <Text fontFamily="body">
                        We do not sell, rent, or share your personal information
                        with third parties without your explicit consent, except
                        where required by law or regulatory authorities.
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        4. Data Security
                      </Text>
                      <Text fontFamily="body">
                        We take the security of your data seriously and
                        implement appropriate technical and organizational
                        measures to protect it against unauthorized access,
                        loss, or misuse.
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        5. Data Retention
                      </Text>
                      <Text fontFamily="body">
                        Your personal data will be retained only as long as
                        necessary to fulfill the purpose for which it was
                        collected, and no longer than six (6) months after that
                        purpose is completed—unless retention is required by
                        law. You may also request deletion of your information
                        at any time after the purpose is fulfilled.
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        6. Your Rights
                      </Text>
                      <VStack spacing={0} pl={4} align="stretch">
                        <Text fontFamily="body">
                          • Access the personal data we hold about you
                        </Text>
                        <Text fontFamily="body">
                          • Request correction or updates to your information
                        </Text>
                        <Text fontFamily="body">
                          • Request deletion of your data (subject to legal or
                          contractual limitations)
                        </Text>
                      </VStack>
                      <Text fontFamily="body">
                        For any such request, please contact us using the
                        information provided on this form or through our
                        official channels.
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        7. Policy Updates
                      </Text>
                      <Text fontFamily="body">
                        This privacy agreement may be updated periodically to
                        reflect changes in our practices, policies, or legal
                        requirements. Significant updates will be communicated
                        through the contact details you provided or via our
                        official website.
                      </Text>
                    </VStack>

                    <VStack spacing={0} align="stretch">
                      <Text fontWeight="bold" fontFamily="heading">
                        8. Questions or Concerns?
                      </Text>
                      <Text fontFamily="body">
                        If you have any questions about this policy or how your
                        information is handled, feel free to reach out
                      </Text>
                    </VStack>
                  </VStack>
                  <Flex
                    justifyContent="center"
                    p={4}
                    borderTop="0px"
                    borderColor="gray.200"
                  >
                    <Button
                      variant="outline"
                      mr={{ base: 0, md: 6 }}
                      mb={{ base: 4, md: 0 }}
                      px={8}
                      height="3.5rem"
                      width={{ base: "100%", md: "50%" }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={8}
                      height="3.5rem"
                      width={{ base: "100%", md: "50%" }}
                      onClick={handleAccept}
                    >
                      I Accept
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}

          {formPage > 0 && (
            <Flex
              width="100%"
              px={{ base: 2, md: 8 }}
              justifyContent="center"
              height="100%"
            >
              {formPage === 1 && (
                <VStack
                  as="form"
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="flex-start"
                  spacing={0}
                  height="100%"
                >
                  <Box
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    pr={{ base: 2, md: 4 }}
                  >
                    <HStack spacing={0} alignSelf="start" mb={4}>
                      <Text color="#2b51d5" fontWeight="semibold">
                        Home
                      </Text>
                      <Text color="gray.500">/</Text>
                      <Text color="gray.500">Loan Application</Text>
                    </HStack>
                    <Flex
                      flexDirection="column"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={6}
                      width="100%"
                      // mt={8}
                      rounded="xl"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="gray.900"
                        mb={4}
                        fontFamily="heading"
                      >
                        Personal Information
                      </Text>
                      <Text color="gray.500" mb={6} fontFamily="body">
                        Fill out these details to build your broadcast
                      </Text>

                      <VStack spacing={4} align="stretch">
                        <Flex direction={{ base: "column", md: "row" }} gap={4}>
                          <FormControl
                            width={{ base: "100%", md: "30%" }}
                            mb={{ base: 4, md: 0 }}
                          >
                            <FormLabel fontFamily="body">Title</FormLabel>
                            <Select
                              name="title"
                              value={formData.title}
                              onChange={handleInputChange}
                              height="3.5rem"
                            >
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Miss">Miss</option>
                              <option value="Dr">Dr</option>
                            </Select>
                          </FormControl>
                          <FormControl
                            width={{ base: "100%", md: "70%" }}
                            isInvalid={!!errors.firstName}
                          >
                            <FormLabel fontFamily="body">First Name</FormLabel>
                            <Input
                              name="firstName"
                              placeholder="Enter First Name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              height="3.5rem"
                            />
                            {errors.firstName && (
                              <FormErrorMessage>
                                {errors.firstName}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </Flex>

                        <Flex direction={{ base: "column", md: "row" }} gap={4}>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            mb={{ base: 4, md: 0 }}
                          >
                            <FormLabel fontFamily="body">Middle Name</FormLabel>
                            <Input
                              name="middleName"
                              placeholder="Enter Middle Name"
                              value={formData.middleName}
                              onChange={handleInputChange}
                              height="3.5rem"
                            />
                          </FormControl>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            isInvalid={!!errors.lastName}
                          >
                            <FormLabel fontFamily="body">Last Name</FormLabel>
                            <Input
                              name="lastName"
                              placeholder="Enter Last Name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              height="3.5rem"
                            />
                            {errors.lastName && (
                              <FormErrorMessage>
                                {errors.lastName}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </Flex>
                        <HStack>
                          <FormControl isInvalid={!!errors.email} width="100%">
                            <FormLabel fontFamily="body">Email</FormLabel>
                            <Input
                              name="email"
                              type="email"
                              placeholder="Enter Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              height="3.5rem"
                            />
                            {errors.email && (
                              <FormErrorMessage>
                                {errors.email}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </HStack>

                        <Flex direction={{ base: "column", md: "row" }} gap={4}>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            mb={{ base: 4, md: 0 }}
                          >
                            <FormLabel fontFamily="body">Pronouns</FormLabel>
                            <Select
                              name="pronouns"
                              value={formData.pronouns}
                              onChange={handleInputChange}
                              height="3.5rem"
                            >
                              <option value="Him/He">Him / He</option>
                              <option value="Her/She">Her / She</option>
                              <option value="They/Them">They / Them</option>
                            </Select>
                          </FormControl>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            isInvalid={!!errors.nationality}
                          >
                            <FormLabel fontFamily="body">Nationality</FormLabel>
                            <Select
                              name="nationality"
                              value={formData.nationality}
                              onChange={handleInputChange}
                              placeholder="Select Country"
                              height="3.5rem"
                            >
                              {countries.map((country) => (
                                <option key={country.code} value={country.name}>
                                  {country.name}
                                </option>
                              ))}
                            </Select>
                            {errors.nationality && (
                              <FormErrorMessage>
                                {errors.nationality}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </Flex>

                        <Flex direction={{ base: "column", md: "row" }}>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            isInvalid={!!errors.phoneNumber}
                            mb={{ base: 4, md: 0 }}
                            mr={{ base: 0, md: 2 }}
                          >
                            <FormLabel fontFamily="body">
                              Phone Number
                            </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                                height="3.5rem"
                              >
                                +
                              </InputLeftElement>
                              <Input
                                name="phoneNumber"
                                placeholder="234849489"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                pl="2.5rem"
                                height="3.5rem"
                              />
                            </InputGroup>
                            {errors.phoneNumber && (
                              <FormErrorMessage>
                                {errors.phoneNumber}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                          <FormControl
                            width={{ base: "100%", md: "50%" }}
                            isInvalid={!!errors.passportNumber}
                          >
                            <FormLabel fontFamily="body">
                              Passport Number
                            </FormLabel>
                            <Input
                              name="passportNumber"
                              placeholder="4567890-3u4746"
                              value={formData.passportNumber}
                              onChange={handleInputChange}
                              height="3.5rem"
                            />
                            {errors.passportNumber && (
                              <FormErrorMessage>
                                {errors.passportNumber}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </Flex>

                        <VStack align="stretch" mt={4}>
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Upload your Passport Photograph (1mb Maximum)*
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "passportPhoto"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "passportPhoto"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "passportPhoto"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("passportPhoto")
                              }
                              inputName="passportPhoto"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.passportPhoto
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() =>
                                  triggerFileInput("passportPhoto")
                                }
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.passportPhoto
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.passportPhoto
                                        ? fileUploads.passportPhoto.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      SVG, PNG, JPG, GIF | 1MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="passportPhoto"
                                  ref={fileInputRefs.passportPhoto}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="image/svg+xml, image/png, image/jpeg, image/gif"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.passportPhoto
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.passportPhoto && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.passportPhoto}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>

                        <VStack align="stretch" mt={4}>
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Upload the Visa Page of Your Passport, if you stay
                            abroad already, submit your residence permit card.
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "visaPage"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "visaPage"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "visaPage"
                                )!.progress
                              }
                              onCancel={() => handleCancelUpload("visaPage")}
                              inputName="visaPage"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.visaPage ? "red.500" : "gray.300"
                                }
                                p={4}
                                onClick={() => triggerFileInput("visaPage")}
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.visaPage
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.visaPage
                                        ? fileUploads.visaPage.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      SVG, PNG, JPG, GIF | 10MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="visaPage"
                                  ref={fileInputRefs.visaPage}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="image/svg+xml, image/png, image/jpeg, image/gif"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.visaPage ? "Change" : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.visaPage && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.visaPage}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                        {/* Upload your Passport data page */}
                        <VStack
                          align="stretch"
                          border="1px solid"
                          borderColor="gray.200"
                          rounded="xl"
                          p={4}
                          mt={4}
                        >
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            p={2}
                            pb={0}
                            fontFamily="heading"
                          >
                            Upload your Passport Data Page
                          </Text>
                          <List
                            spacing={1}
                            pl={5}
                            color="gray.500"
                            mt={0}
                            as="ul"
                            fontSize="md"
                          >
                            <ListItem>
                              • Please upload an image of the data page of your
                              passport.
                            </ListItem>
                            <ListItem>
                              • Accepted Formats: PDF, JPEG, JPG, or PNG.
                            </ListItem>
                            <ListItem>
                              • File Size Limit: The file must not exceed 1 MB.
                            </ListItem>
                            <ListItem>
                              • Ensure the image is clear and legible.
                            </ListItem>
                            <ListItem>
                              • Refer to the sample below for guidance on the
                              expected format and quality.
                            </ListItem>
                          </List>
                          <Text color="gray.500" mt={0} pl={2} fontSize="md">
                            Note: Files in other formats or exceeding the size
                            limit will not be accepted.
                          </Text>
                          <ChakraImage
                            src="/passport.png"
                            alt="Passport sample"
                            mt={4}
                            borderRadius="md"
                          />
                          {uploadingFiles.find(
                            (f) => f.inputName === "passportDataPage"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "passportDataPage"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "passportDataPage"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("passportDataPage")
                              }
                              inputName="passportDataPage"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.passportDataPage
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                mt={4}
                                onClick={() =>
                                  triggerFileInput("passportDataPage")
                                }
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.passportDataPage
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.passportDataPage
                                        ? fileUploads.passportDataPage.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      PDF, PNG, JPG | 1MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="passportDataPage"
                                  ref={fileInputRefs.passportDataPage}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="application/pdf, image/png, image/jpeg"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.passportDataPage
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.passportDataPage && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.passportDataPage}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                        <VStack>
                          <FormControl
                            width="100%"
                            isInvalid={!!errors.currentAddress}
                          >
                            <FormLabel color="gray.900" fontFamily="body">
                              Current Address
                            </FormLabel>
                            <Input
                              name="currentAddress"
                              placeholder="Enter text here... "
                              value={formData.currentAddress}
                              onChange={handleInputChange}
                              height="5rem"
                            />
                            {errors.currentAddress && (
                              <FormErrorMessage>
                                {errors.currentAddress}
                              </FormErrorMessage>
                            )}
                          </FormControl>
                        </VStack>
                        <VStack>
                          <FormControl width="100%">
                            <FormLabel color="gray.900" fontFamily="body">
                              Destination Address
                            </FormLabel>
                            <Input
                              name="destinationAddress"
                              placeholder="Enter text here... "
                              value={formData.destinationAddress}
                              onChange={handleInputChange}
                              height="5rem"
                            />
                          </FormControl>
                          <Text color="gray.600" fontFamily="body">
                            If you are not going to relocate from your first
                            Country of study within the next 4 months of the
                            start of your studies, ignore this.
                          </Text>
                        </VStack>
                      </VStack>
                    </Flex>
                  </Box>
                  <Flex
                    width={{ base: "100%", lg: "98%" }}
                    p={4}
                    bg="white"
                    roundedBottom="xl"
                    justifyContent="center"
                    py={4}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Button
                      variant="outline"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => setFormPage(0)}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => handleNextPage(1)}
                    >
                      Continue
                    </Button>
                  </Flex>
                </VStack>
              )}
              {formPage === 2 && (
                <VStack
                  as="form"
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="flex-start"
                  spacing={0}
                  height="100%"
                >
                  <Box
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    pr={{ base: 2, md: 4 }}
                  >
                    <HStack spacing={0} alignSelf="start" mb={4}>
                      <Text color="#2b51d5" fontWeight="semibold">
                        Home
                      </Text>
                      <Text color="gray.500">/</Text>
                      <Text color="gray.500">Loan Application</Text>
                    </HStack>
                    <Flex
                      flexDirection="column"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={6}
                      width="100%"
                      rounded="xl"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="gray.900"
                        mb={4}
                        fontFamily="heading"
                      >
                        Program Information
                      </Text>
                      <Text color="gray.500" mb={6} fontFamily="body">
                        Fill out these details to build your broadcast
                      </Text>

                      <VStack spacing={4} align="stretch">
                        <FormControl isInvalid={!!errors.hostInstitution}>
                          <FormLabel fontFamily="body">
                            Name of Host Institution(s)
                          </FormLabel>
                          <Input
                            name="hostInstitution"
                            placeholder="Enter text here..."
                            value={formData.hostInstitution}
                            onChange={handleInputChange}
                            height="4.5rem"
                          />
                          {errors.hostInstitution && (
                            <FormErrorMessage>
                              {errors.hostInstitution}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                        <Text fontSize="sm" color="gray.500" fontFamily="body">
                          If you are not going to relocate from your first
                          Country of study within the next 4 months of the start
                          of your studies, ignore this.
                        </Text>

                        <FormControl isInvalid={!!errors.programName}>
                          <FormLabel fontFamily="body">
                            Name of Program (Course)*
                          </FormLabel>
                          <Input
                            name="programName"
                            placeholder="Enter First Name"
                            value={formData.programName}
                            onChange={handleInputChange}
                            height="4.5rem"
                          />
                          {errors.programName && (
                            <FormErrorMessage>
                              {errors.programName}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <VStack
                          align="stretch"
                          p={4}
                          mt={4}
                          border="1px solid"
                          rounded="xl"
                          borderColor="gray.200"
                        >
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            p={4}
                            pb={0}
                            fontFamily="heading"
                          >
                            Confirmation of Award
                          </Text>
                          <List
                            spacing={2}
                            pl={5}
                            color="gray.500"
                            as="ul"
                            fontFamily="body"
                          >
                            <ListItem>
                              • If your institution or scholarship program does
                              not issue a formal Confirmation of Award document,
                              please upload an email that clearly indicates you
                              have been awarded any of the following:
                              <List spacing={1} pl={5} pt={1} as="ul">
                                <ListItem>
                                  • A graduate assistantship role
                                </ListItem>
                                <ListItem>
                                  • A fully funded scholarship
                                </ListItem>
                                <ListItem>
                                  • A teaching assistantship role
                                </ListItem>
                                <ListItem>• A paid PhD offer</ListItem>
                              </List>
                            </ListItem>
                            <ListItem>
                              Ensure the email contains relevant details such as
                              your name, the role or scholarship awarded, and
                              the awarding institution or program.
                            </ListItem>
                          </List>
                          {uploadingFiles.find(
                            (f) => f.inputName === "confirmationOfAward"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "confirmationOfAward"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "confirmationOfAward"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("confirmationOfAward")
                              }
                              inputName="confirmationOfAward"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.confirmationOfAward
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() =>
                                  triggerFileInput("confirmationOfAward")
                                }
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.confirmationOfAward
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.confirmationOfAward
                                        ? fileUploads.confirmationOfAward.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      PDF, PNG, JPG | 10MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="confirmationOfAward"
                                  ref={fileInputRefs.confirmationOfAward}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="application/pdf, image/png, image/jpeg"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.confirmationOfAward
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.confirmationOfAward && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.confirmationOfAward}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                        <VStack
                          align="stretch"
                          p={4}
                          mt={4}
                          border="1px solid"
                          rounded="xl"
                          borderColor="gray.200"
                        >
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            p={4}
                            pb={0}
                            fontFamily="heading"
                          >
                            Scholarship Contract*
                          </Text>
                          <List
                            spacing={2}
                            pl={5}
                            color="gray.500"
                            as="ul"
                            fontFamily="body"
                          >
                            <ListItem>
                              • The contract document showing funding you will
                              be provided with.
                            </ListItem>
                          </List>
                          {uploadingFiles.find(
                            (f) => f.inputName === "scholarshipContract"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "scholarshipContract"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "scholarshipContract"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("scholarshipContract")
                              }
                              inputName="scholarshipContract"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.scholarshipContract
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() =>
                                  triggerFileInput("scholarshipContract")
                                }
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.scholarshipContract
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.scholarshipContract
                                        ? fileUploads.scholarshipContract.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      PDF, PNG, JPG | 10MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="scholarshipContract"
                                  ref={fileInputRefs.scholarshipContract}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="application/pdf, image/png, image/jpeg"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.scholarshipContract
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.scholarshipContract && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.scholarshipContract}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                        <FormControl
                          isInvalid={!!errors.programCoordinatorName}
                        >
                          <FormLabel color="gray.900" fontFamily="body">
                            Program Coordinator or Supervisor&#39;s Name*
                          </FormLabel>
                          <Input
                            name="programCoordinatorName"
                            placeholder="Enter full name"
                            value={formData.programCoordinatorName}
                            onChange={handleInputChange}
                            height="4.5rem"
                            color="gray.600"
                          />
                          {errors.programCoordinatorName && (
                            <FormErrorMessage>
                              {errors.programCoordinatorName}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <Text color="gray.500" fontFamily="body">
                          You can also provide the name of the Head of
                          department&#39;s contact
                        </Text>

                        <FormControl
                          isInvalid={!!errors.programCoordinatorEmail}
                        >
                          <FormLabel color="gray.900" fontFamily="body">
                            Program Coordinator or Supervisor&#39;s Email*
                          </FormLabel>
                          <Input
                            name="programCoordinatorEmail"
                            placeholder="Enter email"
                            value={formData.programCoordinatorEmail}
                            onChange={handleInputChange}
                            height="4.5rem"
                            color="gray.600"
                          />
                          {errors.programCoordinatorEmail && (
                            <FormErrorMessage>
                              {errors.programCoordinatorEmail}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <Text color="gray.500" fontFamily="body">
                          If you do not have the name of your Program
                          coordinator for non-Erasmus applications provide the
                          email of the head or director of your host department
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                  <Flex
                    width={{ base: "100%", lg: "98%" }}
                    bg="white"
                    roundedBottom="xl"
                    justifyContent="center"
                    p={4}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Button
                      variant="outline"
                      px={2}
                      height="3.5rem"
                      width={{ base: "100%", md: "50%" }}
                      onClick={() => setFormPage(1)}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={2}
                      height="3.5rem"
                      width={{ base: "100%", md: "50%" }}
                      onClick={() => handleNextPage(2)}
                    >
                      Continue
                    </Button>
                  </Flex>
                </VStack>
              )}
              {formPage === 3 && (
                <VStack
                  as="form"
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="flex-start"
                  spacing={0}
                  height="100%"
                >
                  <Box
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    pr={{ base: 2, md: 4 }}
                  >
                    <HStack spacing={0} alignSelf="start" mb={4}>
                      <Text color="#2b51d5" fontWeight="semibold">
                        Home
                      </Text>
                      <Text color="gray.500">/</Text>
                      <Text color="gray.500">Loan Application</Text>
                    </HStack>
                    <Flex
                      flexDirection="column"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={6}
                      width="100%"
                      rounded="xl"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="gray.900"
                        mb={4}
                        fontFamily="heading"
                      >
                        Guarantor Information
                      </Text>
                      <Text color="gray.500" mb={2}>
                        Your guarantor must:
                      </Text>
                      <List spacing={1} pl={5} color="gray.500" mb={4} as="ul">
                        <ListItem>
                          • Be able to attest to your credibility.
                        </ListItem>
                        <ListItem>
                          • Be a scholarship recipient (not necessarily from the
                          same program as the applicant).
                        </ListItem>
                        <ListItem>
                          • Agree to repay your loan in case of default.
                        </ListItem>
                      </List>
                      <Text color="gray.500" mb={2}>
                        If you do not have a guarantor:
                      </Text>
                      <List spacing={1} pl={5} color="gray.500" mb={4} as="ul">
                        <ListItem>
                          • You must provide an attestation of good behavior
                          from your religious leader.
                        </ListItem>
                        <ListItem>
                          • You must also submit a police character certificate.
                        </ListItem>
                      </List>
                      <Text color="gray.500" mb={6}>
                        Ensure all documents are clear, accurate, and
                        verifiable.
                      </Text>

                      <VStack spacing={4} align="stretch">
                        <FormControl isInvalid={!!errors.guarantorFullName}>
                          <FormLabel color="gray.900">
                            Full Name of Guarantor*
                          </FormLabel>
                          <Input
                            name="guarantorFullName"
                            placeholder="Enter First Name"
                            value={formData.guarantorFullName}
                            onChange={handleInputChange}
                            height="3.5rem"
                          />
                          {errors.guarantorFullName && (
                            <FormErrorMessage>
                              {errors.guarantorFullName}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl isInvalid={!!errors.guarantorPhoneNumber}>
                          <FormLabel color="gray.900">
                            Guarantor&#39;s Number*
                          </FormLabel>
                          <Input
                            name="guarantorPhoneNumber"
                            placeholder="Enter text here..."
                            value={formData.guarantorPhoneNumber}
                            onChange={handleInputChange}
                            height="3.5rem"
                          />
                          {errors.guarantorPhoneNumber && (
                            <FormErrorMessage>
                              {errors.guarantorPhoneNumber}
                            </FormErrorMessage>
                          )}
                          <Text fontSize="sm" color="gray.600" mt={1}>
                            Include the country code. For example +46730000000
                          </Text>
                        </FormControl>

                        <FormControl isInvalid={!!errors.guarantorIdNumber}>
                          <FormLabel color="gray.900">
                            Guarantor ID Num*
                          </FormLabel>
                          <Input
                            name="guarantorIdNumber"
                            placeholder="Enter text here..."
                            value={formData.guarantorIdNumber}
                            onChange={handleInputChange}
                            height="3.5rem"
                          />
                          {errors.guarantorIdNumber && (
                            <FormErrorMessage>
                              {errors.guarantorIdNumber}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl isInvalid={!!errors.guarantorEmail}>
                          <FormLabel color="gray.900">
                            Guarantor&#39;s Email*
                          </FormLabel>
                          <Input
                            name="guarantorEmail"
                            placeholder="Enter text here..."
                            value={formData.guarantorEmail}
                            onChange={handleInputChange}
                            height="3.5rem"
                          />
                          {errors.guarantorEmail && (
                            <FormErrorMessage>
                              {errors.guarantorEmail}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                        <VStack align="stretch" mt={4}>
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Admission Letter*
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "admissionLetter"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "admissionLetter"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "admissionLetter"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("admissionLetter")
                              }
                              inputName="admissionLetter"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.admissionLetter
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() =>
                                  triggerFileInput("admissionLetter")
                                }
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.admissionLetter
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.admissionLetter
                                        ? fileUploads.admissionLetter.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      SVG, PNG, JPG, GIF | 10MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="admissionLetter"
                                  ref={fileInputRefs.admissionLetter}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="image/svg+xml, image/png, image/jpeg, image/gif, application/pdf"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.admissionLetter
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.admissionLetter && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.admissionLetter}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                        <VStack align="stretch" mt={4}>
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Guarantor ID*
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "guarantorId"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "guarantorId"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "guarantorId"
                                )!.progress
                              }
                              onCancel={() => handleCancelUpload("guarantorId")}
                              inputName="guarantorId"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.guarantorId
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() => triggerFileInput("guarantorId")}
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.guarantorId
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.guarantorId
                                        ? fileUploads.guarantorId.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      SVG, PNG, JPG, GIF | 10MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="guarantorId"
                                  ref={fileInputRefs.guarantorId}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="image/svg+xml, image/png, image/jpeg, image/gif"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.guarantorId
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.guarantorId && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.guarantorId}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>

                        <VStack
                          align="stretch"
                          p={6}
                          border="1px solid"
                          borderColor="gray.200"
                          rounded="xl"
                          mt={4}
                        >
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Attestation of Good Behavior
                          </Text>
                          <Text fontSize="sm" color="gray.400">
                            • This should be submitted in PDF format with
                            maximum size of 1 MB
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "attestation"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "attestation"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "attestation"
                                )!.progress
                              }
                              onCancel={() => handleCancelUpload("attestation")}
                              inputName="attestation"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.attestation
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() => triggerFileInput("attestation")}
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.attestation
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.attestation
                                        ? fileUploads.attestation.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      PDF | 1MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="attestation"
                                  ref={fileInputRefs.attestation}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="application/pdf"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.attestation
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.attestation && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.attestation}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>

                        <VStack
                          align="stretch"
                          p={6}
                          border="1px solid"
                          borderColor="gray.200"
                          rounded="xl"
                          mt={4}
                        >
                          <Text
                            fontSize="md"
                            fontWeight="500"
                            color="gray.900"
                            fontFamily="heading"
                          >
                            Police Report
                          </Text>
                          <Text fontSize="sm" color="gray.400">
                            • This should be submitted in PDF format with
                            maximum size of 1 MB
                          </Text>
                          {uploadingFiles.find(
                            (f) => f.inputName === "policeReport"
                          ) ? (
                            <FileUploadProgress
                              file={
                                uploadingFiles.find(
                                  (f) => f.inputName === "policeReport"
                                )!.file
                              }
                              progress={
                                uploadingFiles.find(
                                  (f) => f.inputName === "policeReport"
                                )!.progress
                              }
                              onCancel={() =>
                                handleCancelUpload("policeReport")
                              }
                              inputName="policeReport"
                            />
                          ) : (
                            <VStack align="stretch" spacing={1}>
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                justifyContent="space-between"
                                alignItems="center"
                                rounded="lg"
                                border="1px dashed"
                                borderColor={
                                  fileErrors.policeReport
                                    ? "red.500"
                                    : "gray.300"
                                }
                                p={4}
                                onClick={() => triggerFileInput("policeReport")}
                                cursor="pointer"
                              >
                                <HStack>
                                  <ChakraImage
                                    src={
                                      fileUploads.policeReport
                                        ? `/file-type.png`
                                        : "/upload-cloud-02.png"
                                    }
                                    alt="Upload Icon"
                                    width="24px"
                                    height="24px"
                                    mr={2}
                                  />
                                  <VStack alignItems="start" spacing={0}>
                                    <Text fontWeight="semibold">
                                      {fileUploads.policeReport
                                        ? fileUploads.policeReport.name
                                        : "Tap to Upload"}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                      PDF | 1MB max.
                                    </Text>
                                  </VStack>
                                </HStack>
                                <Input
                                  type="file"
                                  name="policeReport"
                                  ref={fileInputRefs.policeReport}
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                  accept="application/pdf"
                                />
                                <Button
                                  bg="#2b51d5"
                                  color="white"
                                  variant="outline"
                                >
                                  {fileUploads.policeReport
                                    ? "Change"
                                    : "Upload"}
                                </Button>
                              </Flex>
                              {fileErrors.policeReport && (
                                <Text fontSize="sm" color="red.500">
                                  {fileErrors.policeReport}
                                </Text>
                              )}
                            </VStack>
                          )}
                        </VStack>
                      </VStack>
                    </Flex>
                  </Box>
                  <Flex
                    width={{ base: "100%", lg: "98%" }}
                    justifyContent="center"
                    roundedBottom="xl"
                    p={4}
                    bg="white"
                    py={4}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Button
                      variant="outline"
                      mr={{ base: 0, md: 6 }}
                      mb={{ base: 4, md: 0 }}
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => setFormPage(2)}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => handleNextPage(3)}
                    >
                      Continue
                    </Button>
                  </Flex>
                </VStack>
              )}
              {formPage === 4 && (
                <VStack
                  as="form"
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="flex-start"
                  spacing={0}
                  height="100%"
                >
                  <Box
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    pr={{ base: 2, md: 4 }}
                  >
                    <HStack spacing={0} alignSelf="start" mb={4}>
                      <Text color="#2b51d5" fontWeight="semibold">
                        Home
                      </Text>
                      <Text color="gray.500">/</Text>
                      <Text color="gray.500">Loan Application</Text>
                    </HStack>
                    <Flex
                      flexDirection="column"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={6}
                      width="100%"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="gray.900"
                        mb={4}
                        fontFamily="heading"
                      >
                        Loan Application
                      </Text>

                      <VStack
                        spacing={4}
                        align="stretch"
                        p={4}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                      >
                        <Text
                          fontWeight="bold"
                          p={4}
                          pb={0}
                          fontFamily="heading"
                        >
                          Loan Guidlines
                        </Text>
                        <UnorderedList color="gray.400" spacing={2} pl={5}>
                          <ListItem>
                            To ensure transparency, here is a detailed
                            explanation of our loan services and how they work:
                          </ListItem>
                          <ListItem>
                            Loan Application Guidelines
                            <UnorderedList pl={5} mt={1}>
                              <ListItem>
                                We offer three types of loans: Flight,
                                Accommodation, and Settlement.
                              </ListItem>
                              <ListItem>
                                You can only apply for one loan at a time.
                              </ListItem>
                              <ListItem>
                                To access another loan, you must fully repay
                                your current loan and submit a new application.
                              </ListItem>
                            </UnorderedList>
                          </ListItem>
                          <ListItem>
                            Loan Services
                            <UnorderedList pl={5} mt={1}>
                              <ListItem>
                                Flight Loan
                                <UnorderedList pl={5} mt={1}>
                                  <ListItem>
                                    Interest Rates: 15% for the first month,
                                    7.5% for each subsequent month.
                                  </ListItem>
                                  <ListItem>
                                    Maximum Amount Borrowable: €2,000.
                                  </ListItem>
                                  <ListItem>
                                    Repayment Duration: Up to 3 months.
                                  </ListItem>
                                </UnorderedList>
                              </ListItem>
                              <ListItem>
                                Accommodation Loan
                                <UnorderedList pl={5} mt={1}>
                                  <ListItem>
                                    Interest Rates: 10% for the first month, 5%
                                    for each subsequent month.
                                  </ListItem>
                                  <ListItem>
                                    Maximum Amount Borrowable: €2,000.
                                  </ListItem>
                                  <ListItem>
                                    Repayment Duration: Up to 3 months.
                                  </ListItem>
                                </UnorderedList>
                              </ListItem>
                              <ListItem>
                                Settlement Loan
                                <UnorderedList pl={5} mt={1}>
                                  <ListItem>
                                    Interest Rates: 10% for the first month, 5%
                                    for each subsequent month.
                                  </ListItem>
                                  <ListItem>
                                    Maximum Amount Borrowable: €1,500.
                                  </ListItem>
                                  <ListItem>
                                    Repayment Duration: Up to 3 months.
                                  </ListItem>
                                </UnorderedList>
                              </ListItem>
                            </UnorderedList>
                          </ListItem>
                        </UnorderedList>
                      </VStack>

                      <VStack spacing={4} align="stretch" mt={6}>
                        <FormControl isInvalid={!!errors.loanService}>
                          <FormLabel color="gray.900">
                            Select the loan service you want to apply for*
                          </FormLabel>
                          <Select
                            name="loanService"
                            placeholder="Select service"
                            value={formData.loanService}
                            onChange={handleInputChange}
                            height="3.5rem"
                            _placeholder={{ color: "gray.400" }}
                          >
                            <option value="Flight Loan">Flight Loan</option>
                            <option value="Accommodation Loan">
                              Accommodation Loan
                            </option>
                            <option value="Settlement Loan">
                              Settlement Loan
                            </option>
                          </Select>
                          {errors.loanService && (
                            <FormErrorMessage>
                              {errors.loanService}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl isInvalid={!!errors.amountToBorrow}>
                          <FormLabel color="gray.900">
                            Amount you want to borrow
                          </FormLabel>
                          <Input
                            name="amountToBorrow"
                            placeholder="Enter amount"
                            value={formData.amountToBorrow}
                            onChange={handleInputChange}
                            height="3.5rem"
                          />
                          {errors.amountToBorrow && (
                            <FormErrorMessage>
                              {errors.amountToBorrow}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl isInvalid={!!errors.repaymentTerms}>
                          <FormLabel color="gray.900">
                            Repayment Terms
                          </FormLabel>
                          <Select
                            name="repaymentTerms"
                            placeholder="--Please choose an option--"
                            value={formData.repaymentTerms}
                            onChange={handleInputChange}
                            isDisabled={!formData.loanService}
                            height="3.5rem"
                          >
                            {availableRepaymentPlans.map((plan) => {
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
                                return (
                                  <option key={plan} value={plan}>
                                    {"        " + plan}
                                  </option>
                                );
                              }
                            })}
                          </Select>
                          {errors.repaymentTerms && (
                            <FormErrorMessage>
                              {errors.repaymentTerms}
                            </FormErrorMessage>
                          )}
                        </FormControl>

                        {repaymentMonths > 0 && (
                          <Box>
                            <Text
                              fontWeight="500"
                              color="gray.800"
                              fontFamily="heading"
                            >
                              Repayment Month:{" "}
                              <Text as="span" fontSize="0.8rem" color="#d0710b">
                                {repaymentMonths}{" "}
                                {repaymentMonths === 1 ? "Month" : "Months"}
                              </Text>
                            </Text>
                          </Box>
                        )}
                        {interestBreakdown && (
                          <Box mb="1rem">
                            <Text
                              fontWeight="500"
                              color="gray.800"
                              fontFamily="heading"
                            >
                              Interest Breakdown:{" "}
                              <Text as="span" fontSize="0.8rem" color="#d0710b">
                                {interestBreakdown}
                              </Text>
                            </Text>
                          </Box>
                        )}

                        <FormControl isInvalid={!!installmentError}>
                          <FormLabel color="gray.900">
                            Installment Structure
                          </FormLabel>
                          <Input
                            name="installmentStructure"
                            placeholder={installmentPlaceholder}
                            value={formData.installmentStructure}
                            onChange={handleInputChange}
                            height="3.5rem"
                            isDisabled={
                              formData.repaymentTerms ===
                                REPAYMENT_PLANS.SWIFT ||
                              formData.repaymentTerms ===
                                REPAYMENT_PLANS.BALANCED ||
                              formData.repaymentTerms ===
                                REPAYMENT_PLANS.STRUCTURED
                            }
                          />
                          {installmentError && (
                            <FormErrorMessage>
                              {installmentError}
                            </FormErrorMessage>
                          )}
                          <Text fontSize="sm" color="gray.500" mt={1}>
                            For Flexible Plans, determine how you want to pay.
                            Write in the following format - 55, 45. For example
                            for a Flex Two-Phase Plan, you could choose 60%
                            repayment for the first month and 40% repayment for
                            the second month, therefore the installment
                            structure is 60, 40. For Flex Three-Phase Plan, this
                            could be 45, 30, 25
                          </Text>
                        </FormControl>

                        <FormControl isInvalid={!!errors.isFirstTimer}>
                          <FormLabel color="gray.900">First timer?</FormLabel>
                          <Select
                            name="isFirstTimer"
                            placeholder="--Please choose an option--"
                            value={formData.isFirstTimer}
                            onChange={handleInputChange}
                            height="3.5rem"
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </Select>
                          {errors.isFirstTimer && (
                            <FormErrorMessage>
                              {errors.isFirstTimer}
                            </FormErrorMessage>
                          )}
                          <Text fontSize="sm" color="gray.500" mt={1}>
                            Is this your first time using our loan service?*
                          </Text>
                        </FormControl>
                      </VStack>
                    </Flex>
                  </Box>
                  <Flex
                    width={{ base: "100%", lg: "98%" }}
                    justifyContent="center"
                    roundedBottom="xl"
                    p={4}
                    bg="white"
                    py={4}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Button
                      variant="outline"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => setFormPage(2)}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => handleNextPage(3)}
                      isDisabled={!!installmentError}
                    >
                      Continue
                    </Button>
                  </Flex>
                </VStack>
              )}
              {formPage === 5 && (
                <VStack
                  as="form"
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="flex-start"
                  spacing={0}
                  height="100%"
                >
                  <Box
                    width="100%"
                    flex="1"
                    overflowY="auto"
                    pr={{ base: 2, md: 4 }}
                  >
                    <HStack spacing={0} alignSelf="start" mb={4}>
                      <Text color="#2b51d5" fontWeight="semibold">
                        Home
                      </Text>
                      <Text color="gray.500">/</Text>
                      <Text color="gray.500">Loan Application</Text>
                    </HStack>
                    <Flex
                      flexDirection="column"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      p={6}
                      width="100%"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="gray.900"
                        mb={4}
                        fontFamily="heading"
                      >
                        Application Confirmation
                      </Text>

                      <VStack spacing={4} align="stretch">
                        <Text
                          fontWeight="700"
                          color="gray.600"
                          fontFamily="heading"
                        >
                          Installment Structure
                        </Text>
                        <Text color="gray.500">
                          For Flexible Plans, determine how you want to pay.
                          Write in the following format - 55, 45. For example
                          for a Flex Two-Phase Plan, you could choose 60%
                          repayment for the first month and 40% repayment for
                          the second month, therefore the installment structure
                          is 60, 40. For Flex Three-Phase Plan, this could be
                          45, 30, 25
                        </Text>

                        <VStack spacing={2} align="stretch" mt={4}>
                          <Checkbox isChecked={!!fileUploads.passportDataPage}>
                            Passport data Page
                          </Checkbox>
                          <Checkbox isChecked={!!fileUploads.visaPage}>
                            Visa Page
                          </Checkbox>
                          <Checkbox isChecked={!!fileUploads.admissionLetter}>
                            Admission Letter
                          </Checkbox>
                          <Checkbox
                            isChecked={!!fileUploads.confirmationOfAward}
                          >
                            Confirmation of Award
                          </Checkbox>
                          <Checkbox isChecked={!!fileUploads.attestation}>
                            Attention of Good Behaviour
                          </Checkbox>
                          <Checkbox isChecked={!!fileUploads.policeReport}>
                            Police Report
                          </Checkbox>
                        </VStack>

                        <Text
                          fontWeight="700"
                          color="gray.600"
                          mt={6}
                          fontFamily="heading"
                        >
                          Declaration and Agreement
                        </Text>
                        <Text color="gray.500">
                          I hereby declare that the information provided in this
                          loan application form is accurate, complete, and
                          truthful to the best of my knowledge.
                        </Text>
                        <Text color="gray.500">
                          I understand that providing false or misleading
                          information may result in the rejection of my
                          application or legal consequences.
                        </Text>
                        <Text color="gray.500">
                          I agree to the terms and conditions of the loan,
                          including but not limited to the repayment schedule,
                          applicable interest rates, and any associated fees.
                        </Text>
                        <Text color="gray.500">
                          I acknowledge that EU StudyAssist reserves the right
                          to request additional documentation to support this
                          application and that loan approval is subject to a
                          thorough review process.
                        </Text>

                        <Checkbox
                          isChecked={iAgree}
                          onChange={(e) => setIAgree(e.target.checked)}
                          fontWeight="bold"
                        >
                          I Agree
                        </Checkbox>
                      </VStack>
                    </Flex>
                  </Box>
                  <Flex
                    width={{ base: "100%", lg: "98%" }}
                    justifyContent="center"
                    roundedBottom="xl"
                    p={4}
                    bg="white"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Button
                      variant="outline"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => setFormPage(4)}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme="blue"
                      px={4}
                      height="3.5rem"
                      width={{ base: "100%", md: "60%" }}
                      onClick={() => setFormPage(6)}
                      isDisabled={!iAgree}
                    >
                      Finish
                    </Button>
                  </Flex>
                </VStack>
              )}
              {formPage === 6 && (
                <VStack
                  width={{ base: "100%", lg: "50%" }}
                  p={{ base: 2, md: 6 }}
                  alignItems="center"
                  spacing={4}
                  height="100%"
                  justifyContent="center"
                >
                  <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    color="gray.900"
                    mb={4}
                    fontFamily="heading"
                  >
                    Submit Application
                  </Text>
                  <Text color="gray.600" mb={6} textAlign="center">
                    You have completed all the steps. Please review your
                    information before submitting.
                  </Text>
                  <Button
                    colorScheme="blue"
                    px={8}
                    height="3.5rem"
                    width={{ base: "100%", md: "60%" }}
                    onClick={handleFinalSubmit}
                  >
                    Submit Application
                  </Button>
                  <Button
                    variant="outline"
                    mt={4}
                    px={8}
                    height="3.5rem"
                    width={{ base: "100%", md: "60%" }}
                    onClick={() => setFormPage(5)}
                  >
                    Back
                  </Button>
                </VStack>
              )}
              <LoanProgressTracker
                progress={progress}
                display={{ base: "none", lg: "flex" }}
              />
            </Flex>
          )}
        </Flex>
      </ModalContent>
    </Modal>
  );
}
