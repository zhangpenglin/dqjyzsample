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
    ListView
} from 'react-native';

import p from '../utils/Transform';
import CourseListItem from '../components/CourseListItem';

let width = Dimensions.get('window').width;
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class CourseList extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            courseDatasource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            }),
        };
    }

    componentDidMount() {
        this.setState({
            sectionID: this.props.sectionID,
            rowID: this.props.rowID,
            rowData: this.props.rowData
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
        Alert.alert('提示', "分类导航搜索正在开发中,敬请期待...");
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
                        <Text style={styles.navTitleFont}>{this.state.rowData}</Text>
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
                    renderRow={this.renderCourseList.bind(this) } />
            </View>
        );
    }

    _onPressCourseItem(rowData, sectionID, rowID) {
        Alert.alert('提示', "课程正在开发中,敬请期待...");
    }

    renderCourseList(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor='#f8f8f8' onPress={this._onPressCourseItem.bind(this) }>
                <View>
                    <CourseListItem
                        courseThumbnail={{ uri: rowData.posters.thumbnail }}
                        viewCountIcon={require('../images/homePage/eye.png') }
                        favoriteCountIcon={require('../images/homePage/star.png') }
                        title={rowData.title}
                        totalTime={"时长：" + rowData.runtime}
                        viewCount={rowData.year + ""}
                        favoriteCount={rowData.id}
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