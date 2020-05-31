import React, { Component } from 'react';
import styled from 'styled-components';
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

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({ itemList })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <LiBlock
                    key={id}
                    onClick={() => this.props.onItemSelected(id)} >
                    {label}
                </LiBlock>
            )
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);


        return (
            <UlBlock>
                {items}
            </UlBlock>
        );
    }
}