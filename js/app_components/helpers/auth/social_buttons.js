import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SocialButtons extends React.Component {
  render() {
    return (
      <View>
        <View style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
          <TouchableHighlight
            style={[styles.button, styles.githubButton]}
            onPress={githubAuth.bind(this)}
            underlayColor='#dddddd'
          >
            <View style={styles.inline}>
              <Text style={[styles.githubButtonText, styles.buttonText]}>
                Войти
              </Text>
              <Text style={styles.githubButtonText}> через </Text>
              <Icon name='github'
                style={[styles.githubIcon, githubIconMargin()]}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function githubAuth() {
  this.props.navigator.push({
    id: Route.githubAuth
  });
};

function githubIconMargin() {
  if (Platform.OS === 'android') {
    return {marginTop: 3};
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 30
  },
  githubButton: {
    backgroundColor: '#f2f2f2'
  },
  githubButtonText: {
    fontSize: 20,
    color: 'black'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  githubIcon: {
    fontSize: 23,
    color: 'black'
  },
  inline: {
    flexDirection: 'row'
  }
});
