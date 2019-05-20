import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    Article,
    SearchBar
} from 'react-weui';

export default class ContactsPage extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            contacts: []
        }
        this.getContactsList = this.getContactsList.bind(this);
    }
    getContactsList() {
        const contacts = [
            {
                "userName": "Mickey",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            },
            {
                "userName": "Mickey1",
                "avator": "https://tse3-mm.cn.bing.net/th?id=OIP.mB-yHg8OvrbuInd5TOecEgHaFj&w=273&h=203&c=7&o=5&dpr=2&pid=1.7"
            }

        ]

        return contacts;
    }
    componentDidMount() {
        this.setState({ contacts: this.getContactsList() })
    }
    renderItems() {
        const contractsList = this.state.contacts;
        return contractsList && contractsList.map((i, index) => (
            <Cell key={index} access>
                <CellHeader>
                    <img src={i.avator} alt="" className="avatar" />
                </CellHeader>
                <CellBody className="text__left">
                    {i.userName}
                </CellBody>
            </Cell>
        ))
    }
    render() {
        return (
            <Article>
                <h1>Contacts</h1>
                <SearchBar
                    placeholder="Female Name Search"
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