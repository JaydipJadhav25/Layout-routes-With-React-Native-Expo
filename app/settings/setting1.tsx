import { View  , Text} from "react-native";
import { Link } from "expo-router";


const setting1 = () =>{

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
    >Setting 1 </Text>
<Link href={"/"}>Home</Link>
<Link href={"/jaydip"}>jaydip</Link>
    </View>
    

   )
}

export default setting1;