import React, { Component,useState,useEffect } from "react";
import { AppRegistry, View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";

const stylesList = StyleSheet.create({
    container: {
      //flex: 1,
      //paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    textStyle:{
      fontSize:15,
      color:"#000000",
      textAlign:"center",
      alignSelf:"center",
      fontWeight:"bold",
      width:"100%",
      height:"100%"
      //backgroundColor:"#d1c541"
    },
    itemList:{
      color:'#cdcdcd',
      backgroundColor:'#06ba1e',
      padding:5,
      width:80,
      height:50,
      flex:1,
      borderRadius:4,
      //alignItems:"space-between",
      margin: 5
    }
})

class  HorizontalTestList extends Component  {
    constructor(props){
        super(props);
        this.state={currentTest:null};
        //console.log("Tests: ",this.props);
    }
    ///console.log("All Tests: ",state);

    goToSenectedTest=(test)=>{
      //navigation.navigate('Home', { id: test});
      this.props.onTestSelecting(test);
      let curentTest=this.props.allTests.findIndex((el)=>el.Id==test);
      //console.log("Selected test is ", curentTest);

      if(curentTest>0){
          this.setState({currentTest:curentTest});
          this.scrollToItem(curentTest);
      }
    }

    scrollToItem = (index) => {
        
        this.flatListRef.scrollToIndex({animated: true, index: "" + index});
      }

    componentDidUpdate(){
      console.log("this.props.curentRespondedTest : ",this.props.curentRespondedTest);
      if(this.props.curentRespondedTest)
      {
        this.goToNextTest(this.props.curentRespondedTest.Id);
      }
    }

    goToNextTest=(test)=>{
      //this.props.onTestSelecting(test);
      let curentTest=this.props.allTests.findIndex((el)=>el.Id==test);

      if(curentTest>0){
          this.scrollToItem(curentTest);
      }
    }

   render(){ 
        return <View style={stylesList.container}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item1)=>"elm0"+item1.Id}
                    ref={(ref) => { this.flatListRef = ref; }}
                    data={ this.props.allTests }
                    style={{backgroundColor:"#eee"}}
                    renderItem={({ item, index }) => (<TouchableHighlight 
                      underlayColor="#ffffff" 
                      style={
                        {
                        color:'#cdcdcd',
                        backgroundColor: (item.backgroundColor ? item.backgroundColor :'#ddd'),///'#06ba1e',
                        padding:5,
                        width:60,
                        height:48,
                        alignItems:"center",
                        flex:1,
                        borderRadius:4,
                        alignItems:"space-between",
                        margin: 5
                        }
                    } 
                    onPress={()=>this.goToSenectedTest(item.Id)}>
                            <Text style={stylesList.textStyle}>{"Biletul \n" + (index+1) }</Text>
                        </TouchableHighlight>)}
                    />
            </View>
    }
}

export default HorizontalTestList;