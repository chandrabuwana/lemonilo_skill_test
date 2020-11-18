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
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {dataMiniMenu} from '../../dataSection';
class MiniMenu extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          key={'-'}
          data={dataMiniMenu}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          numColumns={5}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.container}>
                <View style={styles.viewContainer}>
                  <View style={[styles.iconView]}>
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

export default MiniMenu;
