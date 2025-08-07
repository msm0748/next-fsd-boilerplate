'use client';

import {
  ChakraProvider as DefaultChakraProvider,
  defaultSystem,
} from '@chakra-ui/react';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from '../../shared/ui/color-mode';

export default function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <DefaultChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </DefaultChakraProvider>
  );
}
