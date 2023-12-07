const COLORS = {
  primary: "#287fd7",
  secondary: "#4563a3",
  tertiary: "#FF7754",
  button1:'#708cc9',
    gray: "#83829A",
  gray2: "#e8e8e8",
  searchBar:"#314270",
  headerColor:"#4563a3",
  searchplaceholder: "#6177a9",
  postInput:'#acacae',
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 1,
    shadowRadius: 10.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
