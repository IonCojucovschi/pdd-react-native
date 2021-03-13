import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";

///import screens
import CategoriesScreen from '../screens/Categories.js'
import HomeScreen from '../screens/Home.js'
import MessagesScreen from "../screens/MessagesScreen";
import SearchScreen from "../screens/SearchScreen";
import FeedScreen from "../screens/FeedScreen";

/// import navigators
import NotificationNavigator from './NotificationNavigator';
import AnotherNavigation from "./AnotherNavigation";
import AnotherScreen from "../screens/AnotherScreen.js";

const _FeedNaviator = createStackNavigator({
  Feed:{
    screen:FeedScreen,
    navigationOptions:{
      title:"News"
    }
  }
});

const _HomeNaviator = createStackNavigator({
  Feed:{
    screen:HomeScreen,
    navigationOptions:{
      title:"Acasa"
    }
  }
});

const _SearchNaviator = createStackNavigator({
  Feed:{
    screen:SearchScreen,
    navigationOptions:{
      title:"Cauta ..."
    }
  }
});

const _MessagesNaviator = createStackNavigator({
  Feed:{
    screen:MessagesScreen,
    navigationOptions:{
      title:"Mesagerie"
    }
  }
});



const AppNavigator = createBottomTabNavigator({
  Home:{
    screen:_HomeNaviator,
    navigationOptions:{
      title:"Acasa"
    }
  },
  Feed:{
    screen:_FeedNaviator,
    navigationOptions:{
      title:"Feed ceva"
    }
  },
  Search:{
    screen:_SearchNaviator,
    navigationOptions:{
      title:"Cauta"
    }
  },
  Messages:{
    screen: _MessagesNaviator,
    navigationOptions:{
      title:"Mesagerie"
    }
  },
  Notification:{
    screen:NotificationNavigator,
    navigationOptions:{
      title:"Notificari"
    }
  },
  Another:{
    screen:AnotherScreen,
    navigationOptions:{
      title:"Mai mult"
    }
  }

},
{
  initialRouteName:"Messages"
}
)

export default createAppContainer(AppNavigator)