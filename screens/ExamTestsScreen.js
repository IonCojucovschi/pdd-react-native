import React, {Component} from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json"
import allTest from "../AllTest.json";



const stylesList = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    textStyle:{
      fontSize:20,
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

const TestList = ({navigation}) => {

    const goToSenectedTest=(test)=>{
      console.log("Test click: ", test);  
      navigation.navigate('SelectedTest', { Id: test });
    }
    ////style={{alignContent:"center"}}
    return <View style={stylesList.container}>
    <FlatList
        data={allTest}
        style={{backgroundColor:"#dedede"}}
        numColumns={3}
        renderItem={({ item, index }) => (<TouchableHighlight style={stylesList.itemList} onPress={()=>goToSenectedTest(item.ChapterKey)}>
              <View>
                <View >
                  <Text style={stylesList.textStyle}>{"Testul "+ (index+1)}</Text>
                </View>
              </View>
          </TouchableHighlight>)}
    />
</View>
}




const ExamTestsScreen = ({navigation}) =>{
    ///<Button title="Menu Lateral"  onPress={toggleMenu} />
            
    return  (<View styles={styles.container}>
                <TestList navigation={navigation}/>
            </View>)
}
    

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default ExamTestsScreen


