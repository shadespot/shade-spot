import { colors } from "constants";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import AppNavigator from "./src/navigation/index";

const AppWithTheme: React.FC<object> = () => {
  const [fontsLoaded] = useFonts({
    QanelasSoft: require("./assets/fonts/QanelasSoftDEMO-ExtraBold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const fontConfig = {
    default: {
      regular: {
        fontFamily: "QanelasSoft",
        fontWeight: "900" as "900",
      },
      medium: {
        fontFamily: "QanelasSoft",
        fontWeight: "900" as "900",
      },
      light: {
        fontFamily: "QanelasSoft",
        fontWeight: "900" as "900",
      },
      thin: {
        fontFamily: "QanelasSoft",
        fontWeight: "900" as "900",
      },
    },
  };
  fontConfig.ios = fontConfig.default;
  fontConfig.android = fontConfig.default;
  fontConfig.web = fontConfig.default;

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.shadyOranje,
      accent: colors.skyBlue,
      background: colors.offWhite,
    },
    fonts: configureFonts(fontConfig),
  };

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default AppWithTheme;
