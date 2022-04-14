import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";

///import screens
import CategoriesScreen from '../screens/Categories.js'
import HomeScreen from '../screens/Home.js'
import MessagesScreen from "../screens/MessagesScreen";
import Utils from "../screens/Utils";
import ExamCenters from "../screens/ExamCenters";
import ExamCentersRoutes from "../screens/ExamCentersRoutes";
import ExamTestsScreen from "../screens/ExamTestsScreen";
import SelectedTestScreen  from "../screens/SelectedTestScreen";
import PenaltyDetails from "../screens/PenaltyDetails";
import InfoScreen from "../screens/InfoScreen";

/// import navigators
import NotificationNavigator from './NotificationNavigator';
import AnotherNavigation from "./AnotherNavigation";
import { floor } from "react-native-reanimated";

// const _FeedNaviator = createStackNavigator({
//   Feed:{
//     screen:FeedScreen,
//     navigationOptions:{
//       title:"News"
//     }
//   }
// });


// const _SearchNaviator = createStackNavigator({
//   Feed:{
//     screen:SearchScreen,
//     navigationOptions:{
//       title:"Cauta ..."
//     }
//   }
// });


const _ExamTestsNaviator = createStackNavigator({
  Tests:{
    screen:ExamTestsScreen,
    navigationOptions:{
      title:"Teste"
    }
  },
  SelectedTest:{
    screen:SelectedTestScreen,
    navigationOptions:{
      headerShown:false
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



// const AppNavigator = createBottomTabNavigator({
//   Home:{
//     screen:_HomeNaviator,
//     navigationOptions:{
//       title:"Acasa"
//     }
//   },
//   Feed:{
//     screen:_FeedNaviator,
//     navigationOptions:{
//       title:"Feed ceva"
//     }
//   },
//   Tests:{
//     screen:_ExamTestsNaviator,
//     navigationOptions:{
//       title:"Teste"
//     }
//   },
//   Messages:{
//     screen: _MessagesNaviator,
//     navigationOptions:{
//       title:"Mesagerie"
//     }
//   },
//   Notification:{
//     screen:NotificationNavigator,
//     navigationOptions:{
//       title:"Notificari"
//     }
//   },
//   Another:{
//     screen:AnotherNavigation,
//     navigationOptions:{
//       title:"Mai mult"
//     }
//   }

// },
// {
//   initialRouteName:"Home"
// }
// )


const _HomeNaviator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Tests:{
    screen:ExamTestsScreen,
    navigationOptions:{
      headerShown:false,
      //title:"Teste"
    }
  },
  SelectedTest:{
    screen:SelectedTestScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Utils:{
    screen:Utils,
    navigationOptions:{
      headerShown:false
    }
  },
  InfoScreen:{
    screen:InfoScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  PenaltyDetails:{
    screen:PenaltyDetails,
    navigationOptions:{
      headerShown:false
    }
  },
  ExamCenters:{
    screen:ExamCenters,
    navigationOptions:{
      headerShown:false,
    }
  },
  ExamCentersRoutes:{
    screen:ExamCentersRoutes,
    navigationOptions:{
      headerShown:false,
    }
  }
});


// const MainNavigator = createSwitchNavigator({
//     Home=_HomeNaviator,
//     Tests=_TestsNaviator,

// })


export default createAppContainer(_HomeNaviator)