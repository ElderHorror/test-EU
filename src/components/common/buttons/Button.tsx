import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";

/**
 * Extended props for the Button component
 */
interface CustomButtonProps extends ButtonProps {
  btnType?: string;
  href?: string;
  showArrow?: boolean;
}

/**
 * Primary button component with blue styling
 * @param children - Button content
 * @param href - Optional link URL
 * @param showArrow - Whether to show an arrow icon
 * @param props - Additional button props
 */
export function PrimaryButton({
  children,
  href,
  showArrow = false,
  ...props
}: CustomButtonProps) {
  const MotionButton = motion(ChakraButton);

  const button = (
    <MotionButton
      variant="primary"
      rightIcon={showArrow ? <ArrowForwardIcon /> : undefined}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      {...props}
    >
      {children}
    </MotionButton>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}

/**
 * Secondary button component with light styling
 * @param children - Button content
 * @param href - Optional link URL
 * @param props - Additional button props
 */
export function SecondaryButton({
  children,
  href,
  ...props
}: CustomButtonProps) {
  const MotionButton = motion(ChakraButton);

  const button = (
    <MotionButton
      bg="#F2F2F4"
      color="#0E5FDC"
      fontWeight="600"
      px="1.5rem"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      {...props}
    >
      {children}
    </MotionButton>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}

/**
 * Yellow accent button component
 * @param children - Button content
 * @param href - Optional link URL
 * @param showArrow - Whether to show an arrow icon
 * @param props - Additional button props
 */
export function AccentButton({
  children,
  href,
  showArrow = false,
  ...props
}: CustomButtonProps) {
  const MotionButton = motion(ChakraButton);

  const button = (
    <MotionButton
      py="1.7rem"
      px="2.3rem"
      bgColor="rgba(252, 201, 68, 1)"
      borderRadius="50px"
      fontSize="18px"
      color="white"
      rightIcon={showArrow ? <ArrowForwardIcon /> : undefined}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      {...props}
    >
      {children}
    </MotionButton>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}

/**
 * Blue button component (legacy)
 * @param btnType - Button text
 * @param href - Optional link URL
 * @param props - Additional button props
 */
export function BlueButton({
  btnType,
  href = "https://forms.gle/RzhPjxMs5TBQw9Qv9",
  ...props
}: CustomButtonProps) {
  const MotionButton = motion(ChakraButton);

  const button = (
    <MotionButton
      as="a"
      borderRadius="50px"
      fontSize="18px"
      fontWeight="normal"
      color="white"
      py="1.7rem"
      px="1.7rem"
      bgColor="rgba(52, 97, 255, 1)"
      onClick={(e) => e.stopPropagation()}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      {...props}
    >
      {btnType || props.children}
    </MotionButton>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}
