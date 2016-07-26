import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Platform,
    Image,
    ListView,
    TouchableOpacity,
    PixelRatio,
    Alert,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import p from '../utils/Transform';
import dataFormat from '../utils/DataUtils';
import ViewPager from 'react-native-viewpager';
import Header from '../components/Header';
import LineItem from '../components/LineItem';
import ImageButton from '../components/ImageButton';
import CourseListItem from '../components/CourseListItem';

const deviceWidth = Dimensions.get('window').width;
const top = Platform.OS === 'ios' ? 20 : 0;

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
const IMGS = [
    require('../images/banner/banner1.png'),
    require('../images/banner/banner2.png'),
    require('../images/banner/banner3.png'),
    require('../images/banner/banner1.png'),
    require('../images/banner/banner2.png'),
    require('../images/banner/banner1.png'),
    require('../images/banner/banner3.png')
];
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

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.renderPage = this.renderPage.bind(this);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
            listData: ds,
            isRefreshing: false,
            loaded: false,
            isLoadMore: true,
            opacity: 0,
            opacityInner: 0.5,
            searchTextColorOpacity: 0,
            searchplaceholderTextColorOpacity: 0
        };
        this.fetchDate = this.fetchData.bind(this);
    }

    renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    loaded: true
                });
                var ds = this.state.listData.cloneWithRows(responseData.movies);
                this.setState({ listData: ds });
            })
            .done();
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag + "正在开发中,敬请期待...");
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <ListView
                    initialListSize={1}
                    showsVerticalScrollIndicator={true}
                    dataSource={this.state.listData}
                    renderRow={this.renderHotRecommend.bind(this) }
                    renderHeader={() => {
                        return (
                            <View >
                                <View style={styles.viewpager}>
                                    <ViewPager
                                        dataSource={this.state.dataSource}
                                        renderPage={this.renderPage}
                                        isLoop={true}
                                        autoPlay={true}/>
                                </View>
                                <View style={styles.itemBoldSplitLine}></View>

                                <LineItem renderIcon={require('../images/homePage/more.png') }
                                    showText={'精选课程'} tag={'essenceLesson'}
                                    showTextMore={'更多'}
                                    onClick={this._onMenuClick}/>
                                <View style={styles.itemSplitLine}></View>
                                <ImageButton renderImageLeft={require('../images/homePage/home_page1.png') }
                                    renderImageRight={require('../images/homePage/home_page2.png') }
                                    showTextLeft={'学习习近平总书记关于全面从严治当的重要'} tag={'LessonLift'}
                                    showTextRight={'学习习近平总书记关于全面从严治当的重要论述'} tag={'LessonRghti'}
                                    onClick={this._onMenuClick}/>

                                <View style={styles.itemBoldSplitLine}></View>
                                <View>
                                    <LineItem renderIcon={require('../images/homePage/more.png') }
                                        showText={'热门推荐'} tag={'hotRecommend'}
                                        showTextMore={'更多'}
                                        onClick={this._onMenuClick}/>
                                    <View style={styles.itemSplitLine}></View>
                                </View>
                            </View>
                        )
                    } }
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
                    onScroll={(event) => { this._onGestureScroll(event) } }
                    scrollEventThrottle={10}
                    />
                <View style={{ height: p(132), width: deviceWidth, position: 'absolute', top: p(0), backgroundColor: "rgba(255,255,255," + (this.state.opacity > 0.9 ? 0.9 : this.state.opacity) + ")" }}>
                    <Header setHeaderStyle={{ height: p(88), backgroundColor: "rgba(233,233,233," + (this.state.opacityInner > 0.5 ? 0.5 : this.state.opacityInner) + ")", borderRadius: p(8), flexDirection: 'row', alignItems: 'center' }}
                        setInputSearch={{ marginTop: p(2), height: 45, width: deviceWidth, fontSize: p(40), color: this.state.searchTextColorOpacity < 0.2 ? '#ffffff' : "rgba(186,186,186," + this.state.searchTextColorOpacity + ")" }}
                        setPlaceHolderTextColor={this.state.searchplaceholderTextColorOpacity < 0.2 ? "rgba(255,255,255,1)" : "rgba(186,186,186," + this.state.searchplaceholderTextColorOpacity + ")"}
                        setSearchIcon={this.state.opacity < 0.2 ? require('../images/header/search_1_white.png') : require('../images/header/search_1_gray.png') }
                        setOpacity={this.state.opacity < 0.2 ? 0.5 : 0.5}
                        />
                </View>
            </View>
        );
    }

    _onGestureScroll(event) {
        const {y} = event.nativeEvent.contentOffset
        console.log(y / 200)
        this.setState({
            opacityInner: (((y / 200) < 0.5) ? 0.5 : (y / 200)),
            opacity: y / 200,
            searchTextColorOpacity: y / 200,
            searchplaceholderTextColorOpacity: y / 200
        })
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

    _onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            this.fetchData();
            this.setState({
                loaded: true,
                isRefreshing: false
            });
        }, 5000);
    }

    _pressRow(rowData, sectionID, rowID) {
        Alert.alert('提示', "课程详情资源正在开发中,敬请期待...");
    }

    renderHotRecommend(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity style={styles.itemPress}  onPress={this._pressRow.bind(this) }>
                <CourseListItem
                    courseThumbnail={INDEX_PIC[parseInt(Math.random() * 6)]}
                    viewCountIcon={require('../images/homePage/eye.png') }
                    favoriteCountIcon={require('../images/homePage/star.png') }
                    title={INDEX_TITLE[parseInt(Math.random() * 4)]}
                    totalTime={"时长：" + dataFormat(parseInt(rowData.id), 'HH:mm:ss') }
                    viewCount={rowData.year == 0 ? "0" : rowData.year + ""}
                    favoriteCount={rowData.runtime == 0 ? "0" : rowData.runtime + ""}
                    />
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    page: {
        width: deviceWidth
    },
    viewpager: {
        height: p(500),
        width: deviceWidth,
        marginTop: top
    }
});