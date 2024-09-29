import { Slot } from 'expo-router';
import { Text } from 'react-native';

export default function SettingLayout() {
  return (
    <>
      {/* <Header /> */}
      <Text
      style ={{
        fontSize : 100
      }}
      >setting Layout Page </Text>
      <Slot />
      {/* <Footer /> */}
    </>
  );
}
