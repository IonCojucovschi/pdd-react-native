import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';

import AnotherScreen from "../screens/AnotherScreen"
import MusicScreen from "../screens/MusicScreen"
import ComunityScreen from "../screens/AnotherScreen"
import NotificationScreen from "../screens/NotificationScreen";

const _AnotherNavigator=createStackNavigator({
    Another:{
        screen:AnotherScreen,
        navigationOptions:{
            title:"Mai mult"
        }
    }
})


const _MusicNavigator=createStackNavigator({
    Another:{
        screen:MusicScreen,
        navigationOptions:{
            title:"Muzica"
        }
    }
})

const _ComunityNavigator=createStackNavigator({
    Another:{
        screen:ComunityScreen,
        navigationOptions:{
            title:"Comunitate"
        }
    }
})

export default AnotherNavigator;

