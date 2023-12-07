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
    flexDirection: "row",
    marginTop: 8,

    alignItems: "center",
    padding: 14,
    paddingTop: 12,
    paddingBottom: 12,
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
    elevation: 5,
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
  
    flex:1,
  }
});

export default homeStyle;
