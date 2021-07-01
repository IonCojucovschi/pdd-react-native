import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';

const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:10,
  },

});

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.containerHome}>
        <HeaderComponent/>
        <View style={style.optionContainer}>
          <HomeItemComponent navigation={navigation} pageLink={"Tests"} count={20} name={"Categoria AB"}/> 
          <HomeItemComponent count={11} name={"Categoria C"}/> 
          <HomeItemComponent count={8} name={"Categoria D"}/> 
          <HomeItemComponent count={48} name={"Categoria E"}/> 
          <HomeItemComponent count={50} name={"Statistica"}/> 

        </View>
    </View>
  );
}