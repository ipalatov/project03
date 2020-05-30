import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import ItemDetails, { Field } from '../itemDetails';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';



class HousePage extends Component {
    state = {
        selectedHouse: 5,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    gotService = new GotService();

    onItemSelected = (id) => {
        this.setState({ selectedHouse: id })
    }

    render() {

        if (this.state.error) {
            return (<ErrorMessage />)
        }

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({ name, region }) => `${name} (${region})`} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse} >
                    <Field field='region' label='Region' />
                    <Field field='words' label='Words' />
                    <Field field='titles' label='Titles' />
                    <Field field='ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>)

        return (
            <RowBlock
                left={itemList}
                right={itemDetails} />
        )
    }
}

export default HousePage;