import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



export default function CategoriesScreen({ navigation }) {
  
  
  return (
    <View style={{ backgroundColor: '#6a51ae' }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}      
        color="#fff"
      />
    </View>
  );
}