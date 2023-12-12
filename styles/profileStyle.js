import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const profileStyle = StyleSheet.create({
  container: {
    width: "100%",
    position:'relative',
    // top:0,
    height: 200,
    backgroundColor:COLORS.button1,
    justifyContent: 'center',
 
    alignItems:'center',
    
     
  },
  profileContainer:{
   position:'relative',
   // top:120,
   padding:12,
   flexDirection:'row',
   justifyContent:'space-around',
 
   alignItems:'center',
   marginTop:0,
    
   paddingLeft:120,
   
   
   // backgroundColor:'#FFFFFF',
 
  },
  prfileTopButtons:{
   position:'relative',
   // top:120,
   padding:12,
   flexDirection:'row',
   // backgroundColor:'#FFFFFF',
   paddingBottom:20,

  },

  profileRecentActivity:{
   // position:'relative',
   backgroundColor:COLORS.postBackground,
   flex:1,
   // top:120,
  },
  profileImage:{
   width:100,
   height:100,
   position:'absolute',
   top:140,
   left:20,

    
  },
  profileName:{
   fontWeight:'900',

  },
  profileNameFacebook:{
   color:COLORS.gray,
   fontSize:9,
  },
  profileTopButton:{
   backgroundColor:COLORS.postInput,
   padding:10,
   borderRadius:30,
   paddingLeft:15,
   paddingRight:15,
   flexDirection:'row',
   alignItems:'center',
   marginRight:10,

  },
 
});

export default profileStyle;
