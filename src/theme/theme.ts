import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { fontSizes } from "./fontSizes";
import { fontWeight } from "./fontWeight";
import { letterSpacings } from "./letterSpacings";
import { lineHeights } from "./lineHeights";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { space } from "./space";
import { zIndices } from "./zIndices";

export const theme: ThemeConfig = extendTheme({
   fonts,
   colors,
   fontSizes,
   breakpoints,
   fontWeight,
   letterSpacings,
   lineHeights,
   radii,
   sizes,
   space,
   zIndices,
});
