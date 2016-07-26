import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio
} from 'react-native';

import p from './utils/Transform';
import TabNavigator from 'react-native-tab-navigator';
import {Provider} from 'react-redux';
import configureStore from './store/store'
import RouteCategory from '../app/pages/RouteCategory';
import RoutePersonal from '../app/pages/RoutePersonal';
import RouteHome from '../app/pages/RouteHome';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabIcon/home.png');
const HOME_FOCUS = require('./images/tabIcon/home_in.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabIcon/class.png');
const CATEGORY_FOCUS = require('./images/tabIcon/class_in.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabIcon/user.png');
const PERSONAL_FOCUS = require('./images/tabIcon/user_in.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME
        };
    }

    render() {
        const store = configureStore();

        return (
            <Provider store={store}>

                <TabNavigator
                    hidesTabTouch={false}
                    tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        titleStyle={styles.titleTab}
                        selectedTitleStyle={styles.titleTabSelect}
                        renderIcon={() => <Image style={styles.imageTab} source={HOME_NORMAL} />}
                        renderSelectedIcon={() => <Image style={styles.imageTab} source={HOME_FOCUS} />}
                        onPress={() => this.setState({ selectedTab: 'home' }) }>
                        <RouteHome/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'category'}
                        title="分类"
                        titleStyle={styles.titleTab}
                        selectedTitleStyle={styles.titleTabSelect}
                        renderIcon={() => <Image style={styles.imageTab}  source={CATEGORY_NORMAL} />}
                        renderSelectedIcon={() => <Image style={styles.imageTab}  source={CATEGORY_FOCUS} />}
                        onPress={() => this.setState({ selectedTab: 'category' }) }>
                        <RouteCategory/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'personal'}
                        title="我的"
                        titleStyle={styles.titleTab}
                        selectedTitleStyle={styles.titleTabSelect}
                        renderIcon={() => <Image style={styles.imageTab} source={PERSONAL_NORMAL} />}
                        renderSelectedIcon={() => <Image style={styles.imageTab}  source={PERSONAL_FOCUS} />}
                        onPress={() => this.setState({ selectedTab: 'personal' }) }>
                        <RoutePersonal/>
                    </TabNavigator.Item>
                </TabNavigator>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        height: p(146),
        backgroundColor: '#ffffff',
        marginBottom: p(10)
    },
    titleTab: {
        color: '#858585',
        fontSize: p(36),
        marginTop: p(10)
    },
    titleTabSelect: {
        color: '#ff3333',
        fontSize: p(36),
        marginTop: p(10)
    },
    imageTab: {
        marginTop: p(30),
        height: p(60),
        width: p(60)
    }
});