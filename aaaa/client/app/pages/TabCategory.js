'use strict';
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    Alert
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/index'
import p from '../utils/Transform';
import CourseListPage from './CourseListPage';

let width = Dimensions.get('window').width;

class CategoryPage extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        //分组(片段)
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
        };
    }

    _onNavSearch() {
        Alert.alert('提示', "分类导航搜索正在开发中,敬请期待...");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.titleBadground}
                    source={require('../images/categoryPage/nav_bg.png') }>
                    <View style={styles.navTitle}>
                        <Text style={styles.navTitleFont}>分类</Text>
                        <TouchableWithoutFeedback onPress={this._onNavSearch.bind(this) }>
                            <Image style={styles.search} source={require('../images/categoryPage/search_nav.png') }/>
                        </TouchableWithoutFeedback>
                    </View>
                </Image>
                <View style={styles.container}>
                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow  = {this.renderRow.bind(this) }
                        renderSectionHeader = {this.renderSectionHeader}
                        contentContainerStyle={styles.listContainer}
                        initialListSize={25}
                        />
                </View>
            </View>
        );
    }

    _onPressItem(rowData, sectionID, rowID) {
        const { navigator } = this.props;  
        if(navigator) {  
            navigator.push({  
                name: 'CourseListPage',  
                component: CourseListPage,  
                params:{  
                    sectionID: sectionID,  
                    rowID: rowID ,
                    rowData: rowData.name 
                }  
            })  
        }  
    }

    renderSectionHeader(sectionData, sectionID) {   
        return (
            <View>
                <View style={styles.groupStyle}>
                    <Text style={styles.groupFontStyle}>{sectionData}</Text>
                </View>
                <View style={{ height: p(20), backgroundColor: '#ffffff' }}></View>
            </View>
        );    
    }   

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={this._onPressItem.bind(this, rowData, sectionID, rowID) }>
                <View style={styles.rowStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: p(272) }}>
                        <Image style={styles.rowPointImage} source={require('../images/categoryPage/point.png') }/>
                        <View style={{ width: p(280) }}>
                            <Text numberOfLines={2} style={styles.rowText}>{rowData.name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }  

    componentDidMount() {
        this.props.courseActions.fetchCourseTypes()
        //this.fetchData();

        // this.fetchData2();
    }

    componentWillReceiveProps(props){
        console.log('receive props')
        console.log(props)
        const {types}=props;
        var groups = types,
            length = groups.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            group,
            children,
            childrenLength,
            child,
            i,
            j;

        for (i = 0; i < length; i++) {
            //遍历得到每一个分组(片段)
            group = groups[i];
            sectionIDs.push(group.id);
            //组(片段)ID对应组(内容)名
            dataBlob[group.id] = group.name;
            //根据相应的key得到对应的子组(片段)和总长度
            children = group.children;
            childrenLength = children.length;
            //rowIDs是一个二维数组
            rowIDs[i] = [];

            for (j = 0; j < childrenLength; j++) {
                //遍历得到每个子组(片段)下的子孩子
                child = children[j];
                //二维数组放的都是ID值
                rowIDs[i].push(child.id);
                dataBlob[group.id + ':' + child.id] = child;
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }

    fetchData2() {
        var responseData = {
            "data": [
                {
                    "id": 1,
                    "name": "党建",
                    "children": [
                        {
                            "id": 1,
                            "name": "党史知识"
                        },
                        {
                            "id": 2,
                            "name": "时代楷模"
                        },
                        {
                            "id": 3,
                            "name": "党课讲堂"
                        },
                        {
                            "id": 4,
                            "name": "廉政教育"
                        },
                        {
                            "id": 5,
                            "name": "制度建设"
                        },
                        {
                            "id": 6,
                            "name": "视频宣传"
                        },
                        {
                            "id": 7,
                            "name": "员工喜爱的好领导好领导"
                        },
                        {
                            "id": 8,
                            "name": "十八届四中全会"
                        },
                        {
                            "id": 9,
                            "name": "弘扬主旋律"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "企业文化",
                    "children": [
                        {
                            "id": 1,
                            "name": "企业文化期刊"
                        },
                        {
                            "id": 2,
                            "name": "幸福100"
                        },
                        {
                            "id": 3,
                            "name": "标杆案例"
                        },
                        {
                            "id": 4,
                            "name": "示范单位创建"
                        },
                        {
                            "id": 5,
                            "name": "企业内宣"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "共青团",
                    "children": [
                        {
                            "id": 1,
                            "name": "团建工作"
                        },
                        {
                            "id": 2,
                            "name": "青年志愿者"
                        },
                        {
                            "id": 3,
                            "name": "青年文明号"
                        },
                        {
                            "id": 4,
                            "name": "员工喜爱的好领导"
                        },
                        {
                            "id": 5,
                            "name": "绿色行动计划"
                        },
                        {
                            "id": 6,
                            "name": "青年文化"
                        },
                        {
                            "id": 7,
                            "name": "员工喜好"
                        },
                        {
                            "id": 8,
                            "name": "组织工作"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "党风建设",
                    "children": [
                        {
                            "id": 1,
                            "name": "党史知识"
                        },
                        {
                            "id": 2,
                            "name": "文化建设"
                        },
                        {
                            "id": 3,
                            "name": "文化讲堂"
                        }
                    ]
                }
            ]
        };

        var groups = responseData.data,
            length = groups.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            group,
            children,
            childrenLength,
            child,
            i,
            j;

        for (i = 0; i < length; i++) {
            //遍历得到每一个分组(片段)
            group = groups[i];
            sectionIDs.push(group.id);
            //组(片段)ID对应组(内容)名
            dataBlob[group.id] = group.name;
            //根据相应的key得到对应的子组(片段)和总长度
            children = group.children;
            childrenLength = children.length;
            //rowIDs是一个二维数组
            rowIDs[i] = [];

            for (j = 0; j < childrenLength; j++) {
                //遍历得到每个子组(片段)下的子孩子
                child = children[j];
                //二维数组放的都是ID值
                rowIDs[i].push(child.id);
                dataBlob[group.id + ':' + child.id] = child;
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });

    }
}
export default connect(state=>{
    return {
        types:state.courseTypes.types
    }
},dispatch=>{
    return {
        courseActions:bindActionCreators({...courseActions},dispatch)
    }
})(CategoryPage)

const styles = StyleSheet.create({
    titleBadground: {
        height: p(132),
        width: width
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
        position: 'absolute',
        top: p(37),
        right: p(40)
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    groupStyle: {
        backgroundColor: '#f7f9fc',
        height: p(118),
        marginTop: p(20),
        marginHorizontal: p(40),
        justifyContent: 'center',
        width: p(1000)
    },
    groupFontStyle: {
        fontSize: p(48),
        color: '#2e2e2e',
        marginLeft: p(72)
    },
    rowStyle: {
        paddingVertical: p(30),
        paddingHorizontal: p(40),
        backgroundColor: '#ffffff'
    },
    rowPointImage: {
        width: p(8),
        height: p(8),
        marginLeft: p(12)
    },
    rowText: {
        color: '#333333',
        fontSize: p(40),
        marginLeft: p(12),
        lineHeight: p(56)
    },
    listContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
