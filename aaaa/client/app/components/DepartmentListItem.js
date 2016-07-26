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
    PixelRatio
} from 'react-native';

import p from '../utils/Transform';

export default class DepartmentListItem extends Component {

    static propTypes = {
        logo: PropTypes.number.isRequired,
        index: PropTypes.string,
        initials: PropTypes.string,
        peopleNumber: PropTypes.string,
        loginCount: PropTypes.string

    };

    render() {
        return (
            <View>
                <View style={{ backgroundColor: '#f2f2f2' }}>
                    <View style={styles.item_split_line}/>
                </View>
                <View style={styles.rowData_view_container}>
                    <Text style={styles.left_text_index}  numberOfLines={1}>{this.props.index}</Text>
                    <Image
                        style={styles.left_image_logo}
                        source={this.props.logo}
                        />
                    <View style={styles.middle_view_container}>
                        <Text style={styles.middle_text_initials}>{this.props.initials}</Text>
                        <Text style={styles.middle_text_peopleNumber}>{this.props.peopleNumber}</Text>
                    </View>
                    <Text style={styles.right_text_loginCount}>{this.props.loginCount}</Text>
                </View>
                <View style={{ backgroundColor: '#f2f2f2' }}>
                    <View style={styles.item_split_line}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item_split_line: {
        backgroundColor: '#dedede',
        height: 1 / PixelRatio.get(),
        width: p(1000),
        marginLeft: p(40)
    },
    rowData_view_container: {
        height: p(170),
        paddingHorizontal: p(40),
        paddingVertical: p(25),
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        flexDirection: 'row'
    },
    left_text_index: {
        width: p(73),
        fontSize: p(42),
        color: '#6b6b6b'
    },
    left_image_logo: {
        width: p(120),
        height: p(120),
        marginLeft: p(17)
    },
    middle_view_container: {
        marginLeft: p(44)
    },
    middle_text_initials: {
        fontSize: p(48),
        color: '#2e2e2e'
    },
    middle_text_peopleNumber: {
        fontSize: p(42),
        color: '#6b6b6b'
    },
    right_text_loginCount: {
        fontSize: p(42),
        color: '#6b6b6b',
        position: 'absolute',
        right: p(40),
        top: p(64)
    }
});