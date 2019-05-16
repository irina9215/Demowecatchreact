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
import beer from './../../Images/beer.jpg'
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
                "description": "welcome",
                "createTime": "19:00",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/012/089/medium.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/728/medium.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/009/569/medium.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:50",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/007/901/medium.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:40",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/563/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/831/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/831/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:33",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/006/563/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:25",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:10",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/005/639/small.jpg"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "16:00",
                "imagesList": '{"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/010/774/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}, {"src": "https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/003/814/small.jpg"}'
            }
        ]

        return momentsList;
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
                            <img src={beer} alt="" />
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