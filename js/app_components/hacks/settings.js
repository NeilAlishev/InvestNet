import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
  Image
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../core/custom_text';

export default class HackPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity style={[styles.backButton, iosPadding()]}
            onPress={() => this.props.navigator.pop()}
          >
          <MaterialIcon name='arrow-left' size={25} color='white'/>
          </TouchableOpacity>

          <Text style={styles.navBarTitle}>Мой аккаунт</Text>
        </View>

        <View style={{margin: 10}}>
          <CustomText style={{fontSize: 30}}>Баланс : 157$</CustomText>
          <CustomText style={{fontSize: 15}}>Количество правильных предсказаний : 23</CustomText>
        </View>

        <View style={{marginTop: 20}}>
          <CustomText style={{alignSelf: 'center'}}>График моего баланса</CustomText>
          <Image source={require('../../resources/images/graph.png')} resizeMode='cover'
               style={styles.image}/>
        </View>
      </View>
    );
  }
}

function iosPadding() {
  if (Platform.OS === 'ios') {
    return {paddingTop: 10};
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navBar: {
    height: 70,
    backgroundColor: '#007aff',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  navBarTitle: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  image: {
    alignSelf: 'stretch',
    marginTop: 20,
    alignSelf: 'center'
  }
});
