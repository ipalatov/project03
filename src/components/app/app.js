import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, HousePage, BookPage, BookItem, MainPage, CharacterItem, HouseItem } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }


    render() {

        const char = this.state.showRandomChar ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className="app ">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {char}
                                <button
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <><h1>Welcome to the GOT DB</h1>                            <MainPage /></>
                        } />

                        <Route path='/characters' exact component={CharacterPage} />
                        <Route path='/characters/:id' render={
                            ({ match }) => {
                                return <CharacterItem charId={match.params.id} />
                            }
                        } />

                        <Route path='/houses' exact component={HousePage} />
                        <Route path='/houses/:id' render={
                            ({ match }) => <HouseItem houseId={match.params.id} />
                        } />

                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;

                                return <BookItem bookId={id} />
                            }
                        } />

                    </Container>
                </div>
            </Router>
        );
    }
};