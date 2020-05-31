import React from 'react';
import ItemDetails, { Field } from '../itemDetails';
import GotService from '../../services/gotService';



const HouseItem = (props) => {

    const gotService = new GotService();

    return (
        <ItemDetails
            itemId={props.houseId}
            getData={gotService.getHouse} >
            <Field field='region' label='Region' />
            <Field field='words' label='Words' />
            <Field field='titles' label='Titles' />
            <Field field='ancestralWeapons' label='Ancestral Weapons' />
        </ItemDetails>
    )

}

export default HouseItem;