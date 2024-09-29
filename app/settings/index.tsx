import { View  , Text} from "react-native";
import { Link } from "expo-router";


const index = () =>{

   return(
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "orange"
      }}
    >

    <Text
    style = {{fontSize : 30 , fontWeight : 900}}
    >Settings</Text>
<Link href={"/"}>Home</Link>
<Link href={"/about"}>about</Link>
<Link href={"/settings/setting1"}>setting1</Link>
<Link href={"/settings/setting2"}>setting2</Link>
    </View>


   )
}

export default index;