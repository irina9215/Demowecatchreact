import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    Article,
} from 'react-weui';

import avator from '../../Images/portrait-lg.png';

export default class ContactsPage extends Component {
    state = {
        tab: 0
    };

    render() {
        return (
            <Article>
                <h1>Contacts</h1>

                <Cells>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey2
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey3
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey4
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={avator} alt="" className="avatar" />
                        </CellHeader>
                        <CellBody className="text__left">
                            Mickey5
                        </CellBody>
                    </Cell>
                </Cells>
            </Article>

        );
    }
};