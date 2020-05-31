import React, { useEffect, useState } from 'react';
import './itemDetails.css';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';


const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
`;

const ItemDetailsUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;


const ItemDetailsLiLast = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);    
`;

const ItemDetailsLi = styled(ItemDetailsLiLast)`
border-bottom: 0;
`;


const Field = ({ item, field, label }) => {
    return (
        <ItemDetailsLi>
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ItemDetailsLi>
    )
}

export { Field }

const ItemDetails = ({ itemId, getData, children }) => {

    const [item, setItem] = useState(null);

    useEffect(
        () => {
            updateItem();
        },
        [itemId]
    );

    const updateItem = () => {
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                setItem(item)
            })
    }



    if (!item) {
        return (<Spinner />)
    }

    const { name } = item;

    return (
        <ItemDetailsBlock>
            <h4>{name}</h4>
            <ItemDetailsUl>
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item });
                    })
                }
            </ItemDetailsUl>
        </ItemDetailsBlock>
    );

}

export default ItemDetails;