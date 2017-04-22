import React from 'react';
import {
  ListView,
  Platform,
  StyleSheet,
  BackAndroid,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import EventRow from './event_row';

import Route from '../../enums/route';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default class EventList extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener(
        'hardwareBackPress', backBtnCallback.bind(this)
      );
    }

    this.state = {
      rowCount: 0
    }
  }

  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <TouchableHighlight
            style={styles.navBarButton}
            onPress={settingsButtonCallback.bind(this)}
            underlayColor='#007aff'
          >
            <SimpleLineIcon name='settings'
              size={20}
              color='white'
            />
          </TouchableHighlight>
        </View>

        <ListView
          dataSource={dataSource.apply(this)}
          renderRow={renderRow.bind(this)}
          enableEmptySections={true}
          style={styles.list}/>
      </View>
    );
  }
}

function backBtnCallback() {
  const nav = this.props.navigator;
  const routes = nav.getCurrentRoutes();
  const curRoute = routes[routes.length - 1];
  if (curRoute.id === Route.hackPage) {
    nav.pop();
    return true;
  }
  return false;
}

function dataSource() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  return ds.cloneWithRows(this.props.events)
}

function renderRow(event) {
  const style = {
    marginTop: getMargin(),
    marginBottom: 15
  }
  this.state.rowCount++;
  return <EventRow event={event} navigator={this.props.navigator} style={style}/>;
}

function getMargin() {
  return Platform.OS === 'android' ? 15 : 25;
}

function settingsButtonCallback() {
  this.props.navigator.push({
    id: Route.settings
  });
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  },
  navBar: {
    height: 70,
    backgroundColor: '#007aff',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  navBarButton: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10
  }
});
