import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
   
    
})

class  RouteItem extends Component  {
    constructor(props){
        super(props);
    }

    goToPage=()=>{
        //console.log("Pressed : ",this.props);
        this.props.navigation.navigate(this.props.pageLink, this.props.params);
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

export default RouteItem;




