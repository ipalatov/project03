import React, { Component } from 'react';
import styled from 'styled-components';


const ListItemBlock = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <ListItemBlock>
                    John Snow
                </ListItemBlock>
                <ListItemBlock>
                    Brandon Stark
                </ListItemBlock>
                <ListItemBlock>
                    Geremy
                </ListItemBlock>
            </ul>
        );
    }
}