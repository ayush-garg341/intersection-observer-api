import React, {Component} from 'react';
import TrackVisibility from "./TrackVisibility";
import axios from "axios";
import ShowPosts from "./showPosts";
import './App.css';

class App extends Component {

    constructor(props){
	super(props);
	this.state={
	    cards:[],
	    pageNo:1,
	    limit:20,
	    mounted:false
	};

	this.onLoadFetchResults = this.onLoadFetchResults.bind(this);
    }

    componentDidMount(){
	this.setState({mounted:true});
	this.makeDataRequest();
    }

    componentDidUpdate(){
	console.log("did update");
    }

    onLoadFetchResults(){
	console.log(this.state);
	this.setState({
	    pageNo: this.state.pageNo+1
	}, ()=>{
	    this.makeDataRequest();
	    
	});
    }

    makeDataRequest(){
	const {pageNo, limit} = this.state;
	const url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=${limit}`;
	axios({
	    method:"GET",
	    url:url
	})
	    .then(response =>{
		const cards = [...this.state.cards, ...response.data];
		this.setState({cards: cards});
	    })
	    .catch(err =>{
		console.log(err);
	    });
    }

    render(){
	const {onLoadFetchResults} = this;
	const {cards, mounted} = this.state;
	return (
		<div className="App">
		<h1>Author: Ayush Garg</h1>
		<ShowPosts cards={cards}/>
		{cards.length!==0?
		<div className="loader">
		<TrackVisibility onLoadFetchResults={onLoadFetchResults} />
		 </div>
		 :null}
		</div>
	);
    }
}

export default App;
