import React, { Component } from 'react';
import {
    Article,
    PullToRefresh,
    Cells
} from 'react-weui';

import MomentItem from './MomentItem'
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
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:50",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:40",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:33",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:25",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "18:10",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "likes": 0,
                "description": "welcome",
                "createTime": "16:00",
                "imagesList": '{"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}, {"src": "./static/media/portrait-lg.2c039e94.png"}'
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
            </Article>

        );
    }
};