
import React, { Component } from 'react';
import {
    Cell,
    CellHeader,
    CellBody,
    Flex,
    FlexItem,
    Gallery,
    // Grids
    // Button
} from 'react-weui';
//Modified FlexItem
// import FlexItem from './../flex/flex_item'

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
    renderThumbnail(imagesList) {
        return imagesList && imagesList.split(',').map((i, index) => {
            const img = JSON.parse(i);
            return (
                <FlexItem component="div" key={index}>
                    <img src={img.src} alt="" className={ imagesList.split(',').length === 1 ? 'img_origin' : null }
                    onClick={
                        (e) => {
                            this.setState({
                                gallery: {
                                    url: e.target.src,
                                    id: index
                                },
                                showGallery: true
                            })
                        }
                    }></img>
                </FlexItem>
            )
        })
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
                        {this.renderThumbnail(imagesList)}
                    </Flex>
                    {this.renderSwiper(imagesList)}
                    <div>
                        <span>{momentContent.createTime}</span>
                        {/* <MomentAction></MomentAction> */}
                    </div>
                </CellBody>
            </Cell>
        );
    }
};