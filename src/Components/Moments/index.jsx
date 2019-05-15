import React, { Component } from 'react';
import {
    Article
} from 'react-weui';

import MomentItem from './MomentItem'

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
        this.setState({momentsList: this.getMonmentsList()})
    }
    renderMonments(moments) {
        return moments && moments.map((i, index) => (
            <MomentItem momentContent={i} key={index} />
        ))
    }
    render() {

        return (
            <Article>
                { this.state.momentsList && this.renderMonments(this.state.momentsList) }
            </Article>

        );
    }
};