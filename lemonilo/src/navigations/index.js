import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from '../screens/landingPage';
import UnderConstruction from '../screens/UnderConstruction';
import UnderConstruction1 from '../screens/UnderConstruction1';
import UnderConstruction2 from '../screens/UnderConstruction2';
import UnderConstruction3 from '../screens/UnderConstruction3';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// import {Icon} from '@fortawesome/react-native-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const Dashboard = createStackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name="home" color={'black'} size={23} />
        </View>
      ),
    }),
  },
  initialRouteName: 'LandingPage',
  activeColor: '#f0edf6',
  inactiveColor: '#226557',
});
const Simpan = createStackNavigator({
  UnderConstruction: {
    screen: UnderConstruction,
    tabBarOptions: {
      showIcon: true,
    },
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon icon={faCoffee} color={'black'} size={23} />
      ),
    }),
  },
  initialRouteName: 'Simpan',
});

const Pesanan = createStackNavigator({
  UnderConstruction1: {
    screen: UnderConstruction1,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon icon={faCoffee} color={'black'} size={23} />
      ),
    }),
  },
  initialRouteName: 'Pesanan',
});

const Inbox = createStackNavigator({
  UnderConstruction2: {
    screen: UnderConstruction2,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon icon={faCoffee} color={'black'} size={23} />
      ),
    }),
  },
  initialRouteName: 'Inbox',
});
const AkunSaya = createStackNavigator({
  UnderConstruction3: {
    screen: UnderConstruction3,
  },
  initialRouteName: 'Akun Saya',
});

const BottomNavigator = createBottomTabNavigator({
  Dashboard,
  Simpan,
  Pesanan,
  Inbox,
  AkunSaya,
});

const AppNav = createSwitchNavigator({
  BottomNavigator,
  Dashboard,
});

const App = createAppContainer(AppNav);
export default App;
