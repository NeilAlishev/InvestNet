import React from 'react';
import {
  Navigator,
  AsyncStorage
} from 'react-native';

import HackPage from './hack';
import EventList from './event_list';
import Settings from './settings';

import Route from '../../enums/route';

export default class EventDispatcher extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: Route.eventList,
          events: this.props.events
        }}
        renderScene={navigatorRenderScene}/>
    );
  }
}

function navigatorRenderScene(route, navigator) {
  switch (route.id) {
    case Route.eventList:
      return <EventList events={route.events} navigator={navigator}/>;
    case Route.hackPage:
      return <HackPage hack={route.hack} navigator={navigator}/>;
    case Route.settings:
      return <Settings navigator={navigator}/>;
  }
}
