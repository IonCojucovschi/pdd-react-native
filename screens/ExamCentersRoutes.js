import React, { Component,useState,useEffect } from "react";
import { Text, Modal, Image, StatusBar, Button, Pressable, StyleSheet, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';
import RouteItem from '../components/ExamCenters/RouteItem';
import routesResource from "../AllRoutes.json";




const RoutesImage = {
    "R1_Chisinau.jpg":require("../img/Routes/Chisinau/R1_Chisinau.jpg"),
    "R2_Chisinau.jpg":require("../img/Routes/Chisinau/R2_Chisinau.jpg"),
    "R3_Chisinau.jpg":require("../img/Routes/Chisinau/R3_Chisinau.jpg"),
    "R4_Chisinau.jpg":require("../img/Routes/Chisinau/R4_Chisinau.jpg"),
    "R5_Chisinau.jpg":require("../img/Routes/Chisinau/R5_Chisinau.jpg"),
    "R6_Chisinau.jpg":require("../img/Routes/Chisinau/R6_Chisinau.jpg"),
    "R7_Chisinau.jpg":require("../img/Routes/Chisinau/R7_Chisinau.jpg"),
    "R8_Chisinau.jpg":require("../img/Routes/Chisinau/R8_Chisinau.jpg"),
    ///balti
    "R1_Balti.jpg":require("../img/Routes/Balti/R1_Balti.jpg"),
    "R2_Balti.jpg":require("../img/Routes/Balti/R2_Balti.jpg"),
    "R3_Balti.jpg":require("../img/Routes/Balti/R3_Balti.jpg"),
    "R4_Balti.jpg":require("../img/Routes/Balti/R4_Balti.jpg"),
    "R6_Balti.jpg":require("../img/Routes/Balti/R6_Balti.jpg"),
    "R7_Balti.jpg":require("../img/Routes/Balti/R7_Balti.jpg"),
    "R8_Balti.jpg":require("../img/Routes/Balti/R8_Balti.jpg"),
    "R9_Balti.jpg":require("../img/Routes/Balti/R9_Balti.jpg"),
    "R10_Balti.jpg":require("../img/Routes/Balti/R10_Balti.jpg"),
    "R11_Balti.jpg":require("../img/Routes/Balti/R11_Balti.jpg"),
    "R12_Balti.jpg":require("../img/Routes/Balti/R12_Balti.jpg"),
    "R13_Balti_ro_web.jpg":require("../img/Routes/Balti/R13_Balti_ro_web.jpg"),
//Cahul
    "R1_CAHUL.jpg":require("../img/Routes/Cahul/R1_CAHUL.jpg"),
    "R2_CAHUL.jpg":require("../img/Routes/Cahul/R2_CAHUL.jpg"),
    "R3_CAHUL.jpg":require("../img/Routes/Cahul/R3_CAHUL.jpg"),
    "R4_CAHUL.jpg":require("../img/Routes/Cahul/R4_CAHUL.jpg"),
    "R5_CAHUL.jpg":require("../img/Routes/Cahul/R5_CAHUL.jpg"),
//CAUSENI
    "R1_CAUSENI.jpg":require("../img/Routes/Causeni/R1_CAUSENI.jpg"),
    "R2_CAUSENI.jpg":require("../img/Routes/Causeni/R2_CAUSENI.jpg"),
    "R3_CAUSENI.jpg":require("../img/Routes/Causeni/R3_CAUSENI.jpg"),
    "R4_CAUSENI.jpg":require("../img/Routes/Causeni/R4_CAUSENI.jpg"),
    "R5_CAUSENI.jpg":require("../img/Routes/Causeni/R5_CAUSENI.jpg"),
//COMRAT
    "R1_COMRAT.jpg":require("../img/Routes/Comrat/R1_COMRAT.jpg"),
    "R2_COMRAT.jpg":require("../img/Routes/Comrat/R2_COMRAT.jpg"),
    "R3_COMRAT.jpg":require("../img/Routes/Comrat/R3_COMRAT.jpg"),
    "R4_COMRAT.jpg":require("../img/Routes/Comrat/R4_COMRAT.jpg"),
    "R5_COMRAT.jpg":require("../img/Routes/Comrat/R5_COMRAT.jpg"),
//CRIULENI
    "R1_CRIULENI.jpg":require("../img/Routes/Criuleni/R1_CRIULENI.jpg"),
    "R2_CRIULENI.jpg":require("../img/Routes/Criuleni/R2_CRIULENI.jpg"),
    "R3_CRIULENI.jpg":require("../img/Routes/Criuleni/R3_CRIULENI.jpg"),
    "R4_CRIULENI.jpg":require("../img/Routes/Criuleni/R4_CRIULENI.jpg"),
    "R5_CRIULENI.jpg":require("../img/Routes/Criuleni/R5_CRIULENI.jpg"),
//EDINET
    "R1_EDINET.jpg":require("../img/Routes/Edinet/R1_EDINET.jpg"),
    "R2_EDINET.jpg":require("../img/Routes/Edinet/R2_EDINET.jpg"),
    "R3_EDINET.jpg":require("../img/Routes/Edinet/R3_EDINET.jpg"),
    "R4_EDINET.jpg":require("../img/Routes/Edinet/R4_EDINET.jpg"),
    "R5_EDINET.jpg":require("../img/Routes/Edinet/R5_EDINET.jpg"),
//HIncesti
    "R1_HINCESTI.jpg":require("../img/Routes/Hincesti/R1_HINCESTI.jpg"),
    "R2_HINCESTI.jpg":require("../img/Routes/Hincesti/R2_HINCESTI.jpg"),
    "R3_HINCESTI.jpg":require("../img/Routes/Hincesti/R3_HINCESTI.jpg"),
    "R4_HINCESTI.jpg":require("../img/Routes/Hincesti/R4_HINCESTI.jpg"),
    "R5_HINCESTI.jpg":require("../img/Routes/Hincesti/R5_HINCESTI.jpg"),
//OCNITA
    "R1_Ocnita.jpg":require("../img/Routes/Ocnita/R1_Ocnita.jpg"),
    "R2_Ocnita.jpg":require("../img/Routes/Ocnita/R2_Ocnita.jpg"),
    "R3_Ocnita.jpg":require("../img/Routes/Ocnita/R3_Ocnita.jpg"),
    "R4_Ocnita.jpg":require("../img/Routes/Ocnita/R4_Ocnita.jpg"),
    "R5_Ocnita.jpg":require("../img/Routes/Ocnita/R5_Ocnita.jpg"),
//ORHEI
    "R1_ORHEI.jpg":require("../img/Routes/Orhei/R1_ORHEI.jpg"),
    "R2_ORHEI.jpg":require("../img/Routes/Orhei/R2_ORHEI.jpg"),
    "R3_ORHEI.jpg":require("../img/Routes/Orhei/R3_ORHEI.jpg"),
    "R4_ORHEI.jpg":require("../img/Routes/Orhei/R4_ORHEI.jpg"),
    "R5_ORHEI.jpg":require("../img/Routes/Orhei/R5_ORHEI.jpg"),
//SOROCA
    "R1_Soroca.jpg":require("../img/Routes/Soroca/R1_Soroca.png"),
    "R2_Soroca.jpg":require("../img/Routes/Soroca/R2_Soroca.png"),
    "R3_Soroca.jpg":require("../img/Routes/Soroca/R3_Soroca.png"),
//UNGHENI
    "R1_UNG.jpg":require("../img/Routes/Ungheni/R1_UNG.jpg"),
    "R2_UNG.jpg":require("../img/Routes/Ungheni/R2_UNG.jpg"),
    "R3_UNG.jpg":require("../img/Routes/Ungheni/R3_UNG.jpg"),
    "R4_UNG.jpg":require("../img/Routes/Ungheni/R4_UNG.jpg"),
    "R5_UNG.jpg":require("../img/Routes/Ungheni/R5_UNG.jpg"),
};


const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginTop:10,
    height:"100%",
    width:"100%",
  },

});


class ExamCentersRoutes extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            visible:false,
        }
    }
    _keyExtractor = (item, index) => "routeItem_" + index.toString();
    
    selectedCity = this.props.navigation.state.params.name;


    selectedRoute=(routeImg)=>{
        this.setState({visible:true,imageUrl:routeImg})
    }

    closeModal=()=>{
        this.setState({visible:false})
    }

   render(){
       console.log("Orasul selectat este :",this.selectedCity);
       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose={() => { 
                        this.closeModal()
                    }}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{margin: 20, backgroundColor: 'white', height:"100%",width:"100%", padding: 10, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}>
                            <View style={{height:"8%", width:"100%", alignContent:"flex-end"}}>
                                <Pressable onPress={ () => this.closeModal() } style={{height:30, width:30}}>
                                    <Text style={{fontSize:30,height:30, width:30, color:"#000"}}>X</Text>
                                </Pressable>
                            </View>

                            { this.state.imageUrl ? <Image 
                                source={this.state.imageUrl}
                                style={{height:"100%",width:"100%", position:"absolute", zIndex:-1, resizeMode:"contain"}}
                            /> : null }
                        </View>
                    </View>
                </Modal>
            

                <View style={style.optionContainer}>
                    <FlatList
                    columnWrapperStyle={{paddingLeft:25, paddingRight:25,width:"100%", paddingBottom:10, justifyContent: 'space-between'}}
                    data={routesResource[this.selectedCity]}
                    numColumns={2}
                    keyExtractor = {this._keyExtractor}
                    showsVerticalScrollIndicator ={false}
                    renderItem={({ item, index }) => (<RouteItem 
                        key={"chisinau__"+index} 
                        imageUrl={RoutesImage[item.imageUrl]} 
                        navigation={this.props.navigation} 
                        name={item.name} 
                        onItemClick = {this.selectedRoute}
                        item={item}/>)}
                />
                </View>
        </View>
       )
   }
}

export default ExamCentersRoutes;