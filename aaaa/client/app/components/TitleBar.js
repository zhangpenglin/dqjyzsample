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
    Dimensions
} from 'react-native';

import p from '../utils/Transform';

const ITEM_WIDTH = Dimensions.get('window').width;

export default class TitleBar extends Component {

    static propTypes = {
        backgrountImage: PropTypes.number.isRequired,
        leftIcon: PropTypes.number.isRequired,
        titleText: PropTypes.string,
        tag: PropTypes.string,
        onClick: PropTypes.func
    };

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.tag);
        }
    }

    render() {
        return (
            <Image
                style={styles.titleBadground}
                source={this.props.backgrountImage}>
                <View style={styles.navTitle}>
                    <Text style={styles.navTitleFont}>{this.props.titleText}</Text>
                    <TouchableWithoutFeedback onPress={() => this._onClick() }>
                        <Image style={styles.return}  source={this.props.leftIcon}/>
                    </TouchableWithoutFeedback>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    titleBadground: {
        height: p(132),
        width: ITEM_WIDTH
    },
    navTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: ITEM_WIDTH,
        height: p(132)
    },
    navTitleFont: {
        fontSize: p(60),
        color: '#ffffff'
    },
    return: {
        width: p(58),
        height: p(58),
        position: 'absolute',
        top: p(37),
        left: p(40)
    }
});