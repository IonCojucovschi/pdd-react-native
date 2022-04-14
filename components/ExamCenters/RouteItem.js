import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable, FlatList, TouchableHighlight } from "react-native";


const style = StyleSheet.create({
   baseItem:{
       height:170,
       width:170,
       marginBottom:5,
       marginTop:5,
       borderRadius:20
   },
   containerItem:{
    height:160,
    width:160,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    //shadowRadius: 5,
    },
   imageStyle:{
    height:160,
    width:160,
    left:1,
    top:1,
    borderColor:"#cdcdcd",
    borderWidth:2,
    backgroundColor:"#fff",
    position:"absolute",
    borderRadius:20
    },
   textName:{
       fontSize:24,
       textAlign:"center",
       width:"100%",
       zIndex:2,
       elevation:2,
       fontWeight:"bold",
       color:"#fff",
   }
    
})

class  RouteItem extends Component  {
    constructor(props){
        super(props);
    }

    itemIsCliked=()=>{
        console.log("RouteItemClick: ",this.props)
        if(this.props.imageUrl){
            this.props.onItemClick(this.props.imageUrl);
        }
    }

   render(){ 
        return <View activeOpacity={0.6}
        style={style.baseItem}>
            <Pressable onPress={()=>this.itemIsCliked()}>
                <View style={style.containerItem}>
                    <Image
                            resizeMode="center"
                            style={style.imageStyle}
                            source={this.props.imageUrl}
                            />
                    <View style={{
                        backgroundColor:"#5ead70",
                        opacity:"0.6",
                        width:"100%",
                        height:"25%",
                        marginTop:"75%",
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20}}>
                        <Text style={style.textName}>{this.props.name}</Text>
                    </View>
                </View>   
            </Pressable>
        </View> 
    }
}
export default RouteItem;









