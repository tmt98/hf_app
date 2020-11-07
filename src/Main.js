import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import BottomNavigation from './BottomNavigation';

const Main = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <View style={styles.container}>
      <BottomNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default Main;
