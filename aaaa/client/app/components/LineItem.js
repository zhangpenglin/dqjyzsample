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
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import p from '../utils/Transform';

export default class LineItem extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,
        showText: PropTypes.string,
        showTextMore: PropTypes.string,
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
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this._onClick.bind(this) }>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.showTextMore}>&nbsp; &nbsp; {this.props.showTextMore}</Text>
                        <Image style={styles.enterImg} source={this.props.renderIcon}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: p(120),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    enterImg: {
        height: p(36),
        width: p(24),
        marginRight: p(40)
    },
    showText: {
        fontSize: p(48),
        marginLeft: p(40),
        color: '#2e2e2e'
    },
    showTextMore: {
        fontSize: p(42),
        marginRight: p(14),
        color: '#979797'
    }
});