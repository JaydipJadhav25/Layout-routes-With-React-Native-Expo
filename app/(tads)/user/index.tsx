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
    >User Page </Text>

    {/* <Link href={{
      pathname : '(tads)/user/[username]',
      params : {"username" : "jaydip"}
    }}>
      Username</Link> */}

    </View>


   )
}

export default index;