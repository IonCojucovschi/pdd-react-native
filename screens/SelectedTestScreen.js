import React, { Component,useState,useEffect } from "react";
import { AppRegistry, View, Text, StyleSheet,ScrollView , Image, Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import AllTests from "../AllTest.json";
import HorizontalTestList from '../components/TestComponent/HorizontalTestList';
import HeaderComponent from '../components/HeaderComponent';
import AnswerItem from '../components/TestComponent/AnswerItem';

//import {AllImages} from '../allImages';

const AllImages = {

  "/capitolul1/a0c358ff-ba19-4f16-8ff8-3f2857bdbfb7.jpg": require("../img/capitolul1/a0c358ff-ba19-4f16-8ff8-3f2857bdbfb7.jpg"),
  "/capitolul1/b6d9915b-adb9-4218-a912-436e5a9d26cb.png": require("../img/capitolul1/b6d9915b-adb9-4218-a912-436e5a9d26cb.png"),
  "/capitolul1/c2f71d79-16f6-4d68-8ee9-802b0080f17d.png": require("../img/capitolul1/c2f71d79-16f6-4d68-8ee9-802b0080f17d.png"),
  "/capitolul1/e8e87b13-fcf1-4e4a-a579-b2c90473f88e.jpg": require("../img/capitolul1/e8e87b13-fcf1-4e4a-a579-b2c90473f88e.jpg"),
  "/capitolul1/ec589181-2a66-48c5-b154-6f6a662e92cf.png": require("../img/capitolul1/ec589181-2a66-48c5-b154-6f6a662e92cf.png"),
  "/capitolul1/edf4582e-d13e-4c91-ab23-410091d66829.png": require("../img/capitolul1/edf4582e-d13e-4c91-ab23-410091d66829.png")
};

const style = StyleSheet.create({
  testContainer:{
    height:"100%",
    width:"100%",
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
  }

})

class SelectedTestScreen extends Component {

    constructor(props){
      super(props);
      let selectedTest=this.props.navigation.getParam("chapter");
      
      console.log(" Selected Test Value: ",selectedTest);

      let allTest = AllTests.filter(elm=>elm.Thema==selectedTest.Tema); 

      ///let test = AllTests[0]; 
      ///allTest.Responses = allTest.Responses.map(itm=>{itm.backgroundColor="#ccc"; return itm;}); 
      this.state={  test:allTest[0], allTests:allTest  };


    }

    onTestSelecting=(test)=>{

      console.log("Test selected: ",test);
      let tempState=this.state;
      let selectedTest = this.state.allTests.find(elm=>elm.Id==test);
      tempState.test = selectedTest ? selectedTest:{ Responses:[]};
      this.setState(tempState);
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
      
      console.log("Rs clicked1 :",tempTest);
      ///set next test background color 
      if(!tempTest.test.backgroundColor)
        tempTest.test.backgroundColor="#75ebd7";
      
      this.setState(tempTest);
    }

    renderComment=()=>{

      console.log("this.state.test.backgroundColor",this.state.test.backgroundColor);
    
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
    return (<ScrollView  style={style.testContainer}>
              <HeaderComponent/>
              <View style={{ marginRight:20, marginLeft:20, marginTop:15}}>
                 <HorizontalTestList allTests={this.state.allTests} onTestSelecting={this.onTestSelecting} />
              </View>
              <View style={{ marginRight:5, marginLeft:23 }}>
                <Text
                  style={{fontWeight:"bold", fontSize:21 }}
                >{this.state.test.Query}
                </Text>
              </View>
              <View style={{ marginRight:23, marginLeft:23, marginTop:10}}>
                {this.state.test.ImageUri ?
                  <Image style={{height:200,width:"100%", backgroundColor:'#ccc', alignContent:"center"}}
                  source={AllImages[this.state.test.ImageUri]}
                  //source={require("../img/capitolul1/3248c020-5840-47da-a8c7-4ce70433c4b6.png")}
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
          </ScrollView>)
   }      
}
///onPress={()=>{}}
///source={require("../img"+ this.state.test.ImageUri)}
export default SelectedTestScreen


/////source={require("../img"+ this.state.test.ImageUri)}