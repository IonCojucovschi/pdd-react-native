import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
   

  element:{
    backgroundColor:"#ffffff",
    borderRadius:30,
    height:70,
    marginTop:28,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:15,
    shadowColor: '#635e63',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 7,

  },
  container:{
    alignItems:"center",
    flexDirection:"row",
  },
  elementsCounter:{
    fontWeight:"bold",
    fontSize:24,
    color:"#AEEB7E",
  },
  ItemDescription:{
    marginLeft:20,
    fontSize:24,
    fontWeight:"bold",
  }

    
})

class  HomeItemComponent extends Component  {
    constructor(props){
        super(props);
    }

    goToPage=()=>{
        ///console.log("Pressed : ",this.props);
        this.props.navigation.navigate(this.props.pageLink, this.props);
    }

   render(){ 
        return <TouchableHighlight activeOpacity={0.6}
        underlayColor="#ffffff" style={style.element} onPress={()=>this.goToPage()}>
            <View style={style.container}>
                <View style={{width:40}}>
                <Text style={style.elementsCounter}>{this.props.count}</Text>
                </View> 
                <View style={{height:70,width:4,backgroundColor:"#eeeeee"}}/>
                <Text style={style.ItemDescription}>{this.props.name}</Text>
            </View>            
        </TouchableHighlight> 

    }
}

export default HomeItemComponent;




