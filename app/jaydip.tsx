import { View  , Text} from "react-native";
import { Link } from "expo-router";


const jaydip = () =>{

   return(
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "red"
      }}
    >

    <Text
    style = {{fontSize : 30 , fontWeight : 900}}
    >Jaydip Dhananjay Jadhav Page</Text>
<Link href={"/"}>Home</Link>
<Link href={"/about"}>about</Link>
    </View>


   )
}

export default jaydip;