import React from "react";
import { Text, View } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


import CustomDrawer from "./CustomDrawer";
import EmployeeStack from "../Stack/EmployeeStack";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15
          }
      }}
      >
        <Drawer.Screen name="Employee" component={EmployeeStack} 
          options={{
            drawerIcon: ({color})=> (
            <AntDesign name="menufold" size={22} color={color} />  
          )}}
        />
      </Drawer.Navigator>
  );
}

export default MyDrawer;
