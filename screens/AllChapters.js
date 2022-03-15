import React, {Component} from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import allTest from "../AllTest.json";

import HeaderComponent from "../components/HeaderComponent";
import TestItem from "../components/TestComponent/TestItem";
import {TestContainer} from "../services/repositoryService";

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

// const testMoq=[{Id:1, Tema:"[1.1] Dispoziții generale. Noțiuni şi termeni de bază"},
// {Id:2, Tema:"[1.2] Conducătorii de vehicule şi obligațiile acestora"},
// ];
const testContainer = new TestContainer();

class AllChaptersScreen extends Component{
  constructor(props){
    super(props);

    //console.log("Test some :", testContainer.GetAllThemes())
  }

  render(){
    return <View style={style.examTests}>
              <HeaderComponent/>
              <View style={{marginTop:20,width:"100%"}}/>
              <FlatList
                  columnWrapperStyle={{ marginLeft:25, marginRight:25, justifyContent: 'space-between'}}
                  data={testContainer.GetAllThemes()}
                  numColumns={4}
                  keyExtractor={(item, index) => "allchapters"+index.toString()}
                  renderItem={({ item, index }) => (<TestItem key={"testul"+index} navigation={this.props.navigation} item={item}/>)}
              />
            </View>
  }

}

export default AllChaptersScreen


