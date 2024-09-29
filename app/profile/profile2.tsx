import { Text, View  , Pressable} from "react-native";
import { Link } from "expo-router";

export default function profile2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "yellow"
      }}
    >
      <Text
      style = {{fontSize : 30 , fontWeight : 900}}
      >Profile NO 2</Text>

   
    </View>
  );
}
