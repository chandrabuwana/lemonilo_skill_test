import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  SliderComponent,
  // AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderCenter from '../components/HeaderCenter';
import MenuSection from '../components/BarMenuSection';
import MiniMenu from '../components/MiniMenu';
import SliderBar from '../components/SliderBar';
import SectionInfo from '../components/SectionInfo';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
class UnderConstruction1 extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#1ba0e2',
    },
    headerLeft: () => (
      <View>
        <Icon
          name={'twitter'}
          size={30}
          style={{marginLeft: 20}}
          color="#FFFFFF"
        />
      </View>
    ),
    headerRight: () => (
      <Icon
        name={'ellipsis-h'}
        size={20}
        style={{marginRight: 20}}
        color="#FFFFFF"
      />
    ),
    headerTitle: () => <HeaderCenter />,
  };
  state = {
    userName: '',
  };

  getUserName = async (data) => {
    try {
      const {getUserName} = this.props;
      await AsyncStorage.setItem('userName', JSON.stringify(data));
      getUserName(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            // alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text>Under Construction</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
  },
});

export default UnderConstruction1;
