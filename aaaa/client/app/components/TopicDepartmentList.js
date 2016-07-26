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
import DepartmentDetailsPage from '../pages/DepartmentDetailsPage';
import p from '../utils/Transform';

const { width } = Dimensions.get('window');

export default class TopicDepartmentList extends Component {

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
            })
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
                            "initials": "产品事业部",
                            "loginCount": "97102",
                            "peopleNumber": 190
                        },
                        {
                            "id": "2",
                            "initials": "系统运维",
                            "loginCount": "80301",
                            "peopleNumber": 115
                        },
                        {
                            "id": "3",
                            "initials": "市场技术部",
                            "loginCount": "31353",
                            "peopleNumber": 70
                        },
                        {
                            "id": "4",
                            "initials": "系统集成部",
                            "loginCount": "24352",
                            "peopleNumber": 63
                        },
                        {
                            "id": "5",
                            "initials": "人力资源部",
                            "loginCount": "14564",
                            "peopleNumber": 45
                        },
                        {
                            "id": "6",
                            "initials": "网络优化部",
                            "loginCount": "4543",
                            "peopleNumber": 43
                        },
                        {
                            "id": "100",
                            "initials": "增值业务部",
                            "loginCount": "1353",
                            "peopleNumber": 39
                        },
                        {
                            "id": "101",
                            "initials": "产品事业部",
                            "loginCount": "97102",
                            "peopleNumber": 190
                        },
                        {
                            "id": "102",
                            "initials": "系统运维",
                            "loginCount": "80301",
                            "peopleNumber": 115
                        },
                        {
                            "id": "103",
                            "initials": "市场技术部",
                            "loginCount": "31353",
                            "peopleNumber": 70
                        },
                        {
                            "id": "104",
                            "initials": "系统集成部",
                            "loginCount": "24352",
                            "peopleNumber": 63
                        },
                        {
                            "id": "105",
                            "initials": "人力资源部",
                            "loginCount": "14564",
                            "peopleNumber": 45
                        },
                        {
                            "id": "106",
                            "initials": "网络优化部",
                            "loginCount": "4543",
                            "peopleNumber": 43
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



    _onPressDepartmentItem(rowData, sectionID, rowID) {
        // Alert.alert('提示', rowData.initials + " 正在开发中 敬请期待...");  
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'DepartmentDetailsPage',
                component: DepartmentDetailsPage,
                params: {
                    sectionID: sectionID,
                    rowID: rowID,
                    rowData: rowData.initials,
                    rowDataCount: rowData.peopleNumber
                }
            })
        }
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
            <TouchableHighlight underlayColor='#f8f8f8' onPress={this._onPressDepartmentItem.bind(this, rowData, sectionID, rowID) }>
                <View>
                    <DepartmentListItem
                        logo={require('../images/departmentPage/class_cmcc.png') }
                        index={rowID}
                        initials={rowData.initials}
                        peopleNumber={rowData.peopleNumber + "人"}
                        loginCount={rowData.loginCount + "次"}
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