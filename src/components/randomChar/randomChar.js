import React, { Component } from 'react';
import styled from 'styled-components';

const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const RandomCharSpan = styled.span`
    font-weight: bold;
`;

const RandomCharUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;

const RandomCharLiLast = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);    
`;

const RandomCharLi = styled(RandomCharLiLast)`
border-bottom: 0;
`;


export default class RandomChar extends Component {

    render() {

        return (
            <RandomCharBlock className="">
                <h4>Random Character: John</h4>
                <RandomCharUl>
                    <RandomCharLi>
                        <RandomCharSpan>Gender </RandomCharSpan>
                        <span>male</span>
                    </RandomCharLi>
                    <RandomCharLi>
                        <RandomCharSpan>Born </RandomCharSpan>
                        <span>11.03.1039</span>
                    </RandomCharLi>
                    <RandomCharLi>
                        <RandomCharSpan>Died </RandomCharSpan>
                        <span>13.09.1089</span>
                    </RandomCharLi>
                    <RandomCharLiLast>
                        <RandomCharSpan>Culture </RandomCharSpan>
                        <span>Anarchy</span>
                    </RandomCharLiLast>
                </RandomCharUl>
            </RandomCharBlock>
        );
    }
}
