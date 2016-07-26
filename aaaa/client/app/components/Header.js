'use strict';
import React, {Component} from 'react';
import {
    Image,
    TextInput,
    View
} from 'react-native';

import p from '../utils/Transform';

export default class Header extends Component {
    render() {
        return (       
            <View style={{ position: 'absolute', top: p(22), left: p(52), right: p(52) }}>
                <View style={this.props.setHeaderStyle} opacity={this.props.setOpacity}>
                    <Image source={this.props.setSearchIcon} style={{ width: p(48), height: p(48), marginLeft: p(20) }}/>
                    <TextInput
                        style={this.props.setInputSearch}
                        placeholder='请输搜索关键字'
                        numberOfLines={1}
                        placeholderTextColor={this.props.setPlaceHolderTextColor}
                        underlineColorAndroid={'transparent'}
                        textAlignVertical='center'
                        textAlign='center'/>
                </View>
            </View>
        )
    }
}