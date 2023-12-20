import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Login from './Screens/Log/Login';
import { BottomTabNavigator, FriendsDrawer } from './navigator/AppNavigator';
import MainNavigator from './navigator/MainNavigator';
import CheckInList from './components/ProfileComponents/CheckInList';
import * as ScreenOrientation from 'expo-screen-orientation';

// Lock to portrait on app start
 

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

const LoginScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = async () => {
    // Simulate login
    // ...

    // Store login state in AsyncStorage
    await AsyncStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <View>
      {isLoggedIn ? (
        <Text>You are logged in!</Text>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Welcome to the home screen!</Text>
    </View>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is already logged in
  React.useEffect(() => {
    const checkLoginState = async () => {
      const isLoggedInStored = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedInStored === 'true') {
        setIsLoggedIn(true);
      }
    };

    checkLoginState();
  }, []);
const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator 
       screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      })}
  
  >
        {isLoggedIn ? (
          <Stack.Screen 
          name="MainScreen"
          component={MainNavigator}
          options={{
            title:"false",
            headerShown:false,
          }}
          />
        ) : (
          <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            title:false,
          }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
 