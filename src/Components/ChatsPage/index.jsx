import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Article,
    SearchBar,
    Badge
} from 'react-weui';

import avator from './../../Images/portrait-lg.png';

export default class ChatsPage extends Component {
    state = {
        tab: 0
    };

    render() {
        return (
            <Article>
                <h1>Wechat(1)</h1>

                <SearchBar
                    // onChange={this.handleChange.bind(this)}
                    // defaultValue={this.state.searchText}
                    placeholder="Female Name Search"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />
                <Cells>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                            <Badge preset="header" className="badge-icon">8</Badge>
                        </CellHeader>
                        <CellBody className="text__left">
                            <p>Miney</p>
                            <p style={{ fontSize: '13px', color: '#888888' }}>message</p>
                        </CellBody>
                        <CellFooter>
                            17:00
                                </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey
                                </CellBody>
                        <CellFooter>
                            18:02
                                </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey2
                                </CellBody>
                        <CellFooter>
                            18:03
                                </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey3
                                </CellBody>
                        <CellFooter>
                            18:05
                                </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey4
                                </CellBody>
                        <CellFooter>
                            18:05
                                </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                                </CellBody>
                        <CellFooter>
                            18:05
                                </CellFooter>
                    </Cell>
                </Cells>
            </Article>

        );
    }
};