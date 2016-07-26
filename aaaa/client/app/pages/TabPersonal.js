import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    PixelRatio,
    Dimensions,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';

import MenuButton from '../components/MenuButton';
import ItemButton from '../components/ItemButton';
import p from '../utils/Transform';
import UserInfoPage from './UserInfoPage';
import DepartmentPage from './DepartmentPage'
import HistoryPage from './HistoryPage'
import FavoritePage from './FavoritePage'

const width = Dimensions.get('window').width;

export default class PersonalPage extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._onMenuClick = this._onMenuClick.bind(this);
    }

    _onMenuClick(title, tag) {
        if (tag == 'group') {
            const { navigator } = this.props;
            if (navigator) {
                navigator.push({
                    name: 'DepartmentPage',
                    component: DepartmentPage
                })
            }
        } else if (tag == 'history') {
            const { navigator } = this.props;
            if (navigator) {
                navigator.push({
                    name: 'HistoryPage',
                    component: HistoryPage
                })
            }
        } else if (tag == 'favorite') {
            const { navigator } = this.props;
            if (navigator) {
                navigator.push({
                    name: 'FavoritePage',
                    component: FavoritePage
                })
            }
        } else {
            Alert.alert('提示', '你点击了:' + title + " Tag:" + tag + "正在开发中,敬请期待...");
        }
    }

    onUserInfos() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'UserInfoPage',
                component: UserInfoPage
            })
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScrollView>
                        <Image
                            style={styles.titleUserBg}
                            source={require('../images/PersonalPage/mine_bg.png') }>
                            <View style={styles.emInfo}>
                                <Text style={styles.fontInfo1}>
                                    张某某
                                </Text>
                                <Text style={styles.fontInfo2}>
                                    工号: &nbsp; &nbsp; 23442432
                                </Text>
                            </View>
                        </Image>

                        <View style={styles.timeContainer}>
                            <View style={styles.containerTitle}>
                                <Image
                                    style={styles.timeImage1}
                                    source={require('../images/PersonalPage/month_bg.png') }>
                                    <Text style={styles.fontTime}>月度</Text>
                                </Image>
                                <View style={styles.describeTitle1}>
                                    <Text style={styles.login}>
                                        登录次数:
                                    </Text>
                                    <Text style={styles.loginNumber}>
                                        422
                                    </Text>
                                </View>
                                <View style={styles.describeTitle2}>
                                    <Text style={styles.mobile}>
                                        手机学时:
                                    </Text>
                                    <Text style={styles.mobileNumber}>
                                        142.2
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.itemSpacing}>
                                <Image
                                    style={styles.timeImage2}
                                    source={require('../images/PersonalPage/month_bg.png') }>
                                    <Text style={styles.fontTime}>年度</Text>
                                </Image>
                                <View style={styles.describeTitle1}>
                                    <Text style={styles.login}>
                                        登录次数:
                                    </Text>
                                    <Text style={styles.loginNumber}>
                                        232
                                    </Text>
                                </View>
                                <View style={styles.describeTitle2}>
                                    <Text style={styles.mobile}>
                                        手机学时:
                                    </Text>
                                    <Text style={styles.mobileNumber}>
                                        24.2
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.sawtoothSplitLineView}>
                            <Image style={styles.sawtoothSplitLine}
                                source={require('../images/PersonalPage/wave_long.png') }/>
                        </View>

                        <View style={styles.menuView}>
                            <MenuButton renderIcon={require('../images/PersonalPage/history.png') }
                                showText={'我的足迹'} tag={'history'}
                                onClick={this._onMenuClick.bind(this) }/>
                            <MenuButton renderIcon={require('../images/PersonalPage/favorite.png') }
                                showText={'我的收藏'} tag={'favorite'}
                                onClick={this._onMenuClick.bind(this) }/>
                            <MenuButton renderIcon={require('../images/PersonalPage/group.png') }
                                showText={'我的部门'} tag={'group'}
                                onClick={this._onMenuClick.bind(this) }/>
                        </View>

                        <View style={styles.splitLine}/>

                        <ItemButton renderIcon1={require('../images/PersonalPage/share.png') }
                            showText={'分享APP'} tag={'share'}
                            renderIcon2={require('../images/PersonalPage/enter.png') }
                            onClick={this._onMenuClick.bind(this) }/>
                        <View style={styles.itemSplitLine}/>
                        <ItemButton renderIcon1={require('../images/PersonalPage/opinion.png') }
                            showText={'意见反馈'} tag={'opinion'}
                            renderIcon2={require('../images/PersonalPage/enter.png') }
                            onClick={this._onMenuClick.bind(this) }/>
                        <View style={styles.itemSplitLine}/>
                    </ScrollView>
                </View >

                <View style={{ position: 'absolute', top: p(200), left: p(120) }}>
                    <TouchableOpacity onPress={() => this.onUserInfos() }>
                        <View>
                            <Image style={styles.avaterBg} source={require('../images/PersonalPage/photo_bg.png') }>
                                <Image style={styles.avatar} source={require('../images/PersonalPage/photo.png') }/>
                            </Image>
                        </View>
                    </TouchableOpacity>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    titleUserBg: {
        height: p(420),
        width: width,
        backgroundColor: '#ffffff'
    },

    //用户头像信息
    avaterBg: {
        borderRadius: p(130),
        width: p(260),
        height: p(260)
    },
    avatar: {
        borderRadius: p(121),
        width: p(242),
        height: p(242),
        marginLeft: p(7),
        marginTop: p(7)
    },

    //员工姓名、工号信息
    emInfo: {
        marginLeft: p(530),
        marginTop: p(142)
    },
    fontInfo1: {
        color: '#ffffff',
        fontSize: p(48)
    },
    fontInfo2: {
        color: '#ffffff',
        fontSize: p(48),
        marginTop: p(34)
    },

    //年度、月度布局
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    timeImage1: {
        width: p(116),
        height: p(86),
        marginTop: p(80),
        marginLeft: p(84)
    },
    timeImage2: {
        width: p(116),
        height: p(86),
        marginTop: p(80),
        marginLeft: p(84)
    },
    fontTime: {
        color: '#ffffff',
        fontSize: p(42),
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    containerTitle: {
        flex: 1
    },
    describeTitle1: {
        flexDirection: 'row',
        marginTop: p(60)
    },
    describeTitle2: {
        flexDirection: 'row',
        marginTop: p(38)
    },
    login: {
        fontSize: p(48),
        marginLeft: p(84),
        color: '#2e2e2e',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    loginNumber: {
        fontSize: p(60),
        color: '#ff3333',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: p(40)
    },
    itemSpacing: {
        flex: 1,
        paddingBottom: p(60)
    },
    mobile: {
        fontSize: p(48),
        marginLeft: p(84),
        color: '#2e2e2e',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    mobileNumber: {
        fontSize: p(48),
        color: '#2e2e2e',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: p(40)
    },

    //锯齿分割线
    sawtoothSplitLineView: {
        height: p(46),
        width: width,
        backgroundColor: '#f2f2f2'
    },
    sawtoothSplitLine: {
        height: p(26),
        width: width,
        backgroundColor: '#f2f2f2'
    },

    //足迹，收藏，部门布局
    menuView: {
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },

    //分割线
    splitLine: {
        backgroundColor: '#f2f2f2',
        height: p(20)
    },
    itemSplitLine: {
        backgroundColor: '#f5f5f5',
        height: p(2)
    }
});