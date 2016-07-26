'use strict';
import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
} from 'react-native';

import p from '../utils/Transform';

export default class TouchableButton extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                activeOpacity={0.5}
                style={this.props.style}
                onPress={this.props.onPress}
                >
                <Text style={{ fontSize: p(50), color: '#ffffff' }}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
} 