import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
   

  element:{
    backgroundColor:"#ffffff",
    borderRadius:30,
    //height:"auto",
    minHeight:50,
    //maxHeight:100,
    width:"100%",
    marginTop:28,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:15,

  },
  container:{
    alignItems:"center",
    width:"100%",
    height:"100%",
    flexDirection:"row",
  },
  elementsCounter:{
    fontWeight:"bold",
    fontSize:20,
    color:"#AEEB7E",
    width:"100%",
    textAlign: "center",
  },
  ItemDescription:{
    padding:10,
    fontSize:15,
    //height:"100%",
    width:"100%",
    fontWeight:"bold",
  }

    
})

class  AnswerItemComponent extends Component  {
    constructor(props){
        super(props);
    }

    elementIsClicked=()=>{
        console.log("Pressed : ",this.props);
        this.props.clickToRespond(this.props.element);
    }
     
   render(){ 
        return <TouchableHighlight activeOpacity={0.6}
        underlayColor="#ffffff" style={[style.element,{backgroundColor:this.props.colorValue}] } onPress={()=>this.elementIsClicked()}>
            <View style={style.container}>
                <View style={{width:25}}>
                    <Text style={style.elementsCounter}>{this.props.answerNumber}</Text>
                </View> 
                <View style={{height:"100%", minHeight:50, width:4, backgroundColor:"#eeeeee"}}/>
                <View style={{height:"auto",flex:3}}>
                  <Text style={style.ItemDescription}>{this.props.answerValue}</Text>
                </View>
            </View>            
        </TouchableHighlight> 

    }
}

export default AnswerItemComponent;




