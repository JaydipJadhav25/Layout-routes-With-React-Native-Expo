import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
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
      >Home</Text>

    <Link href={"/jaydip"}>MyPage</Link>
    <Link href={"/about"}>about</Link>
    <Link href={"/settings"}>Settings</Link>

    </View>
  );
}
