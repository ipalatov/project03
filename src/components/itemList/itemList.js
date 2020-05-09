import React, {Component} from 'react';
import styled from 'styled-components';


const UlBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;

const LiBlock = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <UlBlock>
                <LiBlock>
                    John Snow
                </LiBlock>
                <LiBlock>
                    Brandon Stark
                </LiBlock>
                <LiBlock>
                    Geremy
                </LiBlock>
            </UlBlock>
        );
    }
}