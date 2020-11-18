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
  // AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class HeaderCenter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexIcon}>
          <Icon name={'search'} size={20} color="gray" />
        </View>
        <View style={styles.flexInput}>
          <TextInput
            placeholder="cari apa yang kamu mau"
            style={{height: 50}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  flexIcon: {flex: 0.5, justifyContent: 'center', alignItems: 'center'},
  flexInput: {
    flex: 2.5,
    alignItems: 'flex-start',
  },
});

export default HeaderCenter;
