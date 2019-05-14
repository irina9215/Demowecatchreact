
import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    Article,
    CellFooter
} from 'react-weui';

import avator from '../../Images/portrait-lg.png';

export default class DiscoverPage extends Component {
    state = {
        tab: 0
    };

    render() {
        return (
            <Article>
                <h1>Discover</h1>
                <Cells>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Moments
                    </CellBody>
                        <CellBody className="text__right">
                            <img src={avator} alt="" className="avatar" />
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
                            Scan
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
                            Top stories
                    </CellBody>
                        <CellFooter />
                    </Cell>
                    <Cell access>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Search
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
                            Game
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
                            Mini Program
                    </CellBody>
                        <CellFooter />
                    </Cell>
                </Cells>
            </Article>
        );
    }
};