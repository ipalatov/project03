import React, { Component } from 'react';
import './itemDetails.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';


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

export default class ItemDetails extends Component {

    gotService = new GotService();
    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item })
            })
    }

    render() {

        if (!this.state.item) {
            return (<span className='select-error'>Please select item</span>)
        }

        const { item } = this.state
        const { name } = item;

        return (
            <ItemDetailsBlock>
                <h4>{name}</h4>
                <ItemDetailsUl>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ItemDetailsUl>
            </ItemDetailsBlock>
        );
    }
}