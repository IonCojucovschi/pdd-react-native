import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class  PenaltyRowWithPointsComponent extends Component  {
    renderContent(){
        if(this.props.isHeader){
            return (
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold",width:"10%"}}>{this.props.source.article}</Text>
                    <Text style={{fontWeight:"bold",width:"50%"}}>{this.props.source.contravention}</Text>
                    <Text style={{fontWeight:"bold",width:"40%"}}>{this.props.source.value}</Text>
                    <Text style={{fontWeight:"bold",width:"10%"}}>{this.props.source.penaltyPoint ? this.props.source.penaltyPoint : "" }</Text>
                </View>)
        }else{
            return (
                <View style={{display:"flex",borderColor:"#000",borderWidth:1, flexDirection:"row"}}>
                    <Text style={{width:"10%",padding:5}}>{this.props.source.article}</Text>
                    <View style={{height:"100%",width:1,backgroundColor:"#000"}}/>
                    <Text style={{width:"50%",padding:5}}>{this.props.source.contravention}</Text>
                    <View style={{height:"100%",width:1,backgroundColor:"#000"}}/>
                    <Text style={{width:"30%",padding:5}}>{this.props.source.value}</Text>
                    <View style={{height:"100%",width:1,backgroundColor:"#000"}}/>
                    <Text style={{fontWeight:"bold",width:"10%"}}>{this.props.source.penaltyPoint? this.props.source.penaltyPoint : "" }</Text>

                </View>)
        }
    }
   render(){ 
        return(this.renderContent())
    }
}
export default PenaltyRowWithPointsComponent;
