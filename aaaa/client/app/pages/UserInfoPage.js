import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    PixelRatio
} from 'react-native';

import p from '../utils/Transform';
import dataFormat from '../utils/DataUtils';
import TitleBar from '../components/TitleBar';
import UserInfoItem from '../components/UserInfoItem';

const ITEM_WIDTH = Dimensions.get('window').width;

export default class userInfoPage extends Component {

    //返回
    _onNavReturn(tag) {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _onClick() {
        Alert.alert('提示', '你点击了:头像' + " Tag:avater" + "正在开发中,敬请期待...");
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag + "正在开发中,敬请期待...");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <TitleBar
                    backgrountImage={require('../images/categoryPage/nav_bg.png') }
                    leftIcon={require('../images/categoryPage/return.png') }
                    titleText={'个人信息'}
                    tag={'return'}
                    onClick={() => this._onNavReturn() }
                    />


                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.showText}>头像</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={this._onClick.bind(this) }>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.avaterImg} source={require('../images/PersonalPage/photo.png') }/>
                                <Image style={styles.enterImg} source={require('../images/homePage/more.png') }/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'昵称'} tag={'userName'}
                        showTextMore={'默默'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'名字'} tag={'displayName'}
                        showTextMore={'张某某'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'手机号码'} tag={'mobile'}
                        showTextMore={'13903156379'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'邮箱'} tag={'email'}
                        showTextMore={'pengsanjun_bd@he.chinamobile.com'}
                        onClick={this._onMenuClick}/>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <View style={styles.split_line}/>
                    </View>
                    <View style={{ backgroundColor: '#F4EFF0', height: p(40) }}/>


                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'职位'} tag={'duty'}
                        showTextMore={'员工'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'部门ID'} tag={'departmentId'}
                        showTextMore={'4002'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'公司ID'} tag={'companyId'}
                        showTextMore={'4002'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'公司名称'} tag={'companyName'}
                        showTextMore={'中国移动通信集团终端有限公司河北分公司'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'部门名称'} tag={'departmentName'}
                        showTextMore={'市场销售部'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'员工编号'} tag={'employeeNumber'}
                        showTextMore={'30017281'}
                        onClick={this._onMenuClick}/>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <View style={styles.split_line}/>
                    </View>
                    <View style={{ backgroundColor: '#F4EFF0', height: p(40) }}/>


                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'上次登录时间'} tag={'lastLoginTime'}
                        showTextMore={dataFormat(1467256326726, 'yyyy-MM-dd') }
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'当月学习时长'} tag={'learnTimeMonth'}
                        showTextMore={'10.25' + ' 小时'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'当月登录次数'} tag={'loginCountMonth'}
                        showTextMore={'50' + ' 次' }
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'当年学习时长'} tag={'learnTimeYear'}
                        showTextMore={'200.65' + ' 小时'}
                        onClick={this._onMenuClick}/>
                    <UserInfoItem renderIcon={require('../images/homePage/more.png') }
                        showText={'当年登录次数'} tag={'loginCountYear'}
                        showTextMore={'6334' + ' 次' }
                        onClick={this._onMenuClick}/>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <View style={styles.split_line}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: p(250),
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
    avaterImg: {
        marginRight: p(28),
        height: p(200),
        width: p(200),
        borderWidth: p(5),
        borderColor: '#BDBDBD',
        borderRadius: p(100)
    },
    split_line: {
        backgroundColor: '#DADADA',
        height: 1 / PixelRatio.get(),
        marginLeft: p(40)
    }
});   