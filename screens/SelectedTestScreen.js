import React, { Component,useState,useEffect } from "react";
import { AppRegistry, View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import AllTests from "../AllTest.json";
import HorizontalTestList from '../components/TestComponent/HorizontalTestList';


class SelectedTestScreen extends Component {

    constructor(props){
      super(props);
      let allTest = AllTests.filter(elm=>elm.ChapterKey=="chapter1"); 


      ///let test = AllTests[0]; 
      ///allTest.Responses = allTest.Responses.map(itm=>{itm.backgroundColor="#ccc"; return itm;}); 
      this.state={  test:allTest[0], allTests:allTest  };


    }

    responseClick=(rs)=>{
      let tempTest=this.state;

      tempTest.test.Responses = this.state.test.Responses.map((el)=>{
        el.backgroundColor="#f22416";
        if(el.IsRight)  
          el.backgroundColor="#06c20f";

        return el;  
      });
      tempTest.test.backgroundColor="#f22416";
      if(rs.IsRight){
        tempTest.test.backgroundColor="#06c20f";
      }
      //select test wich
      let nextTest = tempTest.allTests.find(e=>!e.backgroundColor);
      
      tempTest.allTests=tempTest.allTests.map(elm=>{
        if(rs.IsRight && elm.Id==tempTest.test.Id)
          return tempTest.test;
        else
          return elm; 
      });
      tempTest.test = nextTest ? nextTest :{ Responses:[]};
      console.log("Rs clicked1 :",tempTest);
      
      
      
      this.setState(tempTest);
      //setUpdatedValues(tempTest);
    }
   render(){
    return (<View styles={{ flex:1, height:'800', flexDirection:'column', backgroundColor:"#008000"}}>
              <View style={{flex:1}}>
                 <HorizontalTestList allTests={this.state.allTests} />
              </View>
              <View style={{flex:3}}>
                {this.state.test.ImageUri ?
                  <Image style={{height:200,width:null, flex:1, backgroundColor:'#ccc', alignContent:"center"}}
                      source={require("../img"+ this.state.test.ImageUri)}
                  />:null
                }
              </View>
              <View style={{flex:6, alignContent:'space-between'}}>
                {this.state.test.Responses.map(el=>
                   <View key={"str"+el.Id} style={{margin:10}}>
                     <Button
                      onPress={()=>this.responseClick(el)}
                      color={el.backgroundColor ? el.backgroundColor :"#ccc" }
                      title={el.Response}
                      margin="5"
                     />
                   </View>)}
              </View>

          </View>)
   }      
}
    

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        padding:5,
        backgroundColor:'#000',
        flexWrap:'wrap',
        //alignItems:"center",
        //justifyContent:"center"
    }
})

export default SelectedTestScreen


