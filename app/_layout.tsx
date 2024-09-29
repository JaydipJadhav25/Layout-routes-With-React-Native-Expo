import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="jaydip" options={
        {
          title : "jaydip jadhav"
        }
      }/>
      <Stack.Screen name="about"/>
      <Stack.Screen name="settings"/>

    </Stack>
  );
}
