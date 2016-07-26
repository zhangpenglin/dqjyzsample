'use strict';
import React, { Component } from 'react';
import {
    Navigator,
    Platform,
    BackAndroid
} from 'react-native';

import CategoryPage from './TabCategory';

export default class RouteCategory extends Component {

    constructor(props) {
        super(props);
        this.onBackAndroid = this.onBackAndroid.bind(this);
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid() {
        const navigator = this.refs.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：' + routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    };

    render() {
        let defaultName = 'CategoryPage';
        let defaultComponent = CategoryPage;

        return (<Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}        
            ref='navigator'
            configureScene={(route) => {
                return Navigator.SceneConfigs.FadeAndroid;   
            } }    
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            } }
            />);
    }
}