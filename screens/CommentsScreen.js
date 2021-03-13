import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CommentsScreen = ({navigation}) =>{

const goToNotification=()=>{
    navigation.navigate('Notification')
}



return  <View styles={styles.container}>
        <Text>
            Comentarii Continut 
        </Text>
        <Button
            title="Comentarii"
            onPress={goToNotification}
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

export default CommentsScreen


