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
      alignSelf:"center",
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
      alignItems:"space-between",
      margin: 5
    }
})

class  HorizontalTestList extends Component  {
    constructor(props){
        super(props);
        console.log("Tests: ",this.props);
    }
    ///console.log("All Tests: ",state);

    goToSenectedTest=(test)=>{
      //navigation.navigate('Home', { id: test});
      this.props.onTestSelecting(test);
      ///console.log("Selected test is ", test);
    }

   render(){ 
        return <View style={stylesList.container}>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item1)=>"elm0"+item1.Id}
                    data={ this.props.allTests }
                    style={{backgroundColor:"#eee"}}
                    renderItem={({ item, index }) => (<TouchableHighlight 
                    style={
                        {
                        color:'#cdcdcd',
                        backgroundColor: (item.backgroundColor ? item.backgroundColor :'#ddd'),///'#06ba1e',
                        padding:5,
                        width:80,
                        height:50,
                        flex:1,
                        borderRadius:4,
                        alignItems:"space-between",
                        margin: 5
                        }
                    } 
                    onPress={()=>this.goToSenectedTest(item.Id)}>
                        <View>
                            <View >
                            <Text style={stylesList.textStyle}>{"Test " + index }</Text>
                            </View>
                        </View>
                        </TouchableHighlight>)}
                    />
            </View>
    }
}

export default HorizontalTestList;