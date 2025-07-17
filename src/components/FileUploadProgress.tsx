"use client";
import { Box, Flex, Text, Progress, CloseButton } from "@chakra-ui/react";

interface FileUploadProgressProps {
  file: File;
  progress: number;
  onCancel: () => void;
  inputName: string;
}

const formatInputName = (name: string) => {
  const result = name.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export default function FileUploadProgress({
  file,
  progress,
  onCancel,
  inputName,
}: FileUploadProgressProps) {
  const fileExtension = file.name.split(".").pop()?.toUpperCase() || "";
  const formattedInputName = formatInputName(inputName);

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.300"
      borderStyle="dotted"
      width="100%"
      bg="white"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width={`${progress}%`}
        bgGradient="linear(to-r, green.50, green.100)"
        borderRadius="lg"
        borderTopRightRadius={progress < 100 ? "0" : "lg"}
        borderBottomRightRadius={progress < 100 ? "0" : "lg"}
        zIndex="0"
        transition="width 0.2s ease-in-out"
      />

      <Flex alignItems="center" position="relative" zIndex="1">
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="white"
          color="blue.500"
          borderRadius="md"
          px={2}
          py={1}
          mr={4}
          fontSize="sm"
          fontWeight="bold"
          border="1px solid"
          borderColor="blue.500"
          minW="50px"
          h="30px"
        >
          {fileExtension}
        </Flex>
        <Box flex="1">
          <Text fontWeight="semibold" color="gray.800">
            Uploading {formattedInputName}
          </Text>
          {/* The Progress component is no longer needed as the background gradient handles the visual progress */}
          {/* <Progress
            value={progress}
            size="sm"
            colorScheme="green"
            borderRadius="full"
            mt={2}
          /> */}
          <Text fontSize="sm" color="gray.500" mt={1}>
            {file.name} | {Math.round(progress)}% Completed
          </Text>
        </Box>
        <CloseButton onClick={onCancel} size="md" />
      </Flex>
    </Box>
  );
}
