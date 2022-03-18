import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';

import AllTestTemp  from '../AllTest.json';


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

export default function HomeScreen({ navigation }) {

  /// "ImageUri": "/capitolul1/c2f71d79-16f6-4d68-8ee9-802b0080f17d.png",
  var allImages=[];
  AllTestTemp.forEach(el=>{
    if(el.ImageUri!=null){
      allImages[el.ImageUri] = 'require("../img'+ el.ImageUri + '")';
    }
    
  }
  );
  //console.log("ALL IMAGES: ", allImages);
  
  return (
    <View style={style.containerHome}>
        <StatusBar hidden={true} />
        <HeaderComponent/>
        <View style={style.optionContainer}>
          <HomeItemComponent navigation={navigation} pageLink={"Tests"} count={20} name={"Categoria AB"}/> 

          <HomeItemComponent navigation={navigation} pageLink={"Utils"} count={2} name={"Utile"}/> 
        </View>
    </View>
  );
}

{/* <HomeItemComponent count={11} name={"Categoria C"}/> 
<HomeItemComponent count={8} name={"Categoria D"}/>
<HomeItemComponent count={50} name={"Statistica"}/>  */}
