import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.white,
    height: "75%",
    justifyContent: "space-between",
  },
  tabLabelStyle: {
    fontWeight: "bold",
    fontSize: 10,
  },
  focusedTabLabelStyle: {
    fontWeight: "bold",
    fontSize: 6,
  },
  unfocusedTabLabelStyle: {
    fontSize: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    width: "100%",
  },
  tabHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.headerColor,
  },
  logo: {
    fontWeight: "800",
    color: COLORS.white,
  },
  headerSearchInputStyle: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: COLORS.searchBar,
    borderRadius: 5,
    color: COLORS.white,
    // paddingLeft:30,
  },
  searchIcon: {
    //  backgroundColor:'red',
    position: "absolute",
    top: 3,
    left: 3,
  },
  friendListSearchContainer: {
    // flex: 1,
    // marginHorizontal: 10,
    padding: 7,
    backgroundColor: COLORS.friendSearch,
    borderRadius: 5,
    color: COLORS.white,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 10,

    // paddingLeft:30,
  },
  FriendListsearchIcon: {
    //  backgroundColor:'red',
  },
  friendlistSidebarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    
    padding: 10,
    backgroundColor: COLORS.friendlistBg,
    borderBottomColor: COLORS.postInput,
    borderBottomWidth: 1,
  },
  friendlistLeft:{
flexDirection:'row',
 
 alignItems : 'center',
 
  },
  friendlistright:{
    alignItems : 'center',
    flexDirection:'row',
  },
});

export default styles;
