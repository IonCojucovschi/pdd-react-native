import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import RenderHtml from 'react-native-render-html';


import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';
//import { penaltyHtmlResource } from "../html_resources/penaltyHtmlResource";

const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:10,
  },

});
const source = {
    html: "<h1>HEY </h1>"//penaltyHtmlResource
  };

class PenaltyDetails extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){
       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
      
        </View>
       )
   }
}
///style = {style.optionContainer}
export default PenaltyDetails;

// <RenderHtml 
// source = {source}
// />