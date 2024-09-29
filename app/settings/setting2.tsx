import { View  , Text} from "react-native";
import { Link } from "expo-router";


const setting2 = () =>{

   return(
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "blue"
      }}
    >

    <Text
    style = {{fontSize : 30 , fontWeight : 900}}
    >Setting 2 </Text>
<Link href={"/"}>Home</Link>
<Link href={"/jaydip"}>jaydip</Link>
    </View>
    

   )
}

export default setting2;