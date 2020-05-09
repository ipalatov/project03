import React, { Component } from 'react';
import './charDetails.css';
import styled from 'styled-components';

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

    render() {
        return (
            <CharDetailsBlock>
                <h4>John Snow</h4>
                <CharDetailsUl>
                    <CharDetailsLi>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </CharDetailsLi>
                    <CharDetailsLi>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </CharDetailsLi>
                    <CharDetailsLi>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </CharDetailsLi>
                    <CharDetailsLiLast>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </CharDetailsLiLast>
                </CharDetailsUl>
            </CharDetailsBlock>
        );
    }
}