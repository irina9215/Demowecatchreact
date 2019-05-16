import React from 'react';
import { mount, shallow } from 'enzyme';
import assert from 'assert';
// import sinon from 'sinon';
import HomePage from './../components/Home';
describe('<HomePage></HomePage>', ()=>{

    describe('Components should render all related weui class', ()=> {
        it('HomePage render weui-tab__panel', ()=> {
            assert( shallow(<HomePage/>).hasClass('weui-tab__panel') );
        });
        it('HomePage render weui-search-bar', ()=> {
            assert( shallow(<HomePage/>).hasClass('weui-search-bar') );
        });
        
    });
    it('should render HomePage Component', ()=>{

        const wrapper = mount(
            <HomePage />
        );

        assert(wrapper.instance() instanceof HomePage);
        assert(wrapper.find('.weui-tab').length > 0);
    });
});