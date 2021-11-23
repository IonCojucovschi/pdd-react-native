import React, { Component,useState,useEffect } from "react";
import {Animated, View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

import {TestContainer} from "../../services/repositoryService";
const style = StyleSheet.create({
   

  element:{
    backgroundColor:"#ffffff",
    borderRadius:30,
    marginTop:28,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:15,
    shadowColor: '#635e63',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 7,
  },
  container:{
    height:70,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  elementsCounter:{
    width:30,
    height:30,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    color:"#AEEB7E",
    borderColor:"#AEEB7E",
    borderRadius:15,
    borderWidth:1,
  },
  ItemDescription:{
    width:200,
    marginLeft:20,
    fontSize:24,
    fontWeight:"bold",
  }

    
});

var testContainer = new TestContainer();

class  ChapterItemComponent extends Component  {
    constructor(props){
        super(props);
        this.state= {
          isOpenned:false,
          elementsCounter: {
            width:30,
            height:30,
            textAlign:"center",
            fontWeight:"bold",
            fontSize:18,
            color:"#AEEB7E",
            borderColor:"#AEEB7E",
            borderRadius:15,
            borderWidth:1,
            transform: [{ rotate: "0deg" }]
          }
        };
    }

    goToPage=(params)=>{
        //console.log("Pressed : ",this.state);
        this.props.navigation.navigate("SelectedTest", {chapter:params});
    }
   
    showDetails=()=>{
      console.log("Pressed : ",this.state);
      //this.props.navigation.navigate(this.props.pageLink, this.props.params);
      let elementsCounterTemp = this.state.elementsCounter;
      if(this.state.isOpenned)
      {
        elementsCounterTemp.transform = [{ rotate: "0deg" }];
        this.setState({isOpenned:false, elementsCounter:elementsCounterTemp});
      }else{
        elementsCounterTemp.transform = [{ rotate: "90deg" }];
        this.setState({isOpenned:true, elementsCounter:elementsCounterTemp});
      }
    }


    generateAllThemes(){

      let key = this.props.chapter;
      if(key){
        let allThemes = testContainer.GetThemesByChapterId(key);
        let listOfAllChapter = allThemes.map((elm,key)=>
              <View key = {"themaUniqId"+ key} style = {
                    {
                      flexDirection:"row",
                      width:"85%",
                      height: 65,
                      margin:10,
                      justifyContent: "space-between",
                    }}>
                  <Text style = {{width:'80%'}}>{elm.Tema}</Text>
                  <TouchableHighlight onPress = {()=>this.goToPage(elm)}>
                    <Text style={style.elementsCounter}>{">"}</Text>
                  </TouchableHighlight>
              </View>
          );
        return listOfAllChapter;
      }
      return null;
    }


   render(){ 
        return <View activeOpacity={0.6}
        underlayColor="#ffffff" style={style.element} >
            <View style={{width:"100%"}}>
              <TouchableHighlight underlayColor="#ffffff" style={{ backgroundColor:"#ffffff", width:"85%", marginLeft:10 }}  onPress ={()=>this.showDetails()} >
                  <View style={style.container}>
                        <Text style={style.ItemDescription}>{this.props.name}</Text>
                        <View>
                          <Animated.Text style={this.state.elementsCounter}>{">"}</Animated.Text>
                        </View> 
                    </View>
              </TouchableHighlight>
              { this.state.isOpenned ? this.generateAllThemes() : null }
            </View>
        </View> 

    }
}

export default ChapterItemComponent;




