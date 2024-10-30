import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(start)/start1" />
      <Stack.Screen name="(start)/start2" />
      <Stack.Screen name="(start)/start3" />
      <Stack.Screen name="(start)/start4" />
    </Stack>
  );
}
