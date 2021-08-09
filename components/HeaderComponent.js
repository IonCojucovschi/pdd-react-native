import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

const stylesList = StyleSheet.create({
    header: {
      //flex: 1,
      paddingTop:20,
      backgroundColor:"#eeeeee"
      
      //paddingTop: 22,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginLeft:26,
        letterSpacing:-2,
        //fontFamily:"RussoOne-Regular"
    }
    
})

class  HeaderComponent extends Component  {
    constructor(props){
        super(props);
    }

   render(){ 
        return <View style={stylesList.header}>
                    <Text style={stylesList.title}>PDD-MD</Text>
                </View>
    }
}

export default HeaderComponent;