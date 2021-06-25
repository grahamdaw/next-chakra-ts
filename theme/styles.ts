import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('light.fontPrimary', 'dark.fontPrimary')(props),
      bg: mode('light.background', 'dark.background')(props),
    },
  }),
};
