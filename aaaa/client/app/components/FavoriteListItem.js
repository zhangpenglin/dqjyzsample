
'use strict';
import React, {
    Component,
    PropTypes
} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import p from '../utils/Transform';

let width = Dimensions.get('window').width;

export default class FavoriteListItem extends Component {

    static propTypes = {
        courseThumbnail: PropTypes.number.isRequired,
        favoriteCountIcon: PropTypes.number.isRequired,
        totalTime: PropTypes.string,
        viewCount: PropTypes.string,
        favoriteCount: PropTypes.string,
        title: PropTypes.string
    };

    render() {
        return (
            <View>
                <View style={styles.itemSplitLine}/>
                <View style={styles.rowDataContainer}>
                    <Image
                        source={this.props.courseThumbnail}
                        style={styles.courseThumbnail}
                        />
                    <View style={styles.rightContainer}>
                        <Text style={styles.titleFont} numberOfLines={2}>{this.props.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.totalTime}>{this.props.totalTime}</Text>
                            <Text style={styles.viewCountFont}>{this.props.viewCount}</Text>
                            <Image style={styles.favoriteCount} source={this.props.favoriteCountIcon}/>
                            <Text style={styles.favoriteCountFont}>{this.props.favoriteCount}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemSplitLine}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowDataContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: p(40)
    },
    courseThumbnail: {
        width: p(328),
        height: p(216),
        resizeMode: 'stretch'
    },
    rightContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    titleFont: {
        fontSize: p(42),
        marginLeft: p(40),
        marginTop: p(12),
        color: '#333333',
        lineHeight: p(62),

    },
    totalTime: {
        fontSize: p(36),
        color: '#979797',
        marginLeft: p(40),
        marginBottom: p(12)
    },
    viewCountFont: {
        fontSize: p(36),
        color: '#979797',
        position: 'absolute',
        left: p(320)
    },
    favoriteCount: {
        height: p(42),
        width: p(42),
        position: 'absolute',
        left: p(532)
    },
    favoriteCountFont: {
        fontSize: p(36),
        color: '#979797',
        position: 'absolute',
        left: p(588)
    },
    itemSplitLine: {
        height: p(2),
        width: width,
        backgroundColor: '#F5F5F5'
    }
});