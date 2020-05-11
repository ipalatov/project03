import React, { Component } from 'react';
import './charDetails.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';


const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
`;

const CharDetailsUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;


const CharDetailsLiLast = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);    
`;

const CharDetailsLi = styled(CharDetailsLiLast)`
border-bottom: 0;
`;

export default class CharDetails extends Component {

    gotService = new GotService();
    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const { charId } = this.props;
        if (!charId) {
            console.log(charId);
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char })
            })
    }

    render() {

        if (!this.state.char) {
            return (<span className='select-error'>Please select character</span>)
        }

        const { name, gender, born, died, culture } = this.state.char;

        return (
            <CharDetailsBlock>
                <h4>{name}</h4>
                <CharDetailsUl>
                    <CharDetailsLi>
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </CharDetailsLi>
                    <CharDetailsLi>
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </CharDetailsLi>
                    <CharDetailsLi>
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </CharDetailsLi>
                    <CharDetailsLiLast>
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </CharDetailsLiLast>
                </CharDetailsUl>
            </CharDetailsBlock>
        );
    }
}