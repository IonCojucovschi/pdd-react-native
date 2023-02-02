import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';



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


class Utils extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){
       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
                <View style={style.optionContainer}>
                    <HomeItemComponent navigation={this.props.navigation} pageLink={"ExamCenters"} count={11} name={"Rute de examinare"}/> 
                    <HomeItemComponent navigation={this.props.navigation} pageLink={"PenaltyDetails"} count={23} name={"Amenzi"}/> 
                </View>
        </View>
       )
   }
}

export default Utils;