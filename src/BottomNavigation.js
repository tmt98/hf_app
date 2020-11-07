import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

import MyDevice from './Device/MyDevice';
import SharedDevice from './Device/SharedDevice';
import Profile from './Profile/Profile';

const BottomNavigationG = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'mydevice', title: 'My Device', icon: 'access-point'},
    {key: 'shareddevice', title: 'Shared Device', icon: 'access-point-network'},
    {key: 'profile', title: 'Profile', icon: 'account-circle-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mydevice: MyDevice,
    shareddevice: SharedDevice,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationG;
