import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Box, Spinner, Center } from '@chakra-ui/react';

/**
 * Options for dynamic import
 */
interface DynamicImportOptions {
  ssr?: boolean;
  loading?: React.ComponentType<any>;
  suspense?: boolean;
}

/**
 * Default loading component
 */
const DefaultLoading = () => (
  <Center py={10}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);

/**
 * Dynamically import a component with loading state
 * 
 * @param importFunc - Import function
 * @param options - Dynamic import options
 * @returns Dynamically imported component
 */
export function dynamicImport(
  importFunc: () => Promise<any>,
  options: DynamicImportOptions = {}
) {
  const {
    ssr = false,
    loading = DefaultLoading,
    suspense = false,
  } = options;

  const DynamicComponent = dynamic(importFunc, {
    ssr,
    loading,
    suspense,
  });

  // If using suspense, wrap in Suspense
  if (suspense) {
    return (props: any) => (
      <Suspense fallback={<DefaultLoading />}>
        <DynamicComponent {...props} />
      </Suspense>
    );
  }

  return DynamicComponent;
}

/**
 * Dynamically import a component with a specific loading component
 * 
 * @param importFunc - Import function
 * @param LoadingComponent - Custom loading component
 * @param ssr - Whether to render on server
 * @returns Dynamically imported component
 */
export function dynamicImportWithCustomLoading(
  importFunc: () => Promise<any>,
  LoadingComponent: React.ComponentType<any>,
  ssr = false
) {
  return dynamic(importFunc, {
    ssr,
    loading: LoadingComponent,
  });
}
