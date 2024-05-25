import { Stack, useRouter } from 'expo-router';

const Layout = () => {

  return (
    <Stack 
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="deliveryDetails/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="providerDetails/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout