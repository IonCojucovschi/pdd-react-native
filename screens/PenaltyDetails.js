import React, { Component,useState,useEffect } from "react";
import {ScrollView, Text, StatusBar, Button, StyleSheet, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "react-navigation-tabs";


import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';
import HeaderPenaltiesComponent from '../components/Penalty/HeaderPenalties';
import PenaltyRow from '../components/Penalty/PenaltyRow';
import PenaltyRowWithPoints from '../components/Penalty/PenaltyRowWithPoints';
import PenaltyWthoutPoints from "../PenaltiesCART.json";
import PenaltyWithPoints from "../PenaltiesCDCR.json";

const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:10,
  },

});
//const Tab = createBottomTabNavigator()

class PenaltyDetails extends Component{
    constructor(props)
    {
        super(props)
        this.state ={
          CART:{
            width:"48%",
            padding:5, 
            backgroundColor:"#A0EAA2", 
            borderRadius:8,
            borderBottomColor:"#000"

          },
          CDCR:{
            width:"48%", 
            padding:5, 
            backgroundColor:"#dedede", 
            borderRadius:8,
            borderBottomColor:"#000"
          },
          showPenaltiesWithMoney:true
        }
    }

    onClickButton = (penaltyState)=>{
      var tempCDCR = this.state.CDCR;
      var tempCART = this.state.CART;
      var newState={};
      if(penaltyState)
      {
        newState.CART={
          width:"48%",
          padding:5, 
          backgroundColor:"#A0EAA2", 
          borderRadius:8,
          borderBottomColor:"#000"
        }
        newState.CDCR={
          width:"48%", 
          padding:5, 
          backgroundColor:"#dedede", 
          borderRadius:8,
          borderBottomColor:"#000"
        }

      }
      else{
        newState.CDCR={
          width:"48%",
          padding:5, 
          backgroundColor:"#A0EAA2", 
          borderRadius:8,
          borderBottomColor:"#000"
        }
        newState.CART={
          width:"48%", 
          padding:5, 
          backgroundColor:"#dedede", 
          borderRadius:8,
          borderBottomColor:"#000"
        }
      }
      newState.showPenaltiesWithMoney = penaltyState;
      this.setState(newState)
    }

    showPenaltiesWithMoney(){
        var penaltyList = PenaltyWthoutPoints.map((elm,index)=><PenaltyRow key={"pen_row"+index} source={elm}/>)
        return penaltyList;
    }
    
    showPenaltiesWithPoints(){
        var penaltyList1 = PenaltyWithPoints.map((elm,index)=><PenaltyRowWithPoints key={"pen_row_points"+index} source={elm}/>)
        return penaltyList1;
    }

   render(){
       return(
        <View style={style.containerHome}>
          <ScrollView>
                <HeaderComponent/>
                <HeaderPenaltiesComponent/>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
                  <TouchableHighlight underlayColor="#A1F4A3" onPress={()=> this.onClickButton(true)}
                    style={this.state.CART}
                  >
                    <Text style={{textAlign:"center"}}>Сontravenţii ce atentează la regimul din transporturi</Text>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor="#A1F4A3" onPress={()=> this.onClickButton(false)}
                    style={this.state.CDCR}
                  >
                    <Text style={{textAlign:"center"}}>Сontravenţii în domeniul circulaţiei rutiere</Text>
                  </TouchableHighlight>
                </View>
                {this.state.showPenaltiesWithMoney ?
                  <PenaltyRow key={"pen_rowHead"} isHeader={true} source={{article:"Art.",contravention:"Contraventii", value:"Amenda"}}/>
                  :<PenaltyRowWithPoints key={"pen_rowHead"} isHeader={true} source={{article:"Art.",contravention:"Contraventii", value:"Amenda", penaltyPoint:"Pun."}}/>
                }

                {this.state.showPenaltiesWithMoney ? 
                    this.showPenaltiesWithMoney()
                    :this.showPenaltiesWithPoints()
                }
          </ScrollView>
        </View>)
   }
}
export default PenaltyDetails;