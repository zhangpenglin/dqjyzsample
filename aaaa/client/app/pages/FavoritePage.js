'use strict';
import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    ListView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import p from '../utils/Transform';
import dataFormat from '../utils/DataUtils';
import FavoriteListItem from '../components/FavoriteListItem';

const width = Dimensions.get('window').width;
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
const INDEX_PIC = [
    require('../images/banner/index_pic_1.png'),
    require('../images/banner/index_pic_2.png'),
    require('../images/banner/index_pic_3.png'),
    require('../images/banner/index_pic_4.png'),
    require('../images/banner/index_pic_5.png'),
    require('../images/banner/index_pic_6.png')
];
const INDEX_TITLE = [
    '朝阳区举办党史知识竞赛 满满的正能量',
    '党在我心中为主题的纪念党95周年',
    '学习习近平总书记关于全面从严治党的重要',
    '学习习近平总书记关于全面从严治党的重要论述'
];

export default class HistoryPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            courseDatasource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            }),
            isRefreshing: false,
            isLoadMore: true
        };
    }

    componentDidMount() {
        this.setState({
            sectionID: this.props.sectionID,
            rowID: this.props.rowID
        });
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    courseDatasource: this.state.courseDatasource.cloneWithRows(responseData.movies)
                });
            })
            .done();//抛出异常  
    }

    // 搜索
    _onNavSearch() {
        Alert.alert('提示', "收藏搜索正在开发中,敬请期待...");
    }

    //返回
    _onNavReturn() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.titleBadground}
                    source={require('../images/categoryPage/nav_bg.png') }>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={this._onNavReturn.bind(this) }>
                            <Image style={styles.return} source={require('../images/categoryPage/return.png') }/>
                        </TouchableOpacity>
                        <Text style={styles.navTitleFont}>我的收藏</Text>
                        <TouchableOpacity onPress={this._onNavSearch.bind(this) }>
                            <Image style={styles.search} source={require('../images/categoryPage/search_nav.png') }/>
                        </TouchableOpacity>
                    </View>
                </Image>
                <View style={styles.lineBackground}></View>
                <ListView
                    initialListSize={10}
                    showsVerticalScrollIndicator={true}
                    dataSource={this.state.courseDatasource}
                    renderRow={this.renderCourseList.bind(this) }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this._onRefresh() }
                            tintColor="#ff3333"
                            title="Loading..."
                            titleColor="#979797"
                            colors={['#ff3333']}
                            progressBackgroundColor="#ffffff"
                            />
                    }
                    renderFooter={() => this._renderFooter() }
                    />
            </View>
        );
    }

    _onPressCourseItem(rowData, sectionID, rowID) {
        Alert.alert('提示', "课程正在开发中,敬请期待...");
    }

    _onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            this.fetchData();
            this.setState({
                isRefreshing: false
            });
        }, 2000);
    }

    _renderFooter() {
        if (this.state.isLoadMore) {
            return (
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: p(20) }}>
                    <ActivityIndicator size="small" color="#ff3333" />
                    <Text style={{ textAlign: 'center', fontSize: p(42), marginLeft: p(20), color: '#979797' }}>
                        数据加载中……
                    </Text>
                </View>
            );
        }
    }

    renderCourseList(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor='#f8f8f8' onPress={this._onPressCourseItem.bind(this) }>
                <View>
                    <FavoriteListItem
                        courseThumbnail={INDEX_PIC[parseInt(Math.random() * 6)]}
                        favoriteCountIcon={require('../images/homePage/star.png') }
                        title={INDEX_TITLE[parseInt(Math.random() * 4)]}
                        totalTime={"时长：" + dataFormat(parseInt(rowData.id), 'HH:mm:ss') }
                        viewCount={rowData.year == 0 ? "已学：0" : "已学：" + rowData.year}
                        favoriteCount={rowData.runtime + ""}
                        />
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleBadground: {
        height: p(132),
        width: width
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: p(132)
    },
    navTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        height: p(132)
    },
    navTitleFont: {
        fontSize: p(60),
        color: '#ffffff'
    },
    search: {
        width: p(58),
        height: p(58),
        marginRight: p(40)
    },
    return: {
        width: p(58),
        height: p(58),
        marginLeft: p(40)
    },
    lineBackground: {
        backgroundColor: '#f2f2f2',
        height: p(20),
        width: width
    }
});