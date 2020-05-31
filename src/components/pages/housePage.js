import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';



class HousePage extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    gotService = new GotService();

    onItemSelected = (id) => {
        this.props.history.push(`${id}`)
    }

    render() {

        if (this.state.error) {
            return (<ErrorMessage />)
        }

        return (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({ name, region }) => `${name} (${region})`} />
        )
    }
}

export default HousePage;