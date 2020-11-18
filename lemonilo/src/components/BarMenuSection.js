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
  FlatList,
  // AsyncStorage,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import menuSection from '../../menuSection';
import {data} from '../../dataSection';
class MenuSection extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          key={'-'}
          data={data}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          numColumns={5}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.container}>
                <View style={styles.viewContainer}>
                  <View
                    style={[
                      {backgroundColor: item.backgroundColor},
                      styles.iconView,
                    ]}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      size={23}
                      color={item.color}
                    />
                  </View>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{textAlign: 'center', fontSize: 12}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  viewContainer: {justifyContent: 'center', alignItems: 'center'},
  iconView: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuSection;
