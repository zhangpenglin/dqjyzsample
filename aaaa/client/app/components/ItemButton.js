/**
 * Created by Administrator on 2016/7/6.
 */
'use strict';
import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from 'react-native';

import p from '../utils/Transform';

export default class ItemButton extends Component {

    static propTypes = {
        renderIcon1: PropTypes.number.isRequired,
        renderIcon2: PropTypes.number.isRequired,
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
            <TouchableOpacity onPress={this._onClick.bind(this)}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.iconImg} source={this.props.renderIcon1}/>
                        <Text style={styles.showText}>&nbsp; &nbsp; {this.props.showText}</Text>
                    </View>
                    <Image style={styles.enterImg} source={this.props.renderIcon2}/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: p(130),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: p(130),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconImg: {
        height: p(50),
        width: p(50),
        marginLeft: p(40)
    },
    enterImg: {
        height: p(22),
        width: p(50),
        marginRight: p(40)
    },
    showText: {
        fontSize: p(56),
        marginLeft: p(20),
        color: '#2e2e2e'
    }
});
