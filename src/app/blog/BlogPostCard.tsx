"use client";
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import Image from "next/image";

/**
 * Props for the BlogPostCard component
 */
export interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    slug: string;
    date?: string;
    readTime?: number;
  };
}

/**
 * Blog post card component styled to match the CourseCard from CoursesGrid
 */
export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Box
      borderRadius="lg"
      overflow="visible"
      boxShadow="md"
      p="1rem"
      pb="0"
      borderColor="gray.200"
      borderWidth="1px"
      bg="white"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
      position="relative"
      display="flex"
      flexDirection="column"
      h="100%" // Ensure all cards have the same height
    >
      {/* Image */}
      <Box
        position="relative"
        width="100%"
        height="200px"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        borderBottomRightRadius="lg"
        borderBottomLeftRadius="lg"
        overflow="hidden"
        flexShrink={0} // Prevent image from shrinking
      >
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </Box>

      {/* Card Content - Flex container to distribute space */}
      <Flex direction="column" flex="1" p="0">
        {/* Title */}
        <Box pt="0.8rem" flexShrink={0}>
          <Flex justify="space-between" align="flex-start" mb="0.75rem" h="3.5rem">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight={600}
              color="black"
              lineHeight="1.2"
              flex="1"
              mr="0.5rem"
              noOfLines={2}
            >
              {post.title}
            </Heading>
          </Flex>
        </Box>

        {/* Horizontal Line */}
        <Box h="1px" bg="gray.400" w="100%" my="0.5rem" flexShrink={0} />

        {/* Minute Read and Category - Fixed position */}
        <Box flexShrink={0}>
          <Flex justify="space-between" mb="0.75rem">
            <Text fontSize="xs" fontWeight={600} color="gray.500" textTransform="uppercase">
              {post.readTime ? `${post.readTime} Min Read` : "5 Min Read"}
            </Text>
            <Text
              fontSize="xs"
              fontWeight={600}
              color="gray.500"
              textAlign="right"
              textTransform="uppercase"
            >
              {post.category}
            </Text>
          </Flex>
        </Box>

        {/* Horizontal Line */}
        <Box h="1px" bg="gray.400" w="100%" mb="1rem" flexShrink={0} />

        {/* Description - Flexible height that grows to fill available space */}
        <Box pr="1.5rem" flex="1" display="flex" flexDirection="column">
          <Text
            fontSize="sm"
            color="gray.600"
            lineHeight="1.5"
            flex="1"
            overflow="hidden"
          >
            {post.description}
          </Text>
        </Box>

        {/* Button - Fixed at bottom */}
        <Box position="relative" zIndex="2" my="1rem" flexShrink={0}>
          <Link href={`/blog/${post.slug}`} _hover={{ textDecoration: "none" }}>
            <Button
              w="45%"
              bg="#0E5FDC"
              color="white"
              _hover={{ bg: "#0B4DB0" }}
              fontWeight={600}
              borderRadius="md"
              py="1.5rem"
              boxShadow="0 4px 8px rgba(0,0,0,0.1)"
            >
              Read Post
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
