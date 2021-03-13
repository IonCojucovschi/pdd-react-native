import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const NotificationScreen = ({navigation}) =>{

const goToComments=()=>{
    navigation.navigate("Comments")
}

return  <View styles={styles.container}>
        <Text>
            Notificari Continut
        </Text>
        <Button
            title="Comentarii"
            onPress={goToComments}
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

export default NotificationScreen


