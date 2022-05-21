import React from 'react';
import { Image } from "react-native";
import Home from './src/components/home';
import AddEntry from './src/components/addEntry';
import Timelines from './src/components/timelines';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/services/rootreducer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle : {backgroundColor:'#000'},
      headerShown:false
    }}>
      <Tab.Screen name="Home1" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle : {marginRight:60},
        tabBarIcon: ({focused}) => (focused ?  (<Image source={require("./assets/homefocused.png")} style={{marginRight:60}}  />): (<Image source={require("./assets/homeicon.png")} style={{marginRight:60}} />))
    }} />
      <Tab.Screen name="Timelines" component={Timelines}
      options={{
        tabBarLabel: 'Timelines',
        tabBarLabelPosition:'below-icon',
        tabBarLabelStyle : {marginLeft:60},
        tabBarIcon: ({focused}) => (focused ?  (<Image source={require("./assets/graphfocused.png")} style={{marginLeft:60}} />): (<Image source={require("./assets/graphunfocused.png")} style={{marginLeft:60}} />))
    }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="AddEntry" component={AddEntry} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
