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
  Image,
  FlatList,
} from 'react-native';
import {info} from '../../dataSection';

class SectionInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{info.title}</Text>
        <FlatList
          key={'-'}
          data={info}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({item, index}) => {
            return (
              <View style={styles.container}>
                <View style={styles.titleView}>
                  <Text style={styles.titleFirst}>{item.title}</Text>
                  <Text style={styles.subtitleFirst}>{item.subTitle}</Text>
                </View>
                <FlatList
                  key={'#'}
                  data={item.data}
                  horizontal
                  keyExtractor={(item, index) => {
                    index.toString();
                  }}
                  renderItem={({item}) => {
                    return (
                      <View style={styles.menuContainer}>
                        <Image
                          source={{uri: item.imageUrl}}
                          style={styles.imageStyle}
                        />
                        {/* <Text style={styles.containerImage}>{item.title}</Text> */}
                        <Text numberOfLines={2} style={styles.titleSecond}>
                          {item.subtitle}
                        </Text>
                        <Text style={styles.containerImage}>
                          Rp {item.price}.000
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
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
  sectionMenu: {
    backgroundColor: 'red',
  },
  containerImage: {color: 'orange', marginVertical: 5},
  imageStyle: {borderRadius: 10, height: 150, width: 150},
  titleView: {
    marginHorizontal: 15,
  },
  titleFirst: {fontWeight: 'bold', fontSize: 25},
  subtitleFirst: {fontSize: 15, color: 'gray'},
  menuContainer: {margin: 10, width: 150},
  titleSecond: {color: 'black', fontSize: 14, fontWeight: 'bold'},
});

export default SectionInfo;
