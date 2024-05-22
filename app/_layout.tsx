import { Slot, SplashScreen, Stack, useRouter, useSegments } from 'expo-router';



const InitialLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}


const RootLayout = () => {
  return (
    <>
      <InitialLayout />
    </>
  );
}

export default RootLayout