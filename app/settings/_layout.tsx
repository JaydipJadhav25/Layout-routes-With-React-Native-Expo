import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { Stack } from "expo-router"


export default function SettingLayout() {
  return (
    <>
      {/* <Header /> */}
      <Text
      style ={{
        fontSize : 50
      }}
      >setting Layout Page </Text>
      {/* <Slot /> */}

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

        <Stack.Screen name='index'/>
        <Stack.Screen name='setting1' options={{
            title : "user setting no 1 "
        }}/>
     
      {/* <Slot /> */}
      {/* <Footer /> */}
      </Stack>
    </>
  );
}
