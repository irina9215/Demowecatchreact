
import React, { Component } from 'react';
import {
    Cell,
    CellHeader,
    CellBody,
    Flex,
    Gallery,
    Grids
} from 'react-weui';
import MomentActions from './MomentActions'

export default class MomentItem extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            gallery: {
                url: '',
                id: 0
            },
            showGallery: false
        }
    }

    renderThumbnailGrids(imagesList) {
        const grids = imagesList && imagesList.split(',').map((i, index) => {
            const img = JSON.parse(i);
            // eslint-disable-next-line
            const href = 'javascript:;';
            // eslint-disable-next-line
            const gird = new Object();
            gird['icon'] = <img src={img.src} alt="" onClick={(e) => {this.setState({gallery: {url: e.target.src,id: index},showGallery: true})}}/>;
            gird['label'] = '';
            gird['href'] = href;
            return gird
        })
        return ( <Grids data={grids}/> )
    }

    renderSwiper(imagesList) {
        if(!this.state.showGallery) return false;
        const galleryItems = imagesList && imagesList.split(',').map(i => JSON.parse(i).src);
        return (
            <Gallery src={galleryItems} show={this.state.showGallery}
                defaultIndex={this.state.gallery.id}
                onClick={e => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({ showGallery: false })
                }}>
            </Gallery>
        )
    }
    componentWillUnmount() {
        
    }
    render() {
        const momentContent = this.props.momentContent;
        const imagesList = momentContent.imagesList;

        return (
            <Cell>
                <CellHeader className="moment-avatar">
                    <img src={momentContent.avator} alt="" className="avatar" />
                </CellHeader>
                <CellBody className="text__left">
                    <p className="moment-user">{momentContent.userName}</p>
                    <p className="moment-description">{momentContent.description}</p>
                    <Flex className={imagesList.split(',').length === 1 ? 'moment-gallery moment-gallery__one' : "moment-gallery"}>
                        {this.renderThumbnailGrids(imagesList)}
                    </Flex>
                    {this.renderSwiper(imagesList)}
                    <div className="moment-info">
                        <span>{momentContent.createTime}</span>
                        {/* <MomentAction></MomentAction> */}
                    </div>
                </CellBody>
                <MomentActions />
            </Cell>
        );
    }
};