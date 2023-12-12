import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const homeStyle = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    height: "75%",
    justifyContent: "space-between",
  },
  topLayout: {
    backgroundColor: COLORS.white,
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
  SecondTopHead: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    marginTop: 8,

    alignItems: "center",
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  postLayoutContainer:{
    backgroundColor: COLORS.white,
    flexDirection: "column",
    marginTop: 8,

    alignItems: "center",
    padding: 14,
    paddingTop: 12,
    paddingBottom: 12,
    marginRight:10,
    marginLeft:10,
  },
  topLayoutBtns: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    padding: 15,
  },
  postInputView: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  postinput: {
    padding: 10,
    backgroundColor: COLORS.postInput,
    borderRadius: 20,
    textAlign: "center",
    color: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    shadowColor: "black",
    
  },
  postfirstRowLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName:{
    marginLeft:5,
  },
  flexRow:{
   flexDirection: "row",
   justifyContent:'space-between',
   width: '100%',
  },
  postCenter:{
    // backgroundColor:'red',
    marginTop:20,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  postLocation:{
    flexDirection:'row',
    // padding:10,
    backgroundColor:COLORS.postInput,
    borderRadius:40,
    justifyContent: 'center',
     paddingLeft:10,
     paddingRight:10,
    alignItems: 'center',
  

  },
  postViews:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  postedDateText :{
    color:COLORS.gray,
    fontSize:12,
  },
  postCenterRight:{
    
  },
  postBottom:{
    justifyContent:'flex-start',
    width:'100%',
    marginLeft:20,
    marginTop:15,
    marginBottom:10,
   
  },
  postArrivedLeft:{
    flexDirection:'row',
  },
  postRecommended:{
   
    alignItems: 'flex-start',
   
 
    
    width:'100%',
    // flexDirection:'row',
  },

});

export default homeStyle;
