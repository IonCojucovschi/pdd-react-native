import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class  HeaderPenaltiesComponent extends Component  {
   render(){ 
        return(
        <View style={{padding:20}}>
            <Text><Text style={{fontWeight:"bold"}}>Articolul 34.1</Text> Amenda este o sancţiune pecuniară, care se aplică în cazurile şi în limitele prevăzute de prezentul cod. Amenda se stabileşte în unităţi convenţionale. O unitate convenţională este egală cu 50 de lei.</Text>
            <Text><Text style={{fontWeight:"bold"}}>Articolul 34.3</Text>Contravenientul este în drept să achite jumătate din amenda stabilită dacă o plăteşte în cel mult 72 de ore din momentul stabilirii ei. În acest caz, se consideră că sancţiunea amenzii este executată integral.</Text>
            <Text><Text style={{fontWeight:"bold"}}>Articolul 36.1</Text> [...] odată cu aplicarea sancţiunii principale, i se aplică un număr de puncte de penalizare ca sancţiune complementară.</Text>
            <Text><Text style={{fontWeight:"bold"}}>Articolul 36.2</Text> Dacă aplicarea sancţiunii în modul prevăzut la alin.(1) condiţionează acumularea a 15 puncte de penalizare, agentul constatator remite cauza contravenţională spre examinare în instanţa de judecată competentă, care, odată cu sancţiunea principală şi cu aplicarea punctelor de penalizare, aplică privarea de dreptul special de a conduce vehicule pe un termen de la 6 luni la un an ca sancţiune complementară.</Text>
            <Text><Text style={{fontWeight:"bold"}}>Articolul 36.3</Text> Punctele de penalizare se anulează la expirarea termenului de 6 luni de la data constatării contravenţiei pentru care au fost aplicate sau de la data privării, prin hotărîre judecătorească, de dreptul de a conduce vehicule.</Text>
        </View>)
    }
}
export default HeaderPenaltiesComponent;