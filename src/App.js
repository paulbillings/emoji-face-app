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
			canvas: "",
			ctx: "",
			height: 0,
		}
	}

	componentDidMount() {
		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		this.setState({canvas: canvas});
		this.setState({ctx: ctx});
	}

	
	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		console.log("width:", width, " height:", height);
		console.log(clarifaiFace.left_col * width - 25);
		return {
			leftCol: clarifaiFace.left_col * width - 15,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width) - 15,
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
	}

	displayFaceBox = (box) => {
		// console.log(box);
		this.setState({box: box});
		let ctx = this.state.ctx;
		let width = 400 - (box.leftCol + box.rightCol)
		let height = this.state.height - (box.topRow + box.bottomRow);
		console.log("face width:", width, " face height:", height);
		let face = new Image();
		face.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1480481059"
		ctx.drawImage(face, box.leftCol, box.topRow, width, height);
		
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
    			document.getElementById("inputImage").onload = () => {
    				console.log("loaded");
    				let ctx1 = this.state.ctx;
    				this.state.canvas.width = document.getElementById("inputImage").width;
    				this.state.canvas.height = document.getElementById("inputImage").height;
    				let newImage = document.getElementById("inputImage");
    				//get ratio to fit image into canvas nicely
    				let canvas = ctx1.canvas ;
	   				let ratio = newImage.width / newImage.naturalWidth    ;
	   				let newHeight = newImage.naturalHeight*ratio;
	   				this.setState({height: newHeight});
	   				console.log("height:", newImage.height);
	   				console.log("ratio:", ratio);
	   				console.log("new height:", newHeight);
    				ctx1.drawImage(newImage, 0, 0, newImage.naturalWidth, newImage.naturalHeight, 0, 0, 400, newHeight);
					// ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
        			//           		0, 0, canvas.width, canvas.height); // destination rectangle
    				ctx1.fillText("You've been Emojified!!", 280, newHeight - 10)
    			}
    			base64 = dataURL.slice(dataURL.indexOf(',')+1);
    			let dataLocal = {base64: base64};
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
		      <FaceRecognition height={this.state.height} canvas={this.state.canvas} ctx={this.state.ctx} box={this.state.box} imageUrl={this.state.imageUrl}/>
		    </div>
		);
	}
}


export default App;