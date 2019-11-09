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
			box: {},
		}
	}

	
	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		console.log("width:", width, " height:", height);
		console.log(clarifaiFace.left_col * width - 25);
		return {
			leftCol: clarifaiFace.left_col * width - 25,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width) - 25,
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
	}

	displayFaceBox = (box) => {
		// console.log(box);
		this.setState({box: box});
	}
	


	onInputChange = (event) => {
		if (event.target.files !== null) {
			//local upload
			this.setState({localUpload: true});
			// console.log("local", event.target.files[0]);
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
    			// console.log("new data local", base64);
    			this.setState({input: dataLocal});
  			}
  			input = reader.readAsDataURL(event.target.files[0]);
  			// console.log("input", input);
		} else {
			//online URL
			this.setState({localUpload: false});
			// console.log("online", event.target.value);
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
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
		    .catch(err => console.log("error", err))
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
		      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
		    </div>
		);
	}
}


export default App;