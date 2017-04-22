import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
  Slider,
  Alert,
  AsyncStorage
} from 'react-native';
import {
  Card
} from 'react-native-elements';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';

import CustomText from '../core/custom_text';

import DateUtil from '../../util/date_util.js';
import Route from '../../enums/route';

import Environment from '../../environment/environment';

export default class EventRow extends React.Component {
  constructor() {
    super();

    // retrieve percentage from server, or zero if no bet was done.
    this.state = {
      value: 0.5
    };

    this.event = null;
  }

  render() {
    const event = this.props.event;
    const daysFromNow = DateUtil.getDaysFromNow(event.closeDate);

    this.event = this.props.event;

    return (
      <TouchableOpacity onPress={onPressCallback.bind(this)} activeOpacity={0.9}>
        <Card title={compoundTitle(event)}
              containerStyle={this.props.style}>

          <View style={styles.buttonsContainer}>
            <View style={styles.scrollBar}>
              <Text>
                Я уверен на:
              </Text>
              <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
                {Math.round(this.state.value * 100)}%
              </Text>
              <Slider
                {...this.props}
                value={this.state.value}
                onValueChange={(value) => this.setState({value: value})} />
            </View>
          </View>

          <View>
            <Button
              onPress={confirmDialogue.bind(this)}
              title="Подтвердить!"
              color="green"
            />
          </View>

          <View style={styles.rowBlock}>
            <CustomText style={{color: 'gray', paddingLeft: 1}}>
              <AwesomeIcon name='clock-o' size={16}/>
              {' '}{daysFromNow}
            </CustomText>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

function compoundTitle(hack) {
  let icon, space;
  if (hack.category === 'TOP') {
    icon = <SimpleIcon name='fire' size={15} color='red'/>;
    space = ' ';
  }
  return (
    <Text>
      {icon}{space}
      <CustomText style={titleColor()}>
        {hack.title}
      </CustomText>
    </Text>
  );
}

function onPressCallback() {
}

function confirmButtonCallback() {
  confirmDialogue();
}

function confirmDialogue() {
  let that = this;

  Alert.alert(
    'Вы уверены?',
    '',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: sendPrediction.bind(that)},
    ],
    { cancelable: false }
  );
}

function sendPrediction() {
  let eventId = this.event.id;
  let prediction = Math.round(this.state.value * 100);

  AsyncStorage.getItem('client_token', (err, token) => {
    token = JSON.parse(token);
    fetch(Environment.BASE_URL + '/events/' + eventId + '/predictions' + '?token=' + token + '&prediction=' + prediction);
  });

  Alert.alert(
    'Ваше предсказание отправлено!',
    '',
    [
      {text: 'ОК'},
    ],
    { cancelable: false }
  );
}

function titleColor() {
  let colorCode = Platform.OS === 'ios' ? '#2a2a2a' : '#4c4747';
  return {color: colorCode};
}

const styles = StyleSheet.create({
  rowBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 15,
    color: 'gray'
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20
  },
  scrollBar: {
    flex: 1
  }
});
