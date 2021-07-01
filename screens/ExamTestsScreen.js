import React, {Component} from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import allTest from "../AllTest.json";

import HeaderComponent from "../components/HeaderComponent";
import TestItem from "../components/TestComponent/TestItem";


const style = StyleSheet.create({
  examTests:{
    width:"100%",
    height:"100%",
    backgroundColor:"#eeeeee",

  },
  listContainer:{
    width:"100%",
    marginTop:10,
    marginLeft:25,
    marginRight:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const testMoq=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

class ExamTestsScreen extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <View style={style.examTests}>
              <HeaderComponent/>
              <View style={{marginTop:20,width:"100%"}}/>
              <FlatList
                  columnWrapperStyle={{ marginLeft:25, marginRight:25, justifyContent: 'space-between'}}
                  data={testMoq}
                  numColumns={4}
                  renderItem={({ item, index }) => (<TestItem key={"testul"+index} navigation={this.props.navigation} item={item}/>)}
              />
              
            </View>
  }

}

export default ExamTestsScreen


