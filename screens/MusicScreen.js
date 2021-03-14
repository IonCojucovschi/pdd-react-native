import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MusicScreen = ({navigation}) =>{

    const toggleMenu=()=>{
        navigation.toggleDrawer()
    }
    
    return  <View styles={styles.container}>
            <Text>
                Muzica continutul paginii ...
            </Text>
            <Button
                title="Menu Lateral"
                onPress={toggleMenu}
            />
        </View>
}
    

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default MusicScreen


