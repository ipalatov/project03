import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';


export default class CharacterPage extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    gotService = new GotService();

    onItemSelected = (itemId) => {
        this.props.history.push(`${itemId}`)
    }

    render() {

        if (this.state.error) {
            return (<ErrorMessage />)
        }

        return (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`}

            />
        )
    }
}
