import React, {Component} from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Button
} from 'react-bootstrap';

import katakana from './../data/katakana';
import hiragana from './../data/hiragana';

import './present.css';

class Present extends Component {
	constructor() {
		super();

		let deck = [
			...hiragana.aRow,
			...hiragana.kaRow,
			...hiragana.saRow,
			...hiragana.taRow,
			...hiragana.naRow,
			...hiragana.haRow,
			...hiragana.maRow,
			...hiragana.yaRow,
			...hiragana.raRow,
			...hiragana.waRow,
			...hiragana.tokuRow,
			...hiragana.gaRow,
			...hiragana.zaRow,
			...hiragana.daRow,
			...hiragana.baRow,
			...hiragana.paRow
		];
		
		deck = [
			...hiragana.kyaRow,
			...hiragana.shaRow,
			...hiragana.chaRow,
			...hiragana.nyaRow,
			...hiragana.myaRow,
			...hiragana.ryaRow,
			...hiragana.hyaRow
		];

		deck = [
			...hiragana.kyaRow,
		];

		this.state = {
			currentDeck: deck,
			currentIndex: 0,
			originalDeck: deck
		};
	}

	onNextCard = () => {
		let currentIndex = this.state.currentIndex;

		if (this.state.currentDeck.length !== currentIndex + 1) {
			currentIndex++;
			this.setState({ currentIndex });
		}
	}

	serialPresent = () => {
		let [swipeCard, ...otherCards] = this.state.currentDeck;
		let newDeck = [...otherCards, swipeCard];

		this.setState({currentDeck: newDeck});
	}

	resetDeck = () => {
		this.setState({ currentIndex: 0 });
	}

	shuffleDeck = () => {
		let currentDeck = [...this.state.currentDeck];
		let startIndex = currentDeck.length - 1;

		for(let deckIndex = startIndex; deckIndex > 0; deckIndex--){
			let targetIndex = Math.floor(Math.random() * deckIndex);
			let target = currentDeck[deckIndex];

			currentDeck[deckIndex] = currentDeck[targetIndex];
			currentDeck[targetIndex] = target;
		}

		this.setState({currentDeck, currentIndex: 0});
	}

	reorganizeDeck = () => {
		this.setState({ 
			currentDeck: this.state.originalDeck,
			currentIndex: 0
		});
	}

	render () {
		return (
			<Container className="present-page">
				<Row>
					<Col 
						xs={{offset:4, span: 4}}
						className="present-column"
					>
						<Card className="present-card" >
							<Card.Body className="present-card-body">
								<h1>{this.state.currentDeck[this.state.currentIndex]}</h1>
							</Card.Body>
						</Card>
						<Button 
							block
							variant="success"
							onClick={this.onNextCard}
						>
							Next
						</Button>
						<Button 
							block
							variant="primary"
							onClick={this.shuffleDeck}
						>
							Shuffle
						</Button>
						<Button 
							block
							variant="info"
							onClick={this.resetDeck}
						>
							Reset
						</Button>
						<Button 
							block
							variant="secondary"
							onClick={this.reorganizeDeck}
						>
							Reorganize
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Present;