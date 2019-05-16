import React, { Component } from 'react';
import {
    Article,
    PullToRefresh,
    Cells,
    InfiniteLoader
} from 'react-weui';

import MomentItem from './MomentItem'
import './moment.scss'
import momentLoader from './../../Images/momentloader.png';

export default class Moments extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            momentsList: []
        }
        this.renderMonments = this.renderMonments.bind(this);
    }
    getMonmentsList() {
        const momentsList = [
            {
                "userName": "Mickey",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 9,
                "description": "全新梅赛德斯-AMG GT四门跑车进一步壮大了AMG GT家族阵容，这款名副其实的四门跑车，将助你在人生的赛道上，驭速前行，成就非凡",
                "createTime": "19:00",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/012/089/medium.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/728/medium.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/009/569/medium.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "傲慢的单身青年达西与偏见的二小姐伊丽莎白、富裕的单身贵族彬格莱与贤淑的大小姐吉英之间的感情纠葛，充分表达了作者本人的婚姻观，强调经济利益对恋爱和婚姻的影响。",
                "createTime": "18:50",
                "imagesList": ''
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "《儿童法案》中的菲奥娜•迈耶是一位高等法院的女法官，向来以严苛的睿智、精确和理性闻名。",
                "createTime": "18:40",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/563/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/831/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/831/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse1-mm.cn.bing.net/th?id=OIP.F235C36dvUQjvJELouITNAHaFj&w=283&h=203&c=7&o=5&dpr=2&pid=1.7",
                "likes": 0,
                "description": "西格拉姆大厦是著名建筑师密斯·凡·德·罗和菲利普·约翰逊的合作作品，建于1954～1958年，采用染色隔热玻璃幕墙，有逻辑且简洁的结构，完美诠释了“少即是多”的理念，是高层设计中的经典之作。",
                "createTime": "18:33",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/563/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "喜闻乐见的穿孔金属板渲染方法，中间的一系列 Photoshop 操作既简单又实用。而且有一丢丢的风骚",
                "createTime": "18:25",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse2-mm.cn.bing.net/th?id=OIP.8mKF_bca0V_nb_LVkVKawgHaEK&w=282&h=159&c=7&o=5&dpr=2&pid=1.7",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:10",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse1-mm.cn.bing.net/th?id=OIP.1J2xupEj_qiaYchuStGSDQAAAA&w=175&h=210&c=7&o=5&dpr=2&pid=1.7",
                "likes": 0,
                "description": "welcome",
                "createTime": "16:00",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}'
            }
        ]

        return momentsList;
    }
    getUserInfo() {
        const user = {
            userName: 'Irina',
            avatar: 'http://image11.m1905.cn/uploadfile/2012/0401/20120401065819191.jpg',
            headerImage: 'https://tse1-mm.cn.bing.net/th?id=OIP.BwAfwqRrVlPVF7RBASrdUAHaEo&w=289&h=178&c=7&o=5&dpr=2&pid=1.7'
        }
        return user;
    }
    componentDidMount() {
        this.setState({ momentsList: this.getMonmentsList() })
    }
    renderMonments(moments) {
        return moments && moments.map((i, index) => (
            <MomentItem momentContent={i} key={index} />
        ))
    }
    render() {
        const  myInfo = this.getUserInfo();
        return (
            <Article>
                <InfiniteLoader
                onLoadMore={ (resolve, finish) => {
                    //mock request
                    setTimeout( ()=> {
                        if(this.state.momentsList.length > 6){
                            finish()
                        }else{
                            // this.setState({
                            //     items: this.state.items.concat([this.state.items.length])
                            // }, ()=> resolve())
                            resolve()
                        }
                    }, 1000)
                }}
            >
             <PullToRefresh
                    loaderDefaultIcon={
                        (progress) => {
                            let style = {
                                transform: `rotate(-${progress * 5}deg)`
                            }
                            return (
                                <div style={{ flex: 1, padding: '5px' }}>
                                    <img src={momentLoader} alt="" width="40px" style={style} />
                                </div>
                            )
                        }
                    }
                    loaderLoadingIcon={
                        <div style={{
                            flex: 1,
                            padding: '5px',
                        }}>
                            <img src={momentLoader} alt="" width="40px" style={{
                                animation: '0.5s spin infinite linear'
                            }} />
                        </div>
                    }
                    onRefresh={
                        resolve => {
                            //mock add item after 1s and then resolve
                            setTimeout(() => {
                                // this.setState({
                                //     items: this.state.items.concat([this.state.items.length + 1])
                                // }, () => resolve())
                                resolve();
                            }, 1000)
                        }
                    }
                >
                    <div className="moment-body">
                        <div className="moment-header">
                            <img src={myInfo.headerImage} alt="" />
                        </div>
                        <div className="moment-selfinfo">
                            <span>{myInfo.userName}</span>
                            <img src={myInfo.avatar} alt=""></img>
                        </div>
                        <Cells>
                            {this.state.momentsList && this.renderMonments(this.state.momentsList)}
                        </Cells>
                    </div>

                </PullToRefresh>
           
            </InfiniteLoader>
                </Article>

        );
    }
};