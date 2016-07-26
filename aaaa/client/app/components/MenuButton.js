'use strict';
import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    PixelRatio
} from 'react-native';

import p from '../utils/Transform';

export default class MenuButton extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,
        showText: PropTypes.string,
        tag: PropTypes.string,
        onClick: PropTypes.func
    };

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.showText, this.props.tag);
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick.bind(this) }>
                <View style={{ alignItems: 'center', flex: 1, height: p(270) }}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: p(120),
        height: p(120),
        marginBottom: p(24),
        marginTop: p(36)
    },
    showText: {
        fontSize: p(48),
        color: '#2e2e2e',
        marginBottom: p(50)
    }
});
