import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const otherStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    height: "75%",
    justifyContent: "space-between",
  },
 checkedListHeader:{
  backgroundColor:'white',
  flexDirection:'row',
  alignItems: 'center',
  padding:16,
  paddingLeft:20,
  
 },
 HeaderText:{
marginLeft:20,
fontSize:18,
 },
 headerSearch:{
   
   marginVertical:5,
  padding: 5,
  backgroundColor: COLORS.searchBar,
  borderRadius: 10,
  color: COLORS.white,
  flexDirection:'row',
  
  alignItems:'center',
 },
 listContainer:{
  // padding:10,
  // paddingHorizontal:13,
  borderBottomWidth:1,
  borderStyle: 'dashed',
 
 },
 leftImage:{
  width: 68,
   flex: 1,
  objectFit:'contain',
  backgroundColor:'#eee',
 },
 mediaIcon:{
width:20,
height:20,
 },
 listHeading:{
  fontWeight:'900',
  fontSize:13,
 },
 modalOptionsText:{
  paddingBottom:5,
  marginBottom:6,
   fontSize: 14, 
   borderBottomWidth:2,
   borderStyle:'dotted',
   color: COLORS.gray2,
 },
 imageContainer:{
  flex: 1, marginLeft: 20,height:'60%',borderColor:'gray',
  shadowColor: "#000",
shadowOffset: {
	width: 5,
	height: 5,
},
shadowOpacity: 0.0,
shadowRadius: 10.65,
// borderWidth:1,
justifyContent: "center",
alignItems:'center',

elevation: 3,
 },

});

export default otherStyles;
