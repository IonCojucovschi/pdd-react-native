import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AllTestTemp  from '../AllTest.json';

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


class ExamCenters extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){
/// "ImageUri": "/capitolul1/c2f71d79-16f6-4d68-8ee9-802b0080f17d.png",
    var allImages=[];
    AllTestTemp.forEach(el=>{
      if(el.ImageUri!=null){
        allImages[el.ImageUri] = 'require("../img'+ el.ImageUri + '")';
      }
      
    }
    );
    console.log("ALL IMAGES: ", allImages);
    
       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
                <View style={style.optionContainer}>
                    <HomeItemComponent count={11} name={"Chisinau"}/> 
                    <HomeItemComponent count={11} name={"Balti"}/> 
                    <HomeItemComponent count={11} name={"Cahul"}/> 
                    <HomeItemComponent count={11} name={"Comrat"}/> 
                    <HomeItemComponent count={11} name={"Taraclia"}/> 
                    <HomeItemComponent count={11} name={"Floresti"}/> 
                    <HomeItemComponent count={11} name={"Orhei"}/> 
                    <HomeItemComponent count={23} name={"Hancesti"}/> 
                </View>
        </View>
       )
   }
}

export default ExamCenters;