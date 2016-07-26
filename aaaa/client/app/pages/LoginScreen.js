'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native';

import p from '../utils/Transform';
import MainScreen from '../MainScreen';
import TouchableButton from '../components/TouchableButton';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    _pressButtonLogin() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.replace({
                name: 'MainScreen',
                component: MainScreen,
                params: {
                    user: this.state.userName,
                    pwd: this.state.passWord
                }
            })
        }
    }

    _onGetDynamicPassword() {
        Alert.alert('提示', "获取动态密码中...");
    }

    render() {
        const dismissKeyboard = require('dismissKeyboard');
        return (
            <TouchableWithoutFeedback onPress={() => dismissKeyboard() }>
                <Image source={require('../images/loginPage/login.png') } style={styles.backgroundImage}>
                    <View style={{ borderColor: '#d0d0d0', borderWidth: p(3), borderRadius: p(20), position: 'absolute', top: p(574), left: p(100), right: p(100) }}>
                        <TouchableWithoutFeedback onPress={() => dismissKeyboard() }>
                            <View style={{ flexDirection: 'row', height: p(146), alignItems: 'center', backgroundColor: '#ffffff', borderRadius: p(20) }}>
                                <Image style={{ width: p(64), height: p(64), marginLeft: p(38) }} source={require('../images/loginPage/login_user.png') }/>
                                <TextInput  style={{ height: p(146), flex: 1, marginLeft: p(38), fontSize: p(46) }}
                                    placeholder={'员工号或手机号码'}
                                    placeholderTextColor={'#b9b9b9'}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ height: p(3), backgroundColor: '#d0d0d0' }}/>
                        <TouchableWithoutFeedback onPress={() => dismissKeyboard() }>
                            <View style={{ flexDirection: 'row', height: p(146), alignItems: 'center', backgroundColor: '#ffffff', borderRadius: p(20) }}>
                                <Image style={{ width: p(64), height: p(64), marginLeft: p(38) }} source={require('../images/loginPage/login_lock.png') }/>
                                <TextInput style={{ height: p(146), flex: 1, marginLeft: p(38), fontSize: p(46) }}
                                    placeholder={'请输入密码或动态密码'}
                                    placeholderTextColor={'#b9b9b9'}
                                    underlineColorAndroid={'transparent'}
                                    secureTextEntry={true}
                                    />
                                <Image style={{ width: p(64), height: p(64), marginRight: p(38) }} source={require('../images/loginPage/login_eye.png') }/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ position: 'absolute', top: p(894), right: p(100) }}>
                        <TouchableOpacity onPress={() => this._onGetDynamicPassword() }>
                            <Text style={{ fontSize: p(46), color: '#b9b9b9' }}>获取动态密码</Text>
                        </TouchableOpacity></View>
                    <TouchableButton
                        underlayColor='#ff3333'
                        style={styles.bottom_view_login}
                        onPress={this._pressButtonLogin.bind(this) }
                        text='登录'>
                    </TouchableButton>
                </Image>

            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(1080),
        height: p(1920)
    },
    bottom_view_login: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: p(996),
        left: p(100),
        right: p(100),
        height: p(136),
        backgroundColor: '#ff3333',
        borderRadius: p(20)
    }
});