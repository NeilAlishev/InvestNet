import React from 'react';
import {
  AsyncStorage
} from 'react-native';

import Spinner from './core/spinner';
import ChoosePage from './auth/choose';
import EventDispatcher from './hacks/event_dispatcher';

import Api from '../enums/api';
import Environment from '../environment/environment';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getEvents();
  }

  render() {
    const events = this.state.events;
    const error = this.state.error;

    if (events) {
      return <EventDispatcher events={events}/>;
    }
    if (error) {
      return <ChoosePage navigator={this.props.navigator} error={true}/>;
    }
    return <Spinner/>;
  }

  getEvents() {
    AsyncStorage.getItem('client_token', (err, token) => {
      token = JSON.parse(token);
      fetch(Environment.BASE_URL + Api.events + token)
        .then(response => response.json())
        .then(resp => {
          this.setState({
            events: resp.data,
            error: resp.error
          });
        })
        .catch((error) => console.error(error))
        .done();
    });
  }
}
