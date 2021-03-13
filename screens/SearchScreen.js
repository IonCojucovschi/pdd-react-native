import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () =>{

return <View styles={styles.container}>
        <Text>
            Search
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

export default SearchScreen


