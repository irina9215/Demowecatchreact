import React, { Component } from 'react';
import { TabBarItem } from 'react-weui'
import actionIcon from './../../images/icon_nav_actionSheet.png';

export default class MomentActions extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            showActions: false
        }
    }
    render() {
        return (
            <TabBarItem
                active={this.state.showActions}
                onClick={e => this.setState({ showActions: true })}
                icon={<img alt="" src={actionIcon} />}
                label=""
            />
        )
    }
}