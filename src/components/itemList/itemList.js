import React, { Component } from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/';



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

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({ charList })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <LiBlock
                    key={i}
                    onClick={() => this.props.onCharSelected(41+i)} >
                    {item.name}
                </LiBlock>
            )
        })
    }

    render() {

        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }
        
        const items = this.renderItems(charList);


        return (
            <UlBlock>
                {items}
            </UlBlock>
        );
    }
}