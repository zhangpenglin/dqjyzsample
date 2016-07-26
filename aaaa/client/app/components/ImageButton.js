/**
 * Created by Administrator on 2016/7/5.
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
    StyleSheet,
    PixelRatio
} from 'react-native';

import p from '../utils/Transform';

export default class ImageButton extends Component {

    static propTypes = {
        renderImageLeft: PropTypes.number.isRequired,
        renderImageRight: PropTypes.number.isRequired,
        showTextLeft: PropTypes.string,
        showTextRight: PropTypes.string,
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
                <View style={styles.contaner}>
                    <View>
                        <Image style={styles.iconImg} source={this.props.renderImageLeft}/>
                        <Text numberOfLines={2} style={styles.showText}>{this.props.showTextLeft}</Text>
                    </View>
                    <View style={{ marginLeft: p(28) }}>
                        <Image style={styles.iconImg} source={this.props.renderImageRight}/>
                        <Text numberOfLines={2} style={styles.showText}>{this.props.showTextRight}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>


        );
    }
}

const styles = StyleSheet.create({
    contaner: {
        flexDirection: 'row',
        paddingHorizontal: p(40),
        paddingVertical: p(40),
        backgroundColor: '#ffffff'
    },
    iconImg: {
        width: p(486),
        height: p(270)
    },
    showText: {
        width: p(486),
        color: '#333333',
        fontSize: p(42),
        marginTop: p(40),
        lineHeight: p(62)
    }
});
