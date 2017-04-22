import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
