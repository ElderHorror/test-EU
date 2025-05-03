import { Box, Card, CardBody, Flex, Avatar, Text, VStack } from "@chakra-ui/react";

/**
 * Props for the TestimonialCard component
 */
export interface TestimonialCardProps {
  text: string;
  name: string;
  role?: string;
  image?: string;
}

/**
 * Card component for displaying a single testimonial
 * 
 * @param text - The testimonial text
 * @param name - The name of the person giving the testimonial
 * @param role - Optional role or title of the person
 * @param image - Optional avatar image URL
 */
export default function TestimonialCard({ 
  text, 
  name, 
  role,
  image 
}: TestimonialCardProps) {
  return (
    <Box position="relative">
      {/* Shadow Box for depth effect */}
      <Box
        position="absolute"
        top="16px"
        left="16px"
        right="-8px"
        bottom="-8px"
        bg="black"
        borderRadius="xl"
        zIndex={0}
      />
      
      {/* Content Card */}
      <Card
        position="relative"
        borderRadius="xl"
        bg="white"
        borderWidth="1px"
        borderColor="gray.300"
        transform="translateY(-4px)"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-8px)" }}
        zIndex={1}
      >
        <CardBody>
          <VStack spacing={4} align="flex-start">
            <Text fontSize={{lg: "xl", base:"md"}} color="black" fontWeight="medium">
              "{text}"
            </Text>
            <Flex align="center" gap={3}>
              <Avatar size="md" name={name} src={image} />
              <Box>
                <Text fontWeight="semibold" fontSize="sm">
                  {name}
                </Text>
                {role && (
                  <Text fontSize="xs" color="gray.600">
                    {role}
                  </Text>
                )}
              </Box>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
