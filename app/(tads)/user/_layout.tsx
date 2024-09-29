import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View  , Text} from "react-native";

const userlayout = () =>{
    return(
<Tabs
screenOptions={{ tabBarActiveTintColor: 'red' }}>

    <Tabs.Screen name="index"

        options={{
            title: 'index of user',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
    />

<Tabs.Screen name="about"  options={{
    title : "user about",
    tabBarIcon : ({color , size}) =>{
        return(
            <View
            style ={{
                width : 50 ,
                height : 50,
                backgroundColor : "black",
                borderRadius : 50,
                bottom : 20,
           
            justifyContent : "center",
            alignItems : "center"
            }}
            >
        <FontAwesome size={28} name="cog" color={color} />
              
            </View>
        )
    }
   

}}

/>
<Tabs.Screen name="jaydip"  options={{
    title : "jaydip dhananjay jadhav",
    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />,
   
}}/>
</Tabs>
    )
}

export default userlayout;