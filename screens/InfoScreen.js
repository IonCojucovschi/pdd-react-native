import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet,ScrollView, View } from 'react-native';
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
  

const InfoScreen = ({navigation}) =>{

const goToComments=()=>{
    navigation.navigate("Comments")
}

return(
    <ScrollView style={style.containerHome}>
            <StatusBar hidden = {true}/>
            <HeaderComponent/>
            <View style={style.optionContainer}>
                <Text>Versiunea curenta de aplicatie: 1.0</Text>  
            </View>
    </ScrollView>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default InfoScreen

