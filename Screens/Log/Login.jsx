import { View, Text,TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";
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
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = async () => {
    // Simulate login
    // ...

    // Store login state in AsyncStorage
    await AsyncStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView>
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
        <TouchableOpacity style={{ ...styles.LoginButton, lightShadowColor: '#000' }}>
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
          <TouchableOpacity style= {styles.signUp}>
          <Image source={icons.signUp} style={styles.signupIcon} />
           <Text style={{padding:15,color:COLORS.white}}>Sign up with Facebook</Text>
          </TouchableOpacity>
         </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
