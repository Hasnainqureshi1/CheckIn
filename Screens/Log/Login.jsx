import { View, Text,TouchableOpacity,Image, Alert } from "react-native";
import React, { useState,useEffect } from "react";
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
import { auth, db } from "../../firebase/firebaseConfig";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import { LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  AppEventsLogger, } from "react-native-fbsdk-next";
import { FacebookAuthProvider, createUserWithEmailAndPassword, getRedirectResult, onAuthStateChanged, signInWithCredential, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  //make it false to see other screen 
  const [Initializing, setInitializing] = useState(null)
   const [request,response, promptAsync] =  Facebook.useAuthRequest({
    clientId:"1060180685323861",
    scopes:["public_profile","email"],
    
   })
  const [User, setUser] = useState(null);
function onAuthStateChanged(User) {
setUser(User);
if(Initializing) setInitializing(false);
}
 
  const onFacebookButtonPress = async () => {
    try {
      // Attempt to log in with Facebook
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }

      // Get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Something went wrong obtaining the access token');
      }

      // Create a Firebase credential with the Facebook access token
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign in with Firebase
      await firebase.auth().signInWithCredential(facebookCredential);

      console.log('User signed in with Facebook!');
    } catch (error) {
      console.error('Facebook login error:', error.message);
    }
  };
  useEffect(() => {
    //  auth.signOut(); // Sign out of Firebase
    //  LoginManager.logOut(); // Sign out of Facebook
    console.log("User signed out successfully");
    // AppEventsLogger.activateApp(); // Initialize the Facebook SDK
  }, []);
 
// https://com.hasnain1.CheckIn/expo-development-client/?url=http%3A%2F%2F192.168.0.104%3A8081
 

// useEffect(() => {
//   // const unsubscribe = auth.onAuthStateChanged((user) => {
//   //   setUser(user);
//   //   setIsLoggedIn(!!user);
//   // });
//   // return unsubscribe;
//   if(response &&)
// }, []);
// useEffect(() => {
//   if (response && response.type === "success" && response.authentication) {
//     console.log(response);
//     (async () => {
//       const userInfoResponse = await fetch(
//         `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
//       );
//       const userInfo = await userInfoResponse.json();
//       // Sign up with Firebase using Facebook credentials
//       try {
//         const credential = await FacebookAuthProvider.credential(
//           response.authentication.accessToken
//         );
//         console.log(credential); 
//         // Access idToken after awaiting credential
//         console.log(credential.idToken); // Now accessible 
//         const userCredential = await signInWithCredential(credential);
//         console.log(userCredential); 
//         setUser(userCredential.user);
//         console.log(User);
//       } catch (error) {
//         console.error(error);
//       }
//       // setUser(userInfo);
//       console.log(userInfo);
//     })();
//   }
// }, [response]);


// const handleFacebookLogin = async () => {
  
//   try {
//     const result = await promptAsync();
//     if (result.type === "success") {
//       const credential = FacebookAuthProvider.credential(result.params.accessToken);
//       console.log(credential);
//       const userCredential = await signInWithCredential(auth, credential);
//       console.log("Login successful:", userCredential.user);
//     } else {
//       console.log("Login cancelled by user.");
//     }
//   } catch (error) {
//     console.log("Login error:", error);
//     // Handle errors appropriately (e.g., display error messages to the user)
//   }
// };
 
// const signUpWithFb = async () => {
//   try {
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//       console.log("Login cancelled");
//       alert("Login cancelled");
//       return;
//     }

//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       return console.log("Access token not found");
//     }

//     console.log("Access token obtained");

//     const facebookCredentials = await FacebookAuthProvider.credential(data.accessToken);
//     console.log(facebookCredentials);
//     // const response = await createUserWithEmailAndPassword(auth, facebookCredentials);

//     // console.log("User signed in:", response);
//   } catch (error) {
//     console.log("error:", error);
//   }
// };
// const signInWithFb = async () => {
//   try {
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//       console.log("Login cancelled");
//       alert("Login cancelled");
//       return;
//     }

//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       return console.log("Access token not found");
//     }

//     console.log("Access token obtained");

//     const facebookCredentials = await FacebookAuthProvider.credential(data.accessToken);
//     const response = await signInWithCredential(auth, facebookCredentials);

//     console.log("User signed in:", response);
//   } catch (error) {
//     console.log("error:", error);
//   }
// };
  const signInWithFb = async () => {
    console.log("sign up");
  
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email'], {
 
      });
      console.log("result:", result);
      if (result.isCancelled) {
        console.log("Login cancelled");
        alert("Login cancelled");
        return;
      }
  
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        return console.log("Access token not found");
      }
      // MjOVane3fuVpcTIltGuiE20O2453
      // MjOVane3fuVpcTIltGuiE20O2453
      // MjOVane3fuVpcTIltGuiE20O2453
      console.log(data);
      console.log("Access token obtained");
      const facebookCredentials = await FacebookAuthProvider.credential(data.accessToken);
      const response = await signInWithCredential(auth, facebookCredentials);
      const userDoc = doc(collection(db, "users"),'RMigFtc6atgzAZEcGdZQ');
      console.log("userDoc",userDoc)
    const docSnap = await getDoc(userDoc);
      console.log(docSnap)
    if (docSnap.exists) {
      console.log(docSnap);
      console.log("User already exists in Firestore");
      const user = docSnap.data();
      await signInWithCredential(auth, facebookCredentials); // Sign in with existing user
      console.log("User signed in:", user);
    } else {
      console.log("User not found in Firestore, creating new user");
      const response = await createUserWithEmailAndPassword(auth, result.email, result.id); // Use result.id as password
      // ... store user data in Firestore (as in previous code) ...
    }
      console.log(response);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const signUpnWithFb = async () => {
    console.log("sign up");
  
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email'], {
 
      });
      console.log("result:", result);
      if (result.isCancelled) {
        console.log("Login cancelled");
        alert("Login cancelled");
        return;
      }
  
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        return console.log("Access token not found");
      }
      
      console.log(data);
      console.log("Access token obtained");
      const facebookCredentials = await FacebookAuthProvider.credential(data.accessToken);
      const response = await signInWithCredential(auth, facebookCredentials);
      console.log(response.user.email,)
      // check if user already exists or not 
      const userDoc = doc(collection(db, "users"), response.user.uid);
      const docSnap = await getDoc(userDoc);
       // Store user data in Firestore
       await addDoc(collection(db, "users"), {
        uid: response.user.uid,
        name: response.user.displayName,
        email: response.user.email,
        profilePicture: response.user.photoURL, // Assuming you have profile picture URL
        
      }).then(()=>{
        console.log("user added successfully")
      })

      console.log(response);
    } catch (error) {
      console.log("error:", error);
    }
  };

  // const handlePressAsync = async ()=>{
  //   const result = await promptAsync();
  //   if(result.type !== "success"){
  //     alert("uh ho something went wrong");
  //     return;
  //   }
  // }
  


  // const handleFacebookLogin = async () => {
  //   // Request Facebook login permissions
  //   auth.signInWithCredential
  //   const { type, token } = await auth().signInWithPopup(new auth.FacebookAuthProvider());

  //   // Firebase handles authentication and user creation
  //   if (type === auth.OAuthProviderType.FACEBOOK) {
  //     const credential = auth.FacebookAuthProvider.credentialFromResult(token);
  //     await firebase.auth().signInWithCredential(credential);
  //     setIsLoggedIn(true);

  //     // Store login state in AsyncStorage
  //     await AsyncStorage.setItem("isLoggedIn", "true");
  //   }
  // };
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
        <TouchableOpacity style={{ ...styles.LoginButton, lightShadowColor: '#000' }} onPress={signInWithFb}>
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
          <TouchableOpacity style= {styles.signUp} onPress={signUpnWithFb}>
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
