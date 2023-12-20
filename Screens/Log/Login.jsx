import { View, Text,TouchableOpacity,Image,Button } from "react-native";
import React, { useEffect, useState } from "react";
styles
import styles from './../../styles/search';
import {LinearGradient} from 'expo-linear-gradient';
// import { Neomorph  } from 'react-native-neomorph-shadows';
import { SafeAreaView } from "react-native-safe-area-context";
import {
   
  icons,
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
} from "../../constants/index";
import * as Facebook from "expo-auth-session/providers/facebook"
import * as WebBrowser from "expo-web-browser"
 
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [User, setUser] = useState(null);


  const [request,response, promptAsync] = Facebook.useAuthRequest({
   clientId:"1060180685323861"
  })

useEffect(() => {
  if(response && response.type === "success" && response.authentication){
      (async ()=>{
      const userInforResponse = await fetch(
        `https://graph.facebook.com/v18.0/me?fields=id,name,picture{url}&access_token=${response.authentication.accessToken}`
      );
      const userInfo = await userInforResponse.json();
      setUser(userInfo);
      console.log(userInfo);
    })();
     }
 
 
}, [response])
const handlePressAsync = async ()=>{
  console.log("Press");
  const result = await promptAsync();
  if(result.type !== "success"){
    alert("Uh oh, something went wrong");
    return;
  }
}
  const handleLogin = async () => {
    // Simulate login
    // ...

    // Store login state in AsyncStorage
    await AsyncStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView>
      {User ? (
        <Profile user={User}/>
      ):(

      
     <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.secondaryContainer}>
          <View style={{}}>
            <Text style={{color:COLORS.white, fontFamily:FONT.medium,fontSize:SIZES.xLarge}}>Checked IN</Text>
          </View>
          <View>
            <Text style={{fontSize:SIZES.xSmall, color:COLORS.white,}}>Share the Moements, CHerish the Connections</Text>
          </View>
        </View>
        <View style={styles.secondaryContainer}>
         <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#708cc9', '#3f5ea2', '#3f5ea2']}
        style={styles.button}>
        <TouchableOpacity style={{ ...styles.LoginButton, lightShadowColor: '#000' }} onPress={handlePressAsync}>
         <Image source={icons.facebook} style={{ width: 55,borderRightWidth:10,borderColor:'black', height: 58 }} />
       
          <Text style={styles.LoginBtn}>Login with Facebook</Text>
         </TouchableOpacity>
          </LinearGradient>
       
        </View>
        <View style={styles.secondaryContainer}>
         <View>
          <Text style={{color:COLORS.lightWhite, marginBottom:15,}}>
           Not a member yet ?
          </Text>
         </View>
         <View>
          <View>
          

          </View>

         
          <TouchableOpacity style= {styles.signUp} >
          <Image source={icons.signUp} style={styles.signupIcon} />
           <Text style={{padding:15,color:COLORS.white}}>Sign up with Facebook</Text>
          </TouchableOpacity>
         </View>
        </View>
      </View>
      </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
function Profile({ user }) {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: user.picture.url }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <Text>ID: {user.id}</Text>
    </View>
  );
}
