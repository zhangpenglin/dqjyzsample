'use strict';
import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    InteractionManager
} from 'react-native';

import LoginScreen from './pages/LoginScreen';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../app/images/spash.jpg');

export default class SplashScreen extends Component {

    componentDidMount() {
        const { navigator } = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: LoginScreen,
                    name: 'LoginScreen'
                });
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Image
                style={{ width: maxWidth, height: maxHeight }}
                source={splashImg}
                />
        );
    }
}