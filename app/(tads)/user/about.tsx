import { View  , Text} from "react-native";
import { Link } from "expo-router";


const about = () =>{

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
    >About Page</Text>

    </View>
    

   )
}

export default about;