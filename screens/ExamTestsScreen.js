import React, {Component} from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import allTest from "../AllTest.json";

import HeaderComponent from "../components/HeaderComponent";
import TestItem from "../components/TestComponent/TestItem";
import {TestContainer} from "../services/repositoryService";
import ChapterItemComponent from "../components/TestComponent/ChapterItem";

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

const testContainer = new TestContainer();
class ExamTestsScreen extends Component{
  constructor(props){
    super(props);

    console.log("Chapter List :", testContainer.Chapters())
  }

  render(){
    return <View style={style.examTests}>
              <HeaderComponent/>
              <View style={{marginTop:20,width:"100%"}}/>
              <FlatList
                  data={testContainer.Chapters()}
                  style={{ paddingLeft:25, paddingRight:25}}
                  keyExtractor={(item, index) => "chapter"+index.toString()}
                  numColumns={1}
                  renderItem={({ item, index }) => (<ChapterItemComponent 
                                                      key={"testul"+index}
                                                      navigation={this.props.navigation} 
                                                      pageLink={"Tests"} 
                                                      chapter = {item.Chapter}
                                                      name={item.Chapter.toUpperCase()}
                                                      item={item}
                                                      />)}
              />
            </View>
  }

}

export default ExamTestsScreen