import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThongBao from './ThongBao';
import AmThuc from './AmThuc';
import KhamPha from './KhamPha';
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Khám Phá" component={KhamPha} />
        <Tab.Screen name="Ẩm Thực" component={AmThuc} />
        <Tab.Screen name="Thông Báo" component={ThongBao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Router;