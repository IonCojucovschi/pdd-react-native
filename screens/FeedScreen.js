import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedScreen = () =>{

return  <View styles={styles.container}>
        <Text>
            News
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default FeedScreen


