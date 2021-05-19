import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('window').width;
export default function AlbumArt({url}) {
  return (
    <View style={{margin: 20}}>
      <Image
        resizeMode="contain"
        source={{uri: url}}
        style={{width: width, height: 300, borderRadius: 20}}
      />
    </View>
  );
}
