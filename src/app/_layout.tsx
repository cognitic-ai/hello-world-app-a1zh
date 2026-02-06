import { ThemeProvider } from "@/components/theme-provider";
import Stack from "expo-router/stack";
import * as AC from "@bacons/apple-colors";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const stackPreset: NativeStackNavigationOptions =
  process.env.EXPO_OS !== "ios"
    ? {}
    : {
        headerTransparent: true,
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerBlurEffect: "systemChromeMaterial",
      };

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={stackPreset}>
        <Stack.Screen name="index" options={{ title: "Hello World" }} />
      </Stack>
    </ThemeProvider>
  );
}
