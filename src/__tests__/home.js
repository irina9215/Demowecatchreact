import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount, shallow } from 'enzyme';
import assert from 'assert';
import {
    Tab
} from 'react-weui';
// import sinon from 'sinon';
import HomePage from './../components/Home';
configure({ adapter: new Adapter() });

describe('<HomePage></HomePage>', ()=>{

    it('renders three <Tab /> components', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(Tab)).to.have.lengthOf(4);
      });
      it('HomePage render weui-tab__panel', ()=> {
        assert( shallow(<HomePage/>).hasTag('<Tab>') );
    });
    it('HomePage render weui-search-bar', ()=> {
        assert( shallow(<HomePage/>).hasClass('weui-search-bar') );
    });
    it('should render HomePage Component', ()=>{

        const wrapper = mount(
            <HomePage />
        );

        assert(wrapper.instance() instanceof HomePage);
        assert(wrapper.find('.weui-tab').length > 0);
    });
});