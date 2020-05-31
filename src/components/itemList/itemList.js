import React, { useState, useEffect } from 'react';
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

const ItemList = ({ getData, renderItem, onItemSelected }) => {

    const [itemList, updateList] = useState(null);

    useEffect(
        () => {
            getData()
                .then((itemList) => {
                    updateList(itemList)
                })
        }, []
    );

    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <LiBlock
                    key={id}
                    onClick={() => onItemSelected(id)} >
                    {label}
                </LiBlock>
            )
        })
    }

    if (!itemList) {
        return <Spinner />
    }

    const items = renderItems(itemList);


    return (
        <UlBlock>
            {items}
        </UlBlock>
    );

}

export default ItemList;