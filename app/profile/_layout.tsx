import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1  , backgroundColor : "green"}}>
     <Drawer screenOptions={{
      
     }}>
     <Drawer.Screen name='index'  options={{
        
     }}/>
      <Drawer.Screen name='profile1' />
      <Drawer.Screen name='profile2' />
     </Drawer>
    </GestureHandlerRootView>
  );
}
