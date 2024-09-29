import { Text, View  , Pressable} from "react-native";
import { Link  } from "expo-router";
import { router } from "expo-router";


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
    <Link href={"/user"}>User</Link>
    <Link href={"/profile"} asChild>
    <Pressable>
      <Text>Profile</Text>
    </Pressable>
    </Link>

    <Link
        href={{
          pathname: '/user/[username]',
          params: { username: 'jaydipjadhav' }
        }}
       
        >
          View user
        </Link>


<Text style={{fontSize :50 , fontWeight : 300}}>Navigate between pages</Text>
   
   <button onClick={() =>{
    router.push("/about")
   }}>Push On About</button>

<button onClick={() =>{
    router.replace("/about")
    // router.setParams(para)
   }}>replace On About</button>


  



    </View>
  );
}


