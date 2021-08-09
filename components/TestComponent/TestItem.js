import React, {Component} from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableHighlight } from "react-native";
//import testResources from "../components/testscreen/testList.json"
//import allTest from "../AllTest.json";

const style= StyleSheet.create({
    testItemContainer:{
        backgroundColor:"#ffffff",
        marginTop:11,
        marginBottom:11,
        height:70,
        width:70,
        borderRadius:20,
        alignItems:"center",
        flexDirection:"row",
    },
    testItem:{
        height:70,
        width:70,
        borderRadius:20,
        alignItems:"center",
        flexDirection:"row",
    },
    itemText:{
        fontWeight:"bold",
        fontSize:24,
        width:"100%",
        textAlign:"center",

    }
});

class TestItem extends Component{
    constructor(props){
        super(props);

    }

    goToSenectedTest = (item)=>{
        console.log("Selected test is: ",item);
        this.props.navigation.navigate("SelectedTest",{navigation:this.props.navigation, chapter:item})
    }

    render(){
        return (
            this.props.item == 36 ? <View style={style.testItem}/> :
            <TouchableHighlight style={style.testItemContainer} onPress={()=>this.goToSenectedTest(this.props.item)}>
                <View style={style.testItem}>
                    <Text style={style.itemText}>{this.props.item.Id}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default TestItem;