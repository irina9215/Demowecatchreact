import React, { Component } from 'react';
import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem
} from 'react-weui';
import ChatsPage from '../ChatsPage';
import ContactsPage from '../ContactsPage';
import DiscoverPage from '../DiscoverPage';
import MePage from '../MePage';

import ChatsBtn from './../../Images/chats_icon.png';
import ContractsBtn from '../../Images/contracts_icon.png';
import DiscoverBtn from '../../Images/discover_icon.png';
import MeBtn from '../../Images/me_icon.png';

export default class HomePage extends Component {
    state={
        tab:0
    };

    render() {
        return (
            <Tab>
                <TabBody>
                    <div style={{display: this.state.tab === 0 ? null : 'none'}}>
                        <ChatsPage></ChatsPage>
                    </div>
                    <div style={{display: this.state.tab === 1 ? null : 'none'}}>
                        <ContactsPage></ContactsPage>
                    </div>
                    <div style={{display: this.state.tab === 2 ? null : 'none'}}>
                        <DiscoverPage></DiscoverPage>
                    </div>
                    <div style={{display: this.state.tab === 3 ? null : 'none'}}>
                        <MePage></MePage>
                    </div>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab === 0}
                        onClick={e=>this.setState({tab:0})}
                        icon={<img alt="" src={ChatsBtn}/>}
                        label="Chats"
                    />
                    <TabBarItem
                        active={this.state.tab === 1}
                        onClick={e=>this.setState({tab:1})}
                        icon={<img alt="" src={ContractsBtn}/>}
                        label="Contracts"
                    />
                    <TabBarItem
                        active={this.state.tab === 2}
                        onClick={e=>this.setState({tab:2})}
                        icon={<img alt="" src={DiscoverBtn}/>}
                        label="Discover"
                    />
                    <TabBarItem
                        active={this.state.tab === 3}
                        onClick={e=>this.setState({tab:3})}
                        icon={<img alt="" src={MeBtn}/>}
                        label="Me"
                    />
                </TabBar>

            </Tab>
        );
    }
};
