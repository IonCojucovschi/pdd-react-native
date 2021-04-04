import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TestList from "../components/testscreen/testList";

const FeedScreen = () =>{

return  (<View styles={styles.container}>
        <Text>
            News
        </Text>
        <TestList />
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default FeedScreen


