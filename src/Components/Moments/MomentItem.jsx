
import React, { Component } from 'react';
import {
    Cell,
    CellHeader,
    CellBody,
    Flex,
    FlexItem,
    Gallery,
    // Button
} from 'react-weui';

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
        this.renderGallery = this.renderGallery.bind(this);
    }
    renderGallery(imagesList) {
        return imagesList && imagesList.split(',').map((i, index) => {
            const img = JSON.parse(i);
            return (
                <FlexItem key={index}>
                    <img src={img.src} alt="" onClick={
                        (e) => {
                            this.setState({
                                gallery: {
                                    url: e.target.src,
                                    id: index
                                },
                                showGallery: true
                            }, () => {
                                console.log(this.state)
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
        console.log('swip', this.state.gallery.id) // this is call before setState callback
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
                <CellHeader>
                    <img src={momentContent.avator} alt="" className="avatar" />
                </CellHeader>
                <CellBody className="text__left">
                    <p className="moment-user">{momentContent.userName}</p>
                    <p className="moment-description">{momentContent.description}</p>
                    <Flex className="moment-gallery">
                        {this.renderGallery(imagesList)}
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