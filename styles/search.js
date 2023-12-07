import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    height: "75%",
    justifyContent: "space-between",
  },
  mainContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    height: "100%",
  },
  secondaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  LoginButton: {
    // flex:2,
    flexDirection: "row",
    justifyContentc: "center",
    alignContent: "center",
    // alignItems: "center",
    borderWidth: 0.5,
    borderBottomColor: "#172746",
    borderRightColor: "#000000",
    borderRadius: 6,
    borderTopWidth: 0.6,
    borderBottomWidth: 1.8,
    borderRightWidth: 0.7,
    borderTopColor: "#1e3f7b",
    borderLeftColor: "#172737",
    borderLeftWidth: 0.7,
    // ...SHADOWS.medium,
    // backgroundColor: "#2c6399",
    // paddingTop: 10,
    shadowColor: "#0a0a0b",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,

    elevation: 36,

    // padding:20,
  },

  LoginBtn: {
    color: COLORS.white,
    padding: 18,
    // paddingVertical:10,
    // paddingHorizontal:20,
    backgroundColor: "transparent",
    borderLeftWidth: 0.6,
    borderLeftColor: "#2c2c39",
    fontWeight: "bold",
  },

  button: {
    borderRadius: 0,
  },
  signUp: {
    backgroundColor: "#2e4e92",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupIcon: {
    width: 55,
    borderColor: "black",
    height: 55,
    backgroundColor: COLORS.white,
    borderRadius:10,

  },




  
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.white,
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;
