import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Article
} from 'react-weui';

import avator from '../../images/portrait-lg.png';

export default class MePage extends Component {
    render() {
        return (
            <Article>
                <Cells>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="avator profile" className="profile" />
                        </CellHeader>
                        <CellBody className="text__left">
                            <p>Irina</p>
                            <p style={{ fontSize: '13px', color: '#888888' }}>mywechatid</p>
                        </CellBody>
                        <CellFooter>
                            <img src={avator} alt="avator profile" className="avatar" />
                        </CellFooter>
                    </Cell>
                </Cells>
                <Cells>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Wechat Pay
                                </CellBody>
                        <CellFooter />
                    </Cell>
                </Cells>
                <Cells>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Favorites
                                </CellBody>
                        <CellFooter />
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            My Post
                                </CellBody>
                        <CellFooter />
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Cards & Offers
                                </CellBody>
                        <CellFooter />
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            sticker Gallery
                                </CellBody>
                        <CellFooter />
                    </Cell>
                </Cells>
                <Cells>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Settting
                                </CellBody>
                        <CellFooter />
                    </Cell>
                </Cells>
            </Article>

        );
    }
};