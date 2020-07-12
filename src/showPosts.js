import React, {Component, Fragment} from 'react';

class ShowPosts extends Component{
    constructor(props){
	super(props);
	this.state={
	    cards:[]
	};
    }

    componentDidUpdate(prevProps, prevState){
	if(this.props.cards!==prevProps.cards){
	    this.setState({cards: this.props.cards});
	}
    }

    showCards(){
	const cards = this.state.cards.map(card => {
	    const {userId, id, title} = card;
	    return (
		    <div className="card">
		    <div className="container">
		    <h4><b>{`User Id: ${userId}`}</b></h4>
		    <p>{`Id: ${id}`}</p>
		    <p>{title}</p>
		    </div>
		    </div>
	    );
	});

	return cards;
    }
    
    render(){
	return(
		<Fragment>
		{this.showCards()}
		</Fragment>
	    
	);
    }
}


export default ShowPosts;
