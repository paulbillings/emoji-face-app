import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Hero from "./components/Hero/Hero";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
 apiKey: '14911963b80443fab726c30bd4996904'
});



class App extends Component {
	
	
	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: "",
			localUpload: false,
		}
	}

	
	
	onInputChange = (event) => {
		if (event.target.files !== null) {
			//local upload
			this.setState({localUpload: true});
			console.log("local", event.target.files[0]);
			let preview = "";
			let input = "";
			let dataURL = "";
			let base64 = "";
			let reader = new FileReader();
			reader.onload = (e) => {
    			dataURL = reader.result;
    			this.setState({imageUrl: dataURL});
    			base64 = dataURL.slice(dataURL.indexOf(',')+1);
    			let dataLocal = { base64: base64};
    			console.log("new data local", base64);
    			this.setState({input: dataLocal});
  			}
  			input = reader.readAsDataURL(event.target.files[0]);
  			console.log("input", input);
		} else {
			//online URL
			this.setState({localUpload: false});
			console.log("online", event.target.value);
			this.setState({input: event.target.value});
		}
	}

	onButtonSubmit = () => {
		if (this.state.localUpload === false) {
			this.setState({imageUrl: this.state.input})
		} else {
			console.log("clarifai", this.state.input);
		}
		app.models.predict(
			"a403429f2ddf4b49b307e318f00e528b",
			this.state.input)
			.then(
		    function(response) {
		      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
		    },
		    function(err) {
		      console.log("error", err);
		    }
		);
	}

	render() {
		return (
		    <div className="App">
		      <Navigation />
		      <Hero />
		      <ImageLinkForm 
		      	onInputChange={this.onInputChange} 
		      	onButtonSubmit={this.onButtonSubmit}
		      />
		      <FaceRecognition imageUrl={this.state.imageUrl}/>
		    </div>
		);
	}
}


export default App;