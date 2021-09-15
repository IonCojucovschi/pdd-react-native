import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';
import RouteItem from '../components/ExamCenters/RouteItem';
import routesResource from "../AllRoutes.json";




const RoutesImage = {
    "R1_Chisinau.jpg":require("../img/Routes/R1_Chisinau.jpg"),
    "R2_Chisinau.jpg":require("../img/Routes/R2_Chisinau.jpg"),
    "R3_Chisinau.jpg":require("../img/Routes/R3_Chisinau.jpg"),
    "R4_Chisinau.jpg":require("../img/Routes/R4_Chisinau.jpg"),
    "R5_Chisinau.jpg":require("../img/Routes/R5_Chisinau.jpg"),
    "R6_Chisinau.jpg":require("../img/Routes/R6_Chisinau.jpg"),
    "R7_Chisinau.jpg":require("../img/Routes/R7_Chisinau.jpg"),
    "R8_Chisinau.jpg":require("../img/Routes/R8_Chisinau.jpg"),
};


const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginTop:10,
    height:"100%",
    width:"100%",
  },

});


class ExamCentersRoutes extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){

       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
                <View style={style.optionContainer}>
                    <FlatList
                    columnWrapperStyle={{paddingLeft:25, paddingRight:25,width:"100%", paddingBottom:50, justifyContent: 'space-between'}}
                    data={routesResource.chisinau}
                    numColumns={2}
                    showsVerticalScrollIndicator ={false}
                    renderItem={({ item, index }) => (<RouteItem 
                        key={"testul"+index} 
                        imageUrl={RoutesImage[item.imageUrl]} 
                        navigation={this.props.navigation} 
                        name={item.name} 
                        item={item}/>)}
                />
                </View>
        </View>
       )
   }
}

export default ExamCentersRoutes;