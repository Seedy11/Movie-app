import axios from 'axios';
import React, { useState } from 'react';

import Card from '../../components/Card/Card';
import { Headers } from '../../components/Header/Headers';


export default function Home() {
	const [ post, setPost ] = useState('');
	const [ movieSearch, setMovieSearch ] = useState('');


	async function getMovieData() {
		try {
			const getData = await axios.get(`http://www.omdbapi.com/?s='${movieSearch}'&apikey=f1aa2fec&`);
			setPost(getData.data.Search);
			console.log('data', getData.data);
		} catch (error) {
			console.log(error);
		}
	}
	const handleChange = (value) => {
		setMovieSearch(value);
		getMovieData(value);
	};

	return (
		<>
		<Headers onChange={(e)=> handleChange(e.target.value)} value={movieSearch}/>
		
		{!post ? <p>data not valid </p> :  post.map((post) => (
	   <Card key={post.id}
	   cardType='homeCard'
	   title={post.Title}
	   Image={post.Poster}
	   Genre={post.Plot}
	   />))
	   }
		</>
	)
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
