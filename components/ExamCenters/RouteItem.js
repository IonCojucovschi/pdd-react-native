import React, { Component,useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";
import ImageModal from 'react-native-image-modal';


const style = StyleSheet.create({
   baseItem:{
       height:160,
       width:160,
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
    shadowRadius: 5,
    },
   imageStyle:{
    height:160,
    width:160,
    borderColor:"#cdcdcd",
    borderWidth:2,
    backgroundColor:"#cdcdcd",
    borderRadius:20,
    position:"absolute",
    opacity: .7,
    },
   textName:{
       fontSize:24,
       textAlign:"center",
       width:"100%",
       zIndex:2,
       elevation:2,
       fontWeight:"bold",
       marginTop:"80%",
       color:"#000",
       opacity:1
   }
    
})

class  RouteItem extends Component  {
    constructor(props){
        super(props);
    }

    goToPage=()=>{
        console.log("Image Is selected!!!! ",this.props);
        ///this.props.navigation.navigate(this.props.pageLink, this.props.params);
    }

   render(){ 
        return <TouchableHighlight activeOpacity={0.6}
        underlayColor="#ffffff" style={style.baseItem} onPress={()=>this.goToPage()}>
            <View style={style.containerItem}>
               
                <ImageModal
                    resizeMode="center"
                    style={style.imageStyle}
                    source={this.props.imageUrl}
                />


                <Text style={style.textName}>{this.props.name}</Text>
            </View>            
        </TouchableHighlight> 

    }
}

export default RouteItem;



// <Image
//                     style={style.imageStyle}
//                     source={this.props.imageUrl}
//                 />



// <ImageModal
// style={style.imageStyle}
// resizeMode="contain"
// imageBackgroundColor="#000000"
// source={{
//         uri: this.props.imageUrl,
//     }}
// />







