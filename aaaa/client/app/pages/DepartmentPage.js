'use strict';
import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    ListView,
    TouchableHighlight,
    Alert,
    ScrollView
} from 'react-native';

import p from '../utils/Transform';
import TitleBar from '../components/TitleBar';
import DepartmentListItem from '../components/DepartmentListItem';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CourseListPage from './CourseListPage';
import TabBar from '../components/TabBar';
import RouteTopicDepartment from './RouteTopicDepartment';
import TopicPersonalList from '../components/TopicPersonalList';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

export default class userInfoPage extends Component {

    //返回   
    _onNavReturn(tag) {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <TitleBar
                    backgrountImage={require('../images/categoryPage/nav_bg.png') }
                    leftIcon={require('../images/categoryPage/return.png') }
                    titleText={'我的部门'}
                    tag={'return'}
                    onClick={() => this._onNavReturn() }
                    />
                    <View style={styles.top_view_item}>
                        <Image style={styles.top_image_logo} source={require('../images/departmentPage/class_cmcc_top.png') }/>
                        <View style={styles.top_view_text}>
                            <Text style={styles.top_text_company}>中移全通系统集成有限公司</Text>
                            <Text style={styles.top_text_member}>成员数：629人</Text>
                        </View>
                    </View>
                    <View style={styles.top_split_line}/>
                    <ScrollableTabView
                        edgeHitWidth={(maxWidth / 3) * 2}
                        renderTabBar={() => <TabBar
                            tabTextStyle={{ fontSize: p(48) }}
                            style={{borderBottomColor:'#dedede'}}
                            /> }>
                        <RouteTopicDepartment
                            router={this.props.router}
                            style={styles.TopicPage}
                            tabLabel="部门"/>
                        <TopicPersonalList
                            router={this.props.router}
                            style={styles.TopicPage}
                            tabLabel="个人"/>
                    </ScrollableTabView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    top_view_item: {
        flexDirection: 'row',
        height: p(204),
        width: maxWidth,
        backgroundColor: '#ffffff',
        paddingHorizontal: p(178),
        paddingVertical: p(35)
    },
    top_image_logo: {
        width: p(112),
        height: p(134)
    },
    top_view_text: {
        marginLeft: p(44),
        paddingVertical: p(12)
    },
    top_text_company: {
        color: '#0080cb',
        fontSize: p(48)
    },
    top_text_member: {
        color: '#6b6b6b',
        fontSize: p(36),
        lineHeight: p(68)
    },
    top_split_line: {
        backgroundColor: '#f5f5f5',
        height: p(2)
    },
    TopicPage: {
        height: maxHeight
    }
});   