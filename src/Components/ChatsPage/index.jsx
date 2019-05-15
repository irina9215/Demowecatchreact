import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    Article,
    SearchBar,
    Badge
} from 'react-weui';

export default class ChatsPage extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            chatsList: []
        }
        this.getChatsList = this.getChatsList.bind(this);
    }
    getChatsList() {
        const chatsList = [
            {
                "userName": "Mickey",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 9,
                "message": "welcome",
                "msgTime": "19:00"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "18:50"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "18:40"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "18:33"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "18:25"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "18:10"
            },
            {
                "userName": "Mickey1",
                "avator": "./static/media/portrait-lg.2c039e94.png",
                "msgBadge": 0,
                "message": "welcome",
                "msgTime": "16:00"
            }
        ]

        return chatsList;
    }
    componentDidMount() {
        this.setState({chatsList: this.getChatsList()})
    } 
    renderItems() {
        const chats = this.state.chatsList;
        return chats && chats.map((i, index) => (
            <Cell key={index} access>
                <CellHeader>
                    <img src={i.avator} alt="" className="avatar" />
                    {i.msgBadge !== 0 ? <Badge preset="header" className="badge-icon">{i.msgBadge}</Badge> : null}
                </CellHeader>
                <CellBody className="text__left">
                    <p>{i.userName}</p>
                    <p style={{ fontSize: '13px', color: '#888888' }}>{i.message}</p>
                </CellBody>
                <CellBody className="text__right">
                    <p style={{ fontSize: '13px', color: '#888888' }}>{i.msgTime}</p>
                </CellBody>
            </Cell>
        ))
    }
    render() {
        return (
            <Article>
                <h1>Wechat(1)</h1>

                <SearchBar
                    placeholder="Name Search"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />
                <Cells>
                    {this.renderItems()}
                </Cells>
            </Article>

        );
    }
};