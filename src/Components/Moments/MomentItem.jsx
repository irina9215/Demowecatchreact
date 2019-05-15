
import React, { Component } from 'react';
import {
    Cell,
    CellHeader,
    CellBody,
    Flex,
    FlexItem
} from 'react-weui';

export default class MomentItem extends Component {
    constructor(probs) {
        super(probs);
        this.renderGallery = this.renderGallery.bind(this);
    }
    renderGallery(imagesList) {
        return imagesList && imagesList.split(',').map((i, index) => {
            const img = JSON.parse(i);
            return (
                <FlexItem key={index}>
                    <img src={img.src} alt=""></img>
                </FlexItem>
            )
        })
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
                        { this.renderGallery(imagesList) }
                    </Flex>
                    <div>
                        <span>{momentContent.createTime}</span>
                        {/* <MomentAction></MomentAction> */}
                    </div>
                </CellBody>
            </Cell>
        );
    }
};
