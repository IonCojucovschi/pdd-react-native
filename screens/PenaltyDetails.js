import React, { Component,useState,useEffect } from "react";
import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import HeaderComponent from '../components/HeaderComponent';
import HomeItemComponent from '../components/Home/HomeItemComponent';

const style = StyleSheet.create({
  containerHome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#eeeeee",
  },
  optionContainer:{
    marginLeft:25,
    marginRight:25,
    marginTop:10,
  },

});


class PenaltyDetails extends Component{
    constructor(props)
    {
        super(props);
    }

   render(){
       return(
        <View style={style.containerHome}>
                <HeaderComponent/>
                <View style={style.optionContainer}>
                    <Text>
                       <p><strong>Articolul 34.1</strong> Amenda este o sancţiune pecuniară, care se aplică în cazurile şi în limitele prevăzute de prezentul cod. Amenda se stabileşte în unităţi convenţionale. O unitate convenţională este egală cu 50 de lei.</p>
                       <p><strong>Articolul 34.3</strong> Contravenientul este în drept să achite jumătate din amenda stabilită dacă o plăteşte în cel mult 72 de ore din momentul stabilirii ei. În acest caz, se consideră că sancţiunea amenzii este executată integral.</p>
                       <p><strong>Articolul 36.1</strong> [...] odată cu aplicarea sancţiunii principale, i se aplică un număr de puncte de penalizare ca sancţiune complementară.</p>
                       <p><strong>Articolul 36.2</strong> Dacă aplicarea sancţiunii în modul prevăzut la alin.(1) condiţionează acumularea a 15 puncte de penalizare, agentul constatator remite cauza contravenţională spre examinare în instanţa de judecată competentă, care, odată cu sancţiunea principală şi cu aplicarea punctelor de penalizare, aplică privarea de dreptul special de a conduce vehicule pe un termen de la 6 luni la un an ca sancţiune complementară.</p>
                       <p><strong>Articolul 36.3</strong> Punctele de penalizare se anulează la expirarea termenului de 6 luni de la data constatării contravenţiei pentru care au fost aplicate sau de la data privării, prin hotărîre judecătorească, de dreptul de a conduce vehicule.</p>
                       <div id="tab1" className="tab-pane fade active in">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Articolul</th>
                            <th>Contravenţional</th>
                            <th>Amenda, 1 y.e. (50 lei)</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr className="row_color3">
                                <td>197.1</td>
                                <td>Prestarea serviciilor de transport de călători de către transportul urban, suburban, interurban, la comandă şi de către taxiuri în lipsa certificatului de conformitate</td>
                                <td>20-50 y.e. (1000-2500 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 3 luni la un an</td>
                            </tr>
                            <tr className="row_color1">
                                <td>197.2</td>
                                <td>Încălcarea normelor de capacitate a traficului de pasageri de către conducătorul de maxi-taxi, de autobuz de rută interurbană sau internaţională</td>
                                <td>25-50 y.e. (1250-2500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>197.3</td>
                                <td>Prestarea de servicii în domeniul parcărilor şi în parchinguri în lipsa certificatului de conformitate</td>
                                <td>persoanei fizice: 20-40 y.e. (1000-2000 lei); persoanei juridice: 75-100 y.e. (3750-5000 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>197.4</td>
                                <td>Nerespectarea în transportul auto a condiţiilor stabilite în licenţă şi/sau în actele de autorizare a activităţii agentului transportator, eliberate de organele abilitate în conformitate cu legislaţia în vigoare</td>
                                <td>50-100 y.e. (2500-5000 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>197<sup>1</sup>.1</td>
                                <td>Transportarea contra plată a călătorilor cu unitatea de transport de pînă la opt locuri, inclusiv locul conducătorului auto, de către persoana care nu dispune de licenţă şi de documentul eliberat de autorităţile administraţiei publice locale ce atestă dreptul de a efectua transporturi în regim de taxi</td>
                                <td>persoanei fizice: 100-120 y.e. (5000-6000 lei); persoanei juridice: 350-400 y.e. (17500-20000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>197<sup>1</sup>.2</td>
                                <td>Transportarea contra plată a călătorilor cu unitatea de transport ce depăşeşte opt locuri, inclusiv locul conducătorului auto, de către persoana care nu dispune de licenţă şi de permisul de activitate pe rută ce atestă dreptul de a efectua transporturi pe rute regulate şi/sau de documentul ce atestă dreptul de a efectua transporturi pe rute neregulate</td>
                                <td>persoanei fizice: 120-140 y.e. (6000-7000 lei); persoanei juridice: 400-450 y.e. (20000-22500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>198.1</td>
                                <td>Punerea pe liniile de cale ferată a unor obiecte, fapt ce ar putea duce la deranjarea circulaţiei trenurilor</td>
                                <td>10-20 y.e. (500-1000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>198.2</td>
                                <td>Deteriorarea sau distrugerea liniei de cale ferată, a perdelelor forestiere de protecţie, a paravanelor, a grilajelor de protecţie contra zăpezii şi a altor obiective, a construcţiilor de deservire a căilor ferate, a instalaţiilor de semnalizare şi de telecomunicaţii</td>
                                <td>20-50 y.e. (1000-2500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>198.3</td>
                                <td>Încălcarea regulilor de trecere a transportului cu tracţiune animală şi de mînare a vitelor peste linia de cale ferată, precum şi de păşunare a vitelor în apropierea liniei de cale ferată</td>
                                <td>avertisment sau 3-5 y.e. (150-250 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>198.4</td>
                                <td>Traversarea de către pietoni a liniei de cale ferată în locuri interzise sau încălcarea regulilor de traversare în locuri stabilite</td>
                                <td>avertisment sau pînă la 5 y.e. (250 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>200.1</td>
                                <td>Încălcarea regulilor traficului de încărcături periculoase (inflamabile, explozive), de mare gabarit sau supragrele cu vehicule</td>
                                <td>persoanei fizice: 10-20 y.e. (500-1000 lei); persoanei juridice: 50-100 y.e. (2500-5000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>200.2</td>
                                <td>Încălcarea regulilor traficului de încărcături periculoase (inflamabile, explozive), de mare gabarit sau supragrele pe calea ferată</td>
                                <td>persoanei fizice: 20-30 y.e. (1000-1500 lei); persoanei juridice: 100-200 y.e. (5000-10000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>200.3</td>
                                <td>Încălcarea regulilor traficului de încărcături periculoase (inflamabile, explozive), de mare gabarit sau supragrele cu nave pe ape interioare</td>
                                <td>persoanei fizice: 15-25 y.e. (750-1250 lei); persoanei juridice: 150-200 y.e. (7500-10000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>201.1</td>
                                <td>Deteriorarea intenţionată a materialului rulant, a containerelor, a mijloacelor flotante şi a altor mijloace de transport, destinate traficului de încărcături, a dispozitivelor de trafic</td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>201.2</td>
                                <td>Aflarea fără permisiune pe teritoriul magaziilor de mărfuri, al punctelor (rampelor) de containere, al zonelor (sectoarelor) de manipulare a mărfurilor de la staţiile de autocamioane, de la staţiile de cale ferată, din porturi (debarcadere), al ecluzelor şi al depozitelor</td>
                                <td>10-20 y.e. (500-1000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>201.3</td>
                                <td>Aflarea fără permisiune pe teritoriul magaziilor de mărfuri, al punctelor (rampelor) de containere, al zonelor (sectoarelor) de manipulare a mărfurilor de la staţiile de autocamioane, de la staţiile de cale ferată, din porturi (debarcadere), al ecluzelor şi al depozitelor</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>202</td>
                                <td>Deteriorarea intenţionată a vehiculelor de transport în comun, a vagoanelor de călători şi a locomotivelor, a navelor, precum şi a echipamentului lor interior</td>
                                <td>10-20 y.e. (500-1000 lei) sau cu muncă neremunerată în folosul comunităţii de pînă la 60 de ore</td>
                            </tr>
                            <tr className="row_color2">
                                <td>203.1</td>
                                <td>Urcarea sau coborîrea din mersul vehiculului, călătoria pe scările, pe acoperişul vagoanelor de tren şi în alte locuri interzise, oprirea neautorizată, fără necesitate, a trenului, călătoria neautorizată în trenul de marfă</td>
                                <td>pînă la 15 y.e. (750 lei) sau cu muncă neremunerată în folosul comunităţii de pînă la 40 de ore</td>
                            </tr>
                            <tr className="row_color2">
                                <td>203.2</td>
                                <td>Aruncarea gunoiului şi altor obiecte pe fereastra sau pe uşa troleibuzului, autobuzului, maxi-taxiului, vagonului şi peste bordul navei</td>
                                <td>10-20 y.e. (500-1000 lei) sau cu muncă neremunerată în folosul comunităţii de la 20 la 40 de ore</td>
                            </tr>
                            <tr className="row_color2">
                                <td>203.3</td>
                                <td>Fumatul în troleibuze, autobuze, maxi-taxiuri, în vagoane, în locuri neindicate pentru fumat din trenuri de lung parcurs şi în trenuri suburbane, în nave</td>
                                <td>30-50 y.e. (1500-2500 lei) sau cu muncă neremunerată în folosul comunităţii de la 20 la 60 de ore</td>
                            </tr>
                            <tr className="row_color1">
                                <td>204.1</td>
                                <td>Admiterea pornirii în călătorie fără bilet de pe teritoriul autogării în transportul rutier regulat suburban, interurban şi internaţional de către conducătorul mijlocului de transport sau persoana responsabilă de aprobarea ieşirii în cursă a mijlocului de transport de pe teritoriul autogării</td>
                                <td>40-60 y.e. (2000-3000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>204.2</td>
                                <td>Neeliberarea pe traseu a biletului de călătorie în transportul rutier regulat urban, suburban, interurban şi internaţional de către conducătorul mijlocului de transport sau persoana responsabilă de taxarea călătoriei</td>
                                <td>40-60 y.e. (2000-3000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>204.3</td>
                                <td>Admiterea călătoriei fără bilet în transportul feroviar, urban electric şi naval de către persoana responsabilă pentru îmbarcarea călătorilor sau persoana responsabilă de taxarea călătoriei</td>
                                <td>40-60 y.e. (2000-3000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>204.4</td>
                                <td>Călătoria fără bilet în transportul regulat rutier suburban, interurban şi internaţional, în transportul feroviar şi naval</td>
                                <td>20-30 y.e. (1000-1500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>204.5</td>
                                <td>Călătoria fără bilet în transportul regulat urban rutier şi electric</td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>205</td>
                                <td>Falsificarea biletelor şi tichetelor, punerea în comercializare şi comercializarea biletelor şi tichetelor false pentru transport urban în comun, cu autobuze interurbane şi internaţionale, cu trenuri suburbane, cu trenuri locale şi de lung parcurs, cu nave fluviale</td>
                                <td>100-150 y.e. (5000-7500 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>206.1</td>
                                <td>Încălcarea regulilor de înregistrare şi de evidenţă a navelor aflate sub controlul căpităniei portului</td>
                                <td>persoanei fizice: 50-100 y.e. (2500-5000 lei); persoanei cu funcţie de răspundere:180-250 y.e. (9000-12500 lei); persoanei juridice: 200-300 y.e. (10000-15000 lei)</td>
                            </tr>
                            <tr className="row_color3">
                                <td>206.2</td>
                                <td>Încălcarea regulilor de folosire a navelor şi a debarcaderelor</td>
                                <td>75-100 y.e. (3750-5000 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 3 luni la un an</td>
                            </tr>
                            <tr className="row_color2">
                                <td>207</td>
                                <td>Admiterea spre exploatare a vehiculelor, locomotivelor şi vagoanelor, a navelor care au vicii (cu excepţia vehiculelor fără autopropulsie), din care cauză este interzisă exploatarea lor, a celor reutilate fără autorizaţia de rigoare, neînregistrate în modul stabilit, sau a celor care nu au trecut controlul tehnic de stat</td>
                                <td>100-150 y.e. (5000-7500 lei)</td>
                            </tr>
                            <tr className="row_color3">
                                <td>221.1</td>
                                <td>Prestarea serviciilor de deservire tehnică şi de reparaţie în lipsa certificatului de conformitate</td>
                                <td>75-100 y.e. (3750-5000 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 3 luni la un an</td>
                            </tr>
                            <tr className="row_color1">
                                <td>221.2</td>
                                <td>Încălcarea regulilor de exploatare tehnică a tractoarelor, combinelor, a altor maşini agricole autopropulsate, a maşinilor de construcţie a drumurilor, încălcarea regulilor de securitate tehnică</td>
                                <td>persoanei fizice: 10-20 y.e. (500-1000 lei); persoanei juridice: 200-300 y.e. (10000-15000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>223</td>
                                <td>Deteriorarea drumurilor, pasajelor de nivel, mijloacelor tehnice de dirijare a circulaţiei rutiere, altor instalaţii rutiere, precum şi crearea intenţionată de obstacole în circulaţia rutieră</td>
                                <td>50 y.e. (2500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>224.1</td>
                                <td>Circulaţia pe drumurile naţionale a vehiculelor cu şenile, a vehiculelor echipate cu pneuri utilate cu crampoane (în afara perioadei 1 decembrie – 1 martie), cu tracţiune animală, precum şi a celor neechipate corespunzător, care transportă încărcături neacoperite cu prelată a căror scurgere provoacă poluarea învelişului rutier, a terenurilor adiacente drumurilor sau încetinirea circulaţiei rutiere</td>
                                <td>persoanei fizice: 30-50 y.e. (1500-2500 lei); persoanei juridice: 150-200 y.e. (7500-10000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>224.2</td>
                                <td>Nerespectarea de către conducătorii de vehicule sau de către furnizorii de mărfuri în vrac/vraf a restricţiilor de tonaj (greutate) sau de gabarit</td>
                                <td>persoanei fizice: 30-50 y.e. (1500-2500 lei); persoanei juridice: 150-200 y.e. (7500-10000 lei)</td>
                            </tr>
                            <tr className="row_color2">
                                <td>224.3</td>
                                <td>Nesupunerea la dispoziţiile sau la cerinţele legale ale angajatul cu statut special al Ministerului Afacerilor Interne sau ale persoanei cu funcţie de răspundere din organul de specialitate în domeniul transportului privind verificarea masei totale, a sarcinii masice pe osie sau a gabaritelor vehiculelor, refuzul de a prezenta actele sau împiedicarea în orice mod a activităţii acestora</td>
                                <td>persoanei fizice: 30-50 y.e. (1500-2500 lei); persoanei cu funcţie de răspundere: 100-150 y.e. (5000-7500 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 3 luni la un an;  persoanei juridice: 150-200 y.e. (7500-10000 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 6 luni la un an</td>
                            </tr>
                            <tr className="row_color1">
                                <td>225.1</td>
                                <td>Blocarea intenţionată a arterelor de transport care a provocat sau care ar putea provoca perturbarea funcţionării normale a transportului auto, feroviar, fluvial</td>
                                <td>50-100 y.e. (2500-5000 lei)</td>
                            </tr>
                            <tr className="row_color3">
                                <td>225.2</td>
                                <td>Acţiunile specificate la alin.(1) însoţite de pericol pentru viaţa şi sănătatea oamenilor ori săvîrşite în urma înţelegerii prealabile a unui grup de persoane, ori însoţite de controlul nelegitim al încărcăturii, bagajului sau al documentelor, dacă aceste acţiuni nu constituie infracţiune</td>
                                <td>100-150 y.e. (5000-7500 lei) sau fără privarea de dreptul de a desfăşura o anumită activitate pe un termen de la 3 luni la un an</td>
                            </tr>
                            <tr className="row_color1">
                                <td>226.1</td>
                                <td>Aratul unor porţiuni de teren, cositul ierbii, tăierea şi vătămarea plantaţiilor, desţelenirea şi excavarea solului, evacuarea pe banda de separaţie a drumurilor a apelor de canalizare, apelor industriale, ameliorative şi a celor de scurgere din instalaţii de evacuare a apei şi din rezervoare fără coordonare cu autorităţile rutiere, aţîţarea focului pe banda de separaţie şi în apropierea podurilor de lemn la mai puţin de 100 de metri de acestea</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>226.2</td>
                                <td>Executarea de împrejmuiri, plantarea de arbori care pot provoca înzăpezirea sau inundarea drumului ori care împiedică vizibilitatea, amplasarea de construcţii, instalaţii şi panouri publicitare neautorizate în zona de protecţie a drumului</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>226.3</td>
                                <td>Executarea fără autorizaţie în zona de protecţie a drumului a unor lucrări ce ar periclita stabilitatea şi integritatea lui</td>
                                <td>persoanei fizice: 10-20 y.e. (500-1000 lei); persoanei juridice: 100-200 y.e. (5000-10000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>227.1</td>
                                <td>Nerespectarea regulilor de întreţinere, de reparaţie şi de reconstrucţie a drumurilor, pasajelor şi a comunicaţiilor situate în zona drumului, a mijloacelor de dirijare a circulaţiei rutiere, nerespectarea termenelor de executare a lucrărilor de reparaţie şi de reconstrucţie executate în zona drumurilor, neîntreprinderea măsurilor de asigurare a securităţii circulaţiei rutiere</td>
                                <td>persoanei fizice: 5-10 y.e. (250-500 lei); persoanei juridice: 50-100 y.e. (2500-5000 lei)</td>
                            </tr>
                            <tr className="row_color1">
                                <td>228.1</td>
                                <td>Exploatarea vehiculelor cu defecte tehnice în sistemul de frînare sau în mecanismul de direcţie, în dispozitivele de iluminare ori de semnalizare, exploatarea vehiculelor reutilate fără autorizaţia de rigoare </td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                                <td>3</td>
                            </tr>





                                                    <tr className="row_color1">
                                <td>228.2</td>
                                <td>Exploatarea vehiculelor cu defecte tehnice interzisă prin regulile de circulaţie rutieră, cu excepţia vehiculelor avînd defectele menţionate la alin.(1), precum şi amplasarea neautorizată pe vehicule a publicităţii</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>229.1</td>
                                <td>Încălcarea regulilor de înmatriculare sau de înregistrare de stat a vehiculelor</td>
                                <td>10-20 y.e. (500-1000 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>229.2</td>
                                <td>Conducerea unui vehicul care nu a fost înmatriculat în modul stabilit sau care nu a fost supus reviziei tehnice</td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                                <td>3</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>229.3</td>
                                <td>Exploatarea unui vehicul care nu a fost asigurat de răspundere civilă în modul stabilit</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>230.1</td>
                                <td>Conducerea unui vehicul cu numărul de înmatriculare indescifrabil, nestandardizat sau amplasat cu încălcarea standardului</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>230.2</td>
                                <td>Conducerea unui vehicul fără număr de înmatriculare</td>
                                <td>25-30 y.e. (1250-1500 lei)</td>
                                <td>4</td>
                            </tr>
                                                    <tr className="row_color3">
                                <td>230.3</td>
                                <td>Atribuirea unui număr de înmatriculare fals şi conducerea cu bună ştiinţă a vehiculului cu un astfel de număr</td>
                                <td>privarea de dreptul de a conduce un vehicul pe un termen de un an</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>230.4</td>
                                <td>Nesemnalizarea vehiculului cu semnul distinctiv conform Regulamentului circulaţiei rutiere</td>
                                <td>5-20 y.e. (250-1000 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>230.5</td>
                                <td>Nemenţinerea în stare curată a dispozitivelor de iluminare, de semnalizare, a numărului de înmatriculare, a seturilor reflectorizante, a sticlelor de la portierele din faţă şi a parbrizului vehiculului </td>
                                <td>avertisment sau cu amendă de la o unitate la 3 unităţi convenţionale</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>231.1</td>
                                <td>Conducerea vehiculului cu permis de conducere de o categorie necorespunzătoare</td>
                                <td>50 y.e. (2500 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>231.2</td>
                                <td>Conducerea vehiculului fără permis de conducere (cu excepţia conducerii în cazul instruirii, în prezenţa instructorului)</td>
                                <td>50-100 y.e. (2500-5000 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>231.3</td>
                                <td>Conducerea vehiculului de către o persoană privată de dreptul de a conduce vehicule</td>
                                <td>100-150 y.e. (5000-7500 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>231.4</td>
                                <td>Predarea conducerii vehiculului către o persoană care nu are permis de conducere (cu excepţia instruirii, în prezenţa instructorului), care este privată de dreptul de a conduce vehicule sau care are permis de conducere de o categorie necorespunzătoare</td>
                                <td>50-100 y.e. (2500-5000 lei)</td>
                                <td>3</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>232.1</td>
                                <td>Conducerea vehiculului de către o persoană care nu are asupra sa permis de conducere sau actul de înmatriculare de stat a vehiculului, sau poliţa de asigurare obligatorie de răspundere civilă</td>
                                <td>5 y.e. (250 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>232.2</td>
                                <td>Predarea conducerii vehiculului către o persoană care nu are asupra sa permis de conducere</td>
                                <td>avertisment sau  5 y.e. (250 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color3">
                                <td>233.1</td>
                                <td>Conducerea vehiculului de către o persoană care se află în stare de ebrietate produsă de alcool ce depăşeşte gradul maxim admisibil stabilit de lege, dacă fapta nu constituie infracţiune</td>
                                <td>150 y.e. (7500 lei) cu privarea de dreptul de a conduce vehicule pe un termen de la 2 la 3 ani</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>233.2</td>
                                <td>Predarea cu bună ştiinţă a conducerii vehiculului către o persoană care se află în stare de ebrietate produsă de alcool ce depăşeşte gradul maxim admisibil stabilit de Guvern sau în stare de ebrietate produsă de substanţe narcotice, psihotrope şi/sau de alte substanţe cu efecte similare, dacă fapta nu constituie infracţiune</td>
                                <td>150 y.e. (7500 lei) sau cu privarea de dreptul de a conduce vehicule pe un termen de la 1 la 3 ani</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color3">
                                <td>233.2.1</td>
                                <td>Consumul de alcool, de substanţe narcotice, psihotrope şi/sau de alte substanţe cu efecte similare de către conducătorul de vehicul implicat în accident rutier, pînă la testarea alcoolscopică sau pînă la recoltarea probelor biologice în cadrul examenului medical în vederea stabilirii stării de ebrietate şi a naturii ei, cu excepţia consumului de medicamente cu efecte similare substanţelor psihotrope, după producerea accidentului de circulaţie şi pînă la sosirea poliţiei la faţa locului, dacă acestea au fost administrate de personal medical autorizat şi au fost impuse de starea de sănătate</td>
                                <td>150 y.e. (7500 lei) cu privarea de dreptul de a conduce vehicule pe un termen de la 2 la 3 ani</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>233.3</td>
                                <td>Acţiunile specificate la alineatele (1)–(2.1), în cazul în care admiterea la trafic a conducătorului de vehicul nu prevede obligaţia de a deţine permis de conducere</td>
                                <td>100 y.e. (5000 lei) sau cu muncă neremunerată în folosul comunităţii pe o durată de la 20 la 40 de ore sau cu arest contravenţional pe un termen de 15 zile</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>233.4</td>
                                <td>Acţiunile prevăzute la alineatele (1)–(2.1), săvîrşite de către o persoană care nu deţine permis de conducere sau care este privată de dreptul de a conduce vehicule, dacă fapta nu constituie infracţiune</td>
                                <td>150 y.e. (7500 lei) sau cu muncă neremunerată în folosul comunităţii pe o durată de la 40 la 60 de ore, sau cu arest contravenţional pe un termen de 15 zile</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>234</td>
                                <td>Necomunicarea de către proprietarul sau mandatarul (utilizatorul) vehiculului, la solicitarea poliţiei, a identităţii persoanei căreia i-a încredinţat conducerea sau comunicarea cu bună ştiinţă de date eronate privind identitatea acestei persoane</td>
                                <td>persoanei fizice: 45-50 y.e. (2250-2500 lei), persoanei juridice: 75-100 y.e. (3750-5000 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>235.1</td>
                                <td>Încălcarea regulilor de folosire a centurii de siguranţă şi a căştii de protecţie a motociclistului</td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                                <td>3</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>235.2</td>
                                <td>Purtarea convorbirilor radiotelefonice contrar Regulamentului circulaţiei rutiere</td>
                                <td>15-20 y.e. (750-1000 lei)</td>
                                <td>3</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>236.1</td>
                                <td>Depăşirea vitezei de circulaţie stabilită pe sectorul respectiv de drum de la 10 la 20 km/oră</td>
                                <td>20 y.e. (1000 lei)</td>
                                <td>3</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>236.2</td>
                                <td>Depăşirea vitezei de circulaţie stabilită pe sectorul respectiv de drum de la 20 la 40 km/oră</td>
                                <td>30 y.e. (1500 lei)</td>
                                <td>4</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>236.3</td>
                                <td>Depăşirea vitezei de circulaţie stabilită pe sectorul respectiv de drum mai mult de 40 km/oră</td>
                                <td>50 y.e. (2500 lei)</td>
                                <td>5</td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>237.1</td>
                                <td>Traversarea de către conducătorul de vehicul a liniei de cale ferată în afara pasajului de nivel </td>
                                <td>100-125 y.e. (5000-6250 lei) sau cu muncă neremunerată în folosul comunităţii pe o durată de la 20 la 30 de ore, sau cu arest contravenţional pe un termen de 15 zile, în toate cazurile cu privarea de dreptul de a conduce vehicule pe un termen de 6 luni</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>237.2</td>
                                <td>Încălcarea de către conducătorul de vehicul a regulilor de traversare a liniei de cale ferată prin pasajul de nivel</td>
                                <td>100-125 y.e. (5000-6250 lei) sau cu muncă neremunerată în folosul comunităţii pe o durată de la 30 la 40 de ore, sau cu arest contravenţional pe un termen de 15 zile, în toate cazurile cu privarea de dreptul de a conduce vehicule pe un termen de un an</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color2">
                                <td>237.3</td>
                                <td>Încălcarea de către conducătorul de vehicul a dispoziţiilor alin. (1) şi (2), care a generat riscul producerii unui accident de circulaţie</td>
                                <td>125-150 y.e. (6250-7500 lei) sau cu muncă neremunerată în folosul comunităţii pe o durată de la 40 la 60 de ore, sau cu arest contravenţional pe un termen de 15 zile, în toate cazurile cu privarea de dreptul de a conduce vehicule pe un termen de la 2 la 3 ani</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>238.1</td>
                                <td>Oprirea în locuri interzise</td>
                                <td>avertisment sau 5 y.e. (250 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>238.2</td>
                                <td>Staţionarea sau parcarea în locuri interzise</td>
                                <td>pînă la 10 y.e. (500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>238.3</td>
                                <td>Neacordarea de prioritate legală pietonilor sau cicliştilor</td>
                                <td>pînă la 10 y.e. (500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>239</td>
                                <td>Nerespectarea regulilor de circulaţie în zonele rezidenţiale</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>240.1</td>
                                <td>Nerespectarea de către conducătorul de vehicul a indicatoarelor rutiere de prioritate, a indicatoarelor de interzicere şi de sens obligatoriu, a marcajului de pe partea carosabilă a drumului privind acordarea dreptului prioritar de circulaţie, dreptului de depăşire a vehiculelor, a exigenţelor de folosire a dispozitivelor de iluminat la căderea întunericului sau în condiţii de vizibilitate redusă</td>
                                <td>5-10 y.e. (250-500 lei)</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>240.2</td>
                                <td>Neglijarea de către conducătorul de vehicul a semnalului de interzicere al semaforului sau a gestului de interzicere al agentului de circulaţie</td>
                                <td>25-30 y.e. (1250-1500 lei)</td>
                                <td>2</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>241.1</td>
                                <td>Neîndeplinirea de către conducătorul de vehicul a indicaţiei legale dată de agentul de circulaţie de a opri vehiculul</td>
                                <td>45-50 y.e. (2250-2500 lei)</td>
                                <td>4</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>241.2</td>
                                <td>Neacordarea priorităţii de trecere vehiculului cu farurile de semnalizare avînd lumina albastră sau roşie şi cu dispozitivele de semnalizare sonoră specială în funcţiune (vehicul cu regim prioritar de circulaţie)</td>
                                <td>25-30 y.e. (1250-1500 lei)</td>
                                <td>4</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>242.1</td>
                                <td>Încălcarea de către conducătorul de vehicul a regulilor de circulaţie rutieră soldată cu deteriorarea neînsemnată a vehiculelor, a încărcăturilor, a drumurilor, a instalaţiilor rutiere, a altor instalaţii sau a altor bunuri</td>
                                <td>40 y.e. (2000 lei)</td>
                                <td>5</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>242.2</td>
                                <td>Încălcarea de către conducătorul de vehicul a regulilor de circulaţie rutieră soldată cu cauzarea de leziuni corporale uşoare victimei sau cu deteriorarea considerabilă a vehiculelor, a încărcăturilor, a drumurilor, a instalaţiilor rutiere, a altor instalaţii sau a altor bunuri</td>
                                <td>50 y.e. (2500 lei)</td>
                                <td>6</td>
                            </tr>
                                                    <tr className="row_color3">
                                <td>243</td>
                                <td>Părăsirea de către vinovat a locului în care s-a produs accidentul rutier </td>
                                <td>privarea de dreptul de a conduce vehicule pe un termen de un an sau cu arest contravenţional pe un termen de 15 zile</td>
                                <td></td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>244</td>
                                <td>Încălcarea de către conducătorul de vehicul a dispoziţiilor din Regulamentul circulaţiei rutiere, prevăzute la art.237–239 din prezentul cod, care a generat pericolul unui accident de circulaţie</td>
                                <td>30-50 y.e. (1500-2500 lei)</td>
                                <td>4</td>
                            </tr>
                                                    <tr className="row_color1">
                                <td>245.1</td>
                                <td>Ignorarea de către pietoni a semnalelor de dirijare a traficului rutier, traversarea părţii carosabile a drumului sau deplasarea pe ea în locuri neindicate, nerespectarea indicatoarelor rutiere de prioritate, a indicatoarelor de interdicţie şi de sens obligatoriu, a regulilor de deplasare pe drumuri a motocicliştilor, bicicliştilor, vizitiilor şi a altor persoane care se folosesc de drum</td>
                                <td>avertisment sau 5-10 y.e. (250-500 lei)</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    
                    
                    </Text>
                </View>
        </View>
       )
   }
}

export default PenaltyDetails;