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

export default class UserInfoItem extends Component {

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
            <View>
                <View style={{ backgroundColor: '#ffffff' }}>
                    <View style={styles.split_line}/>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.showText}>{this.props.showText}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={this._onClick.bind(this) }>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.showTextMore}>{this.props.showTextMore}</Text>
                            <Image style={styles.enterImg} source={this.props.renderIcon}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: p(150),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    enterImg: {
        height: p(36),
        width: p(24),
        marginRight: p(40)
    },
    showText: {
        fontSize: p(48),
        marginLeft: p(45),
        color: '#2e2e2e'
    },
    showTextMore: {
        fontSize: p(42),
        marginRight: p(28),
        color: '#979797',
        width: p(500),
        textAlign: 'right'
    },
    split_line: {
        backgroundColor: '#DADADA',
        height: 1 / PixelRatio.get(),
        marginLeft: p(40)
    }
});
