// import React, { useState } from 'react';

// const [currentScreenName, setCurrentScreenName] = useState('');
// const handleNavigationStateChange = (state) => {
//  const { routeName } = state.routes[state.routes.length - 1];
//  setCurrentScreenName(routeName);
// };

// useEffect(() => {
//  const navigation = useNavigation();
//  navigation.addListener('stateChange', handleNavigationStateChange);
// }, []);
// const handleBackButtonPress = () => {
//  const navigation = useNavigation();
//  const previousScreenName = currentScreenName;
//  navigation.goBack();

//  // Use previousScreenName to determine the last screen visited
// };
// const lastScreenVisited = previousScreenName;
