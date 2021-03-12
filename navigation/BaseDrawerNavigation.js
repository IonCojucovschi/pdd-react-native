import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


///import screens
import CategoriesScreen from '../pages/Categories.js'
import HomeScreen from '../pages/Home.js'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} options={{title:"Categorii"}} />
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{title:"Acasa"}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
