'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Platform
    } = React;

var GiftedListView = require('react-native-gifted-listview');
var GiftedSpinner = require('react-native-gifted-spinner');

var TopBar = require('./TopBar');
var PostDetail = require('./PostDetail');
var PostDetailFromUrl = require('./PostDetailFromUrl');

var PostList = React.createClass({

    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options) {
        var API_URL = this.props.Request_Post.API_URL;
        let CATID = this.props.Request_Post.CATID;
        let PAGE_SIZE = this.props.Request_Post.PAGE_SIZE;

        fetch(API_URL + '?filter[posts_per_page]=' + PAGE_SIZE + '&filter[cat]=' + CATID + '&page=' + page)
            .then((response) => response.json())
            .then((responseData) => {
                this.data = responseData;
                page++;
                callback(this.data);
            })
            .catch((error) => {
                console.log(error);
                callback(null);
            })
            .done();
    },

    /**
     * When a row is touched
     * @param {object} rowData Row data
     */
        _onPress(rowData) {
        this.props.navigator.push({
            id:'PostDetailFromUrl',
            title:rowData.title.rendered,
            component:PostDetailFromUrl,
            passProps:{
                postTitle:rowData.title.rendered,
                api:this.props.Request_Post.API_URL,
                pid:rowData.id,
                //post:rowData
            }
        });
    },

    /**
     * Render a row
     * @param {object} rowData Row data
     */
        _renderRowView(rowData) {
        if(rowData.thumbnailurl){
            return (
                <TouchableHighlight
                    key={rowData.id}
                    style={customStyles.row}
                    underlayColor='#c8c7cc'
                    onPress={() => this._onPress(rowData)}
                    >
                    <View style={customStyles.PostItem}>
                        <Image source={{uri:rowData.thumbnailurl}} style={customStyles.PostThumbnail} resizeMode={Image.resizeMode.cover} />
                        <View style={customStyles.PostText}>
                            <Text style={customStyles.PostTitle}>{rowData.title.rendered}</Text>
                            <Text style={customStyles.PostDate}>{rowData.date.substring(0,10)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        }else{
            return (
                <TouchableHighlight
                    key={rowData.id}
                    style={customStyles.row}
                    underlayColor='#c8c7cc'
                    onPress={() => this._onPress(rowData)}
                    >
                    <View style={customStyles.PostItem}>
                        <View style={customStyles.PostText}>
                            <Text style={customStyles.PostTitle}>{rowData.title.rendered}</Text>
                            <Text style={customStyles.PostDate}>{rowData.date.substring(0,10)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        }


    },

    /**
     * Render a row
     * @param {object} rowData Row data
     */
        _renderSectionHeaderView(sectionData, sectionID) {
        return (
            <View style={customStyles.header}>
                <Text style={customStyles.headerTitle}>
                    {sectionID}
                </Text>
            </View>
        );
    },

    /**
     * Render the refreshable view when waiting for refresh
     * On Android, the view should be touchable to trigger the refreshCallback
     * @param {function} refreshCallback The function to call to refresh the listview
     */
        _renderRefreshableWaitingView(refreshCallback) {
        if (Platform.OS !== 'android') {
            return (
                <View style={customStyles.refreshableView}>
                    <Text style={customStyles.actionsLabel}>
                        ↓
                    </Text>
                </View>
            );
        } else {
            return (
                <TouchableHighlight
                    underlayColor='#c8c7cc'
                    onPress={refreshCallback}
                    style={customStyles.refreshableView}
                    >
                    <Text style={customStyles.actionsLabel}>
                        ↻
                    </Text>
                </TouchableHighlight>
            );
        }
    },

    /**
     * Render the refreshable view when the pull to refresh has been activated
     * @platform ios
     */
        _renderRefreshableWillRefreshView() {
        return (
            <View style={customStyles.refreshableView}>
                <Text style={customStyles.actionsLabel}>
                    ↻
                </Text>
            </View>
        );
    },

    /**
     * Render the refreshable view when fetching
     */
        _renderRefreshableFetchingView() {
        return (
            <View style={customStyles.refreshableView}>
                <GiftedSpinner />
            </View>
        );
    },

    /**
     * Render the pagination view when waiting for touch
     * @param {function} paginateCallback The function to call to load more rows
     */
        _renderPaginationWaitingView(paginateCallback) {
        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={paginateCallback}
                style={customStyles.paginationView}
                >
                <Text style={[customStyles.actionsLabel, {fontSize: 13}]}>
                    加载更多
                </Text>
            </TouchableHighlight>
        );
    },

    /**
     * Render the pagination view when fetching
     */
        _renderPaginationFetchigView() {
        return (
            <View style={customStyles.paginationView}>
                <GiftedSpinner />
            </View>
        );
    },

    /**
     * Render the pagination view when end of list is reached
     */
        _renderPaginationAllLoadedView() {
        return (
            <View style={customStyles.paginationView}>
                <Text style={customStyles.actionsLabel}>
                    ~
                </Text>
            </View>
        );
    },

    /**
     * Render a view when there is no row to display at the first fetch
     * @param {function} refreshCallback The function to call to refresh the listview
     */
        _renderEmptyView(refreshCallback) {
        return (
            <View style={customStyles.defaultView}>
                <Text style={customStyles.defaultViewTitle}>
                    此栏目下暂时没有内容
                </Text>

                <TouchableHighlight
                    underlayColor='#c8c7cc'
                    onPress={refreshCallback}
                    >
                    <Text>
                        ↻
                    </Text>
                </TouchableHighlight>
            </View>
        );
    },

    /**
     * Render a separator between rows
     */
        _renderSeparatorView(sectionID,rowID) {
        return (
            <View key={'${sectionID}-${rowID}'} style={customStyles.separator}/>
        );
    },

    render() {
        return (
            <View style={screenStyles.container}>

                <TopBar onIconClicked={this.props.openDrawer} title={this.props.title} />

                <GiftedListView
                    rowView={this._renderRowView}

                    onFetch={this._onFetch}
                    initialListSize={12} // the maximum number of rows displayable without scrolling (height of the listview / height of row)

                    firstLoader={true} // display a loader for the first fetching

                    pagination={true} // enable infinite scrolling using touch to load more
                    paginationFetchigView={this._renderPaginationFetchigView}
                    paginationAllLoadedView={this._renderPaginationAllLoadedView}
                    paginationWaitingView={this._renderPaginationWaitingView}

                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    refreshableViewHeight={50} // correct height is mandatory
                    refreshableDistance={40} // the distance to trigger the pull-to-refresh - better to have it lower than refreshableViewHeight
                    refreshableFetchingView={this._renderRefreshableFetchingView}
                    refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
                    refreshableWaitingView={this._renderRefreshableWaitingView}

                    emptyView={this._renderEmptyView}

                    //renderSeparator={(sectionID,rowID) => this._renderSeparatorView(sectionID,rowID)}

                    withSections={false} // enable sections
                    //sectionHeaderView={this._renderSectionHeaderView}

                    PullToRefreshViewAndroidProps={{
            colors: ['#fff'],
            progressBackgroundColor: '#003e82',
          }}
                    />
            </View>
        );
    }
});


var customStyles = {
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
    refreshableView: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionsLabel: {
        fontSize: 20,
        color: '#007aff',
    },
    paginationView: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    defaultView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    defaultViewTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    row: {
        paddingHorizontal: 12,
        paddingVertical:6
    },
    header: {
        backgroundColor: '#50a4ff',
        padding: 10,
    },
    headerTitle: {
        color: '#fff',
    },
    PostItem:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#cccccc',
        paddingBottom:6,
    },
    PostText:{
        flex:1,
    },
    PostTitle: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        color:'#4f4f4f'
    },
    PostDate: {
        textAlign: 'left',
    },
    PostThumbnail: {
        width: 108,
        height: 80,
        marginRight:12,
    },
};

var screenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    navBar: {
        height: 64,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarTitle: {
        color: '#fff',
        fontSize: 16,
        marginTop: 12,
    }
};

module.exports = PostList;
