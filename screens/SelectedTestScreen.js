import React from "react";
import { AppRegistry, View, Text, StyleSheet, Image, Button, FlatList, TouchableHighlight } from "react-native";
import testResources from "../components/testscreen/testList.json";
import AllTests from "../AllTest.json";





const stylesList = StyleSheet.create({
    container: {
      flex: 1,
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

const TestList = () => {

    const goToSenectedTest=(test)=>{
      //navigation.navigate('Home', { id: test});
      console.log("Selected test is ", test);
    }

    return <View style={stylesList.container}>
    <FlatList
        horizontal={true}
        data={testResources}
        style={{backgroundColor:"#dedede"}}
        renderItem={({ item }) => (<TouchableHighlight style={stylesList.itemList} onPress={()=>goToSenectedTest(item.id)}>
              <View>
                <View >
                  <Text style={stylesList.textStyle}>{item.name}</Text>
                </View>
              </View>
          </TouchableHighlight>)}
    />
</View>
}




const SelectedTestScreen = ({navigation}) =>{
    ///<Button title="Menu Lateral"  onPress={toggleMenu} />
            
    return  (<View styles={styles.container}>
                <TestList navigation={navigation}/>
                <View>
                    <Image style={{height:200,width:null, flex:1, backgroundColor:'#ccc', alignContent:"center"}}
                        source={require("../img"+AllTests[0].ImageUri)}
                    />
                </View>
                
            </View>)
}
    

const styles = StyleSheet.create({
    container:{
        //flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default SelectedTestScreen


