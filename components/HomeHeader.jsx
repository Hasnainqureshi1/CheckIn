import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/home';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from '../constants';
const HomeHeader = () => {
 const navigation = useNavigation();
 return (
   <SafeAreaView
     
   >
     <View style={ styles.tabHeaderStyle}>

     <TouchableOpacity onPress={() => navigation.openDrawer()}>
       <Text style={styles.logo}>Checked IN</Text>
     </TouchableOpacity>
     <View style={{flex:1,}}>

   
<View style={styles.headerSearchInputStyle}>
<Ionicons name="search" size={22} style={styles.searchIcon}/>
     <TextInput
       placeholder="Search"
       style={ {paddingLeft:20,color:COLORS.white}}
       placeholderTextColor={COLORS.searchplaceholder}
       
       returnKeyType={'search'}
       />
       
</View>
</View>

     <TouchableOpacity onPress={() => navigation.openDrawer()}>
     <Ionicons name="menu-sharp" size={27} color="white" />
     </TouchableOpacity>
       </View>
   </SafeAreaView>
  )
}

export default HomeHeader