import React, { Component,useState,useEffect } from "react";
import { AppRegistry, View, Text, StyleSheet,ScrollView , Image, Dimensions, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import AllTests from "../AllTest.json";
import HorizontalTestList from '../components/TestComponent/HorizontalTestList';
import HeaderComponent from '../components/HeaderComponent';
import AnswerItem from '../components/TestComponent/AnswerItem';

import {AllImages } from '../allImages';

const style = StyleSheet.create({
  testContainer:{
    height:"100%",
    width:"100%",
    position:"relative",
    paddingBottom:15,
    backgroundColor:"#eeeeee",
  },
  comentStyle:{
    margin:23,
  },
  commentTextStyle:{
    padding:10,
    borderColor:"#06c20f",
    borderRadius:20,
    borderWidth:1,
    fontSize:15,
    ///height:"100%",
    width:"100%",
    fontWeight:"bold",
    shadowColor: '#635e63',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 7,
  }

})

class SelectedTestScreen extends Component {

    constructor(props){
      super(props);
      let selectedTest=this.props.navigation.getParam("chapter");

      let allTest = AllTests.filter(elm=>elm.Thema==selectedTest.Tema); 

      ///let test = AllTests[0]; 
      ///allTest.Responses = allTest.Responses.map(itm=>{itm.backgroundColor="#ccc"; return itm;}); 
      this.state={  test:allTest[0], allTests:allTest  };


    }
    windowWidth = Dimensions.get('window').width-80;
    windowHeight = Dimensions.get('window').height-80;

    onTestSelecting=(test)=>{
      let tempState=this.state;
      let selectedTest = this.state.allTests.find(elm=>elm.Id==test);
      tempState.test = selectedTest ? selectedTest:{ Responses:[]};
      this.setState(tempState);
    }

    nextTestSelecting=()=>{
      let tempState=this.state;
      ///console.log("Next Text :", tempState)
      var currentTestKey = this.state.allTests.map(ix=>ix.Id).indexOf(tempState.test.Id)
      ///console.log("Curent Key :",currentTestKey);
      var nextTest = this.state.allTests[currentTestKey+1]
      if(nextTest){
        tempState.test = nextTest;
        this.setState(tempState);
      }
    }

    responseClick=(rs)=>{
      console.log("Yoooho!!!!!");
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

      if(rs.IsRight)
        tempTest.test = nextTest ? nextTest :{ Responses:[]};
      
      if(!tempTest.test.backgroundColor)
        tempTest.test.backgroundColor="#75ebd7";
      
      this.setState(tempTest);
    }

    renderComment=()=>{

      ///console.log("this.state.test.backgroundColor",this.state.test.backgroundColor);
    
      var comment = (this.state.test.backgroundColor && this.state.test.backgroundColor != "#75ebd7") ? (<View style={style.comentStyle}>
        <Text style={{ fontSize:15, fontWeight:"bold", marginBottom:10,}}>
          Descriere:
        </Text>
        <Text style={style.commentTextStyle}>
            {this.state.test.Comment}
        </Text>
      </View>) : null;
  
      return comment;
    }


   render(){
      return (<View style={{position:"relative"}}>
            <ScrollView  style={style.testContainer}>
              <HeaderComponent/>
              <View style={{ marginRight:20, marginLeft:20, marginTop:15}}>
                 <HorizontalTestList allTests={this.state.allTests} onTestSelecting={this.onTestSelecting} curentRespondedTest={this.state.test}/>
              </View>
              <View style={{ marginRight:5, marginLeft:23 }}>
                <Text
                  style={{fontWeight:"bold", fontSize:21 }}
                >{this.state.test.Query}
                </Text>
              </View>
              <View style={{ marginRight:23, marginLeft:23, marginTop:10}}>
                {this.state.test.ImageUri ?
                  <Image style={{height:200,width:"100%", backgroundColor:'#ccc', alignContent:"center", resizeMode:"cover"}}
                  source={AllImages[this.state.test.ImageUri.replace(" ","")]}
                  />:null
                }
              </View>
              <View style={{
                 width:"100%",
                 paddingLeft:20,
                 paddingRight:20,
                 alignContent:'space-between'}}>
                {this.state.test.Responses.map((el,key)=>
                   <AnswerItem 
                    key={"str"+el.Id}
                    element={el}
                    colorValue={el.backgroundColor ? el.backgroundColor :"#fff" } 
                    clickToRespond={this.responseClick}
                    answerValue={el.Response}
                    answerNumber = {key+1} />
                  )}
              </View>
              {this.renderComment()}
            </ScrollView>
              {(this.state.test.backgroundColor && this.state.test.backgroundColor != "#75ebd7") ? 
                  <View style={{
                    height:60,
                    width:60,
                    borderRadius:30,
                    position:"absolute",
                    zIndex:10,
                    elevation:10,
                    marginLeft:this.windowWidth,
                    marginTop:this.windowHeight,
                    
                    textAlign:"center",
                    alignContent:"center",
                    backgroundColor:"#06c20f"
                  }}>
                    <TouchableHighlight underlayColor="#A1F4A3" style={{ height:60, width:60, borderRadius:30,}} onPress={()=>this.nextTestSelecting()}>
                      <Text style={{fontSize:30, textAlign:"center",marginLeft:9, marginTop:9, color:"#cdcdcd"}}>{">"}</Text>
                    </TouchableHighlight>
                  </View>
              : null
              }
          </View>)
   }      
}
export default SelectedTestScreen