import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    Dimensions,
    TouchableHighlight,
    Alert,
    PixelRatio
} from 'react-native';

import DepartmentListItem from '../components/DepartmentListItem';
import p from '../utils/Transform';

const { width } = Dimensions.get('window');
const AVATER = [
    require('../images/departmentPage/class_user_1.png'),
    require('../images/departmentPage/class_user_2.png'),
    require('../images/departmentPage/class_user_3.png'),
];

export default class TopicPersonalList extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var responseData = {
            "data": [
                {
                    "id": "1",
                    "peopleNumber": 200,
                    "children": [
                        {
                            "id": "1",
                            "initials": "张默默",
                            "loginCount": "经理",
                            "peopleNumber": 892
                        },
                        {
                            "id": "2",
                            "initials": "张默默",
                            "loginCount": "副经理",
                            "peopleNumber": 801
                        },
                        {
                            "id": "3",
                            "initials": "张默默",
                            "loginCount": "员工",
                            "peopleNumber": 753
                        },
                        {
                            "id": "4",
                            "initials": "张默默",
                            "loginCount": "经理助理",
                            "peopleNumber": 652
                        },
                        {
                            "id": "5",
                            "initials": "张默默",
                            "loginCount": "部门经理",
                            "peopleNumber": 524
                        },
                        {
                            "id": "6",
                            "initials": "张默默",
                            "loginCount": "中心经理",
                            "peopleNumber": 454
                        },
                        {
                            "id": "100",
                            "initials": "张默默",
                            "loginCount": "员工",
                            "peopleNumber": 353
                        },
                        {
                            "id": "101",
                            "initials": "张默默",
                            "loginCount": "经理",
                            "peopleNumber": 892
                        },
                        {
                            "id": "102",
                            "initials": "张默默",
                            "loginCount": "副经理",
                            "peopleNumber": 801
                        },
                        {
                            "id": "103",
                            "initials": "张默默",
                            "loginCount": "员工",
                            "peopleNumber": 753
                        },
                        {
                            "id": "104",
                            "initials": "张默默",
                            "loginCount": "经理助理",
                            "peopleNumber": 652
                        },
                        {
                            "id": "105",
                            "initials": "张默默",
                            "loginCount": "部门经理",
                            "peopleNumber": 524
                        },
                        {
                            "id": "106",
                            "initials": "张默默",
                            "loginCount": "中心经理",
                            "peopleNumber": 454
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
            group = groups[i];
            sectionIDs.push(group.id);
            dataBlob[group.id] = group.peopleNumber;
            children = group.children;
            childrenLength = children.length;
            rowIDs[i] = [];
            for (j = 0; j < childrenLength; j++) {
                child = children[j];
                rowIDs[i].push(child.id);
                dataBlob[group.id + ':' + child.id] = child;
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }



    _onPressCourseItem(rowData, sectionID, rowID) {
        Alert.alert('提示', rowData.initials + " 正在开发中 敬请期待...");
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    initialListSize={10}
                    showsVerticalScrollIndicator={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCourseList.bind(this) }
                    renderHeader={() => {
                        return (
                            <View style={{ flex: 1 }}>
                                <View style={{ backgroundColor: '#f2f2f2' }}>
                                    <View style={styles.top_Second_view_category}>
                                        <View style={styles.left_second_view_index}>
                                            <Text style={{ color: '#ffffff', fontSize: p(48) }}>次数</Text>
                                        </View>
                                        <View style={styles.right_second_view_time}>
                                            <Text style={{ color: '#2e2e2e', fontSize: p(48) }}>时长</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#f2f2f2' }}>
                                    <View style={styles.item_split_line}/>
                                </View>
                            </View>
                        )
                    } }
                    />
            </View>
        )
    }

    renderCourseList(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor='#f8f8f8' onPress={this._onPressCourseItem.bind(this, rowData) }>
                <View>
                    <DepartmentListItem
                        logo={AVATER[parseInt(Math.random() * 3)]}
                        index={rowID}
                        initials={rowData.initials}
                        peopleNumber={rowData.loginCount}
                        loginCount={rowData.peopleNumber + "次"}
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
    top_Second_view_category: {
        justifyContent: 'space-between',
        height: p(100),
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginHorizontal: p(40),
        marginVertical: p(28)
    },
    left_second_view_index: {
        alignItems: 'center',
        justifyContent: 'center',
        width: p(500),
        backgroundColor: '#ff7179',
        borderTopLeftRadius: p(8),
        borderBottomLeftRadius: p(8)
    },
    right_second_view_time: {
        alignItems: 'center',
        justifyContent: 'center',
        width: p(500),
        borderTopRightRadius: p(8),
        borderBottomRightRadius: p(8)
    },
    item_split_line: {
        backgroundColor: '#dedede',
        height: 1 / PixelRatio.get(),
        width: p(1000),
        marginLeft: p(40)
    }
});