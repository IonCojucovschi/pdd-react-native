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


class ExamCenters extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){

       return(
        <ScrollView style={style.containerHome}>
                <StatusBar hidden = {true}/>
                <HeaderComponent/>
                <View style={style.optionContainer}>
                    <HomeItemComponent count={8} navigation={this.props.navigation} pageLink={"ExamCentersRoutes"} name={"Chisinau"} params={{name:"chisinau"}}/> 
                    <HomeItemComponent count={13} navigation={this.props.navigation} pageLink={"ExamCentersRoutes"} name={"Balti"} params={{name:"balti"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Cahul"} pageLink={"ExamCentersRoutes"} params={{name:"cahul"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Causeni"} pageLink={"ExamCentersRoutes"} params={{name:"causeni"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Comrat"} pageLink={"ExamCentersRoutes"} params={{name:"comrat"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Criuleni"} pageLink={"ExamCentersRoutes"} params={{name:"criuleni"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Edinet"} pageLink={"ExamCentersRoutes"} params={{name:"edinet"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Hincesti"} pageLink={"ExamCentersRoutes"} params={{name:"hincesti"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Ocnita"} pageLink={"ExamCentersRoutes"} params={{name:"ocnita"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Orhei"} pageLink={"ExamCentersRoutes"} params={{name:"orhei"}}/> 
                    <HomeItemComponent count={3} navigation={this.props.navigation} name={"Soroca"} pageLink={"ExamCentersRoutes"} params={{name:"soroca"}}/> 
                    <HomeItemComponent count={5} navigation={this.props.navigation} name={"Ungheni"} pageLink={"ExamCentersRoutes"} params={{name:"ungheni"}}/> 
                </View>
        </ScrollView>
       )
   }
}

export default ExamCenters;