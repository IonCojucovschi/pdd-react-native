import React from "react";
import { FlatList, View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";

const testElements=[
  {
    id:1,
    name:"Testul 1",
    quantity:1,
    status:"onprogres"
  },
  {
    id:2,
    name:"Testul 2",
    quantity:7,
    status:"onprogres"
  },
  {
    id:3,
    name:"Testul 3",
    quantity:123,
    status:"onprogres"
  },
  {
    id:4,
    name:"Testul 4",
    quantity:14,
    status:"onprogres"
  },
  {
    id:5,
    name:"Testul 5",
    quantity:23,
    status:"onprogres"
  },
  {
    id:6,
    name:"Testul 6",
    quantity:14,
    status:"onprogres"
  },
  {
    id:7,
    name:"Testul 7",
    quantity:12,
    status:"onprogres"
  },
  {
    id:8,
    name:"Testul 8",
    quantity:8,
    status:"onprogres"
  },
  {
    id:9,
    name:"Testul 9",
    quantity:19,
    status:"onprogres"
  },
  {
    id:10,
    name:"Testul 10",
    quantity:11,
    status:"onprogres"
  },
  {
    id:11,
    name:"Testul 11",
    quantity:10,
    status:"onprogres"
  }
]

const styles = StyleSheet.create({
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
      flexDirection: 'column',
      borderRadius:4,
      justifyContent:"center",
      margin: 2
    }
  })

const TestList = ({tests, navigation}) => {

    const goToSenectedTest=(test)=>{
      navigation.navigate('Home', { id: test});
    }

    return <View style={styles.container}>
    <FlatList
        data={testElements}
        style={{backgroundColor:"#dedede"}}
        numColumns={3}
        renderItem={({ item }) => (<TouchableHighlight onPress={goToSenectedTest(item.id)}>
              <View style={styles.itemList}>
                <View style={{alignContent:"center"}}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              </View>
          </TouchableHighlight>)}
    />
</View>
}

export default TestList;



