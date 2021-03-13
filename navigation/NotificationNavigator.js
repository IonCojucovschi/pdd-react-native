import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";

import NotificationScreen from '../screens/NotificationScreen';
import CommentsScreen from '../screens/CommentsScreen';

const _NotificationNavigator=createStackNavigator({
    Notification:{
        screen:NotificationScreen,
        navigationOptions:{
            title:"Notificari .."
        }
    }
})

const _CommentsNavigator=createStackNavigator({
    Comments:{
        screen:CommentsScreen,
        navigationOptions:{
            title:"Comentarii .."
        }
    }
})

const NotificationNavigator=createSwitchNavigator({
    Notification:_NotificationNavigator,
    Comments:_CommentsNavigator
})

export default NotificationNavigator;








