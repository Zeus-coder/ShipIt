import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";

const InitialLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <>
      <InitialLayout />
    </>
  );
};

export default RootLayout;
