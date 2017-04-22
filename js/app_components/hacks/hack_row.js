import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button
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

export default class HackRow extends React.Component {
  render() {
    const hack = this.props.hack;
    const daysFromNow = DateUtil.getDaysFromNow(hack.date);

    return (
      <TouchableOpacity onPress={onPressCallback.bind(this)} activeOpacity={0.9}>
        <Card title={compoundTitle(hack)}
              containerStyle={this.props.style}>

          <View style={styles.buttonsContainer}>
            <View>
              <Button
                onPress={onYesPress.bind(this)}
                title="Да"
                color="green"
              />
            </View>

            <View>
              <Button
                onPress={onNoPress.bind(this)}
                title="Нет"
                color="red"
              />
            </View>
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

function onYesPress() {

}

function onNoPress() {

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
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
