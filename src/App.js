import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Hero from "./components/Hero/Hero";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import balloons from "./emojiBalloon.jpg";

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
			width: 500,
		}
	}

	componentDidMount() {
		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		this.setState({canvas: canvas});
		this.setState({ctx: ctx});
		this.setState({imageUrl: balloons});
		window.addEventListener("resize", this.resize.bind(this));
    	this.resize();
		this.imageLoader();
	}

	resize() {
	    let windowWidth = window.innerWidth;
	    if (windowWidth <= 760) {
	        this.setState({width: 300});
	    }
	}

	imageLoader = () => {
		document.getElementById("inputImage").onload = () => {
			let newImage = document.getElementById("inputImage");
    		//get ratio to fit image into canvas nicely
    		let ctx1 = this.state.ctx;
    		let canvas1 = ctx1.canvas ;
	   		let ratio = newImage.width / newImage.naturalWidth    ;
	   		let newHeight = newImage.naturalHeight*ratio;
	   		this.setState({height: newHeight});
	   		console.log("height:", newImage.height);
	   		console.log("ratio:", ratio);
	   		console.log("new height:", newHeight);
    		ctx1.drawImage(newImage, 0, 0, newImage.naturalWidth, newImage.naturalHeight, 0, 0, this.state.width, newHeight);
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
		let width = this.state.width - (box.leftCol + box.rightCol)
		let height = this.state.height - (box.topRow + box.bottomRow);
		console.log("face width:", width, " face height:", height);
		let face = new Image();
		face.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1480481059"
		ctx.drawImage(face, box.leftCol, box.topRow, width, height);
		
	}


	emojifyFace = () => {
		//rotate when exif 6
					//document.getElementById("inputImage").style.transform = "rotate(90deg)";
		//document.getElementById("inputImage").onload = () => {
			let ctx1 = this.state.ctx;
	    	this.state.canvas.width = document.getElementById("inputImage").width;
	    	this.state.canvas.height = document.getElementById("inputImage").height;
	    	let newImage = document.getElementById("inputImage");
	    	console.log("image in emojyface:", newImage);
	    	//alert(newImage.src);
	    	//get ratio to fit image into canvas nicely
	    	let canvas = ctx1.canvas;
		   	let ratio = newImage.width / newImage.naturalWidth;
		   	let newHeight = newImage.naturalHeight*ratio;
		   	this.setState({height: newHeight});
		   	console.log("height:", newImage.height);
		   	console.log("ratio:", ratio);
		   	console.log("new height:", newHeight);
	    	ctx1.drawImage(newImage, 0, 0, newImage.naturalWidth, newImage.naturalHeight, 0, 0, this.state.width, newHeight);
			// ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
	        //           		0, 0, canvas.width, canvas.height); // destination rectangle
	        ctx1.shadowOffsetX = 2;
 			ctx1.shadowOffsetY = 2;
  			ctx1.shadowBlur = 2;
	        ctx1.fillStyle = "black";
	        ctx1.shadowColor = "white";
	        ctx1.font = 'bold 12px serif';
	    	ctx1.fillText("Emojified by Paul Billings", this.state.width - 140, newHeight - 10)
    	//}
	}

	emojifyFaceURL = () => {
		//rotate when exif 6
					//document.getElementById("inputImage").style.transform = "rotate(90deg)";
		document.getElementById("inputImage").onload = () => {
			let ctx1 = this.state.ctx;
	    	this.state.canvas.width = document.getElementById("inputImage").width;
	    	this.state.canvas.height = document.getElementById("inputImage").height;
	    	let newImage = document.getElementById("inputImage");
	    	console.log("image in emojifyFaceURL:", newImage);
	    	//alert(newImage.src);
	    	//get ratio to fit image into canvas nicely
	    	let canvas = ctx1.canvas;
		   	let ratio = newImage.width / newImage.naturalWidth;
		   	let newHeight = newImage.naturalHeight*ratio;
		   	this.setState({height: newHeight});
		   	console.log("height:", newImage.height);
		   	console.log("ratio:", ratio);
		   	console.log("new height:", newHeight);
	    	ctx1.drawImage(newImage, 0, 0, newImage.naturalWidth, newImage.naturalHeight, 0, 0, this.state.width, newHeight);
			// ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
	        //           		0, 0, canvas.width, canvas.height); // destination rectangle
	        ctx1.shadowOffsetX = 2;
 			ctx1.shadowOffsetY = 2;
  			ctx1.shadowBlur = 2;
	        ctx1.fillStyle = "black";
	        ctx1.shadowColor = "white";
	        ctx1.font = 'bold 12px serif';
	    	ctx1.fillText("Emojified by Paul Billings", this.state.width - 140, newHeight - 10)
    	}
	}

	
		//getOrientation from https://stackoverflow.com/a/32490603/10395024
		getOrientation = (file, callback) => {
		    var reader = new FileReader();
		    reader.onload = function(e) {

		        var view = new DataView(e.target.result);
		        if (view.getUint16(0, false) !== 0xFFD8)
		        {
		            return callback(-2);
		        }
		        var length = view.byteLength, offset = 2;
		        while (offset < length) 
		        {
		            if (view.getUint16(offset+2, false) <= 8) return callback(-1);
		            var marker = view.getUint16(offset, false);
		            offset += 2;
		            if (marker === 0xFFE1) 
		            {
		                if (view.getUint32(offset += 2, false) !== 0x45786966) 
		                {
		                    return callback(-1);
		                }

		                var little = view.getUint16(offset += 6, false) === 0x4949;
		                offset += view.getUint32(offset + 4, little);
		                var tags = view.getUint16(offset, little);
		                offset += 2;
		                for (var i = 0; i < tags; i++)
		                {
		                    if (view.getUint16(offset + (i * 12), little) === 0x0112)
		                    {
		                        return callback(view.getUint16(offset + (i * 12) + 8, little));
		                    }
		                }
		            }
		            else if ((marker & 0xFF00) !== 0xFF00)
		            {
		                break;
		            }
		            else
		            { 
		                offset += view.getUint16(offset, false);
		            }
		        }
		        return callback(-1);
		    };
		    reader.readAsArrayBuffer(file);
		}


	//resetOrientation from https://jsfiddle.net/wunderbart/w1hw5kv1/
	resetOrientation = (srcBase64, srcOrientation, callback) => {
		
		let img = new Image();

		img.onload = function() {
	  		let width = img.width;
    		let height = img.height;
        	let canvas = document.createElement('canvas');
	  		let ctx = canvas.getContext("2d");
		
    // set proper canvas dimensions before transform & export
		if (4 < srcOrientation && srcOrientation < 9) {
    		canvas.width = height;
      		canvas.height = width;
    	} else {
    		canvas.width = width;
      		canvas.height = height;
    	}

	// transform context before drawing image
	switch (srcOrientation) {
      case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
      case 3: ctx.transform(-1, 0, 0, -1, width, height ); break;
      case 4: ctx.transform(1, 0, 0, -1, 0, height ); break;
      case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
      case 6: ctx.transform(0, 1, -1, 0, height , 0); break;
      case 7: ctx.transform(0, -1, -1, 0, height , width); break;
      case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
      default: break;
    }

	// draw image
    ctx.drawImage(img, 0, 0)
    
	// export base64
	callback(canvas.toDataURL());
		
  };

	img.src = srcBase64;
	
}

	onInputChange = (event) => {

			let preview = "";
			let input = "";
			let dataURL = "";
			let base64 = "";
			let dataLocal ="";
			let reader = new FileReader();
			let newImage = "";

		if (event.target.files !== null) {
			//local upload
			this.setState({localUpload: true});
			console.log("local", event.target.files[0]);
			//find out exif of image
  				let imageExif = 6;
				this.getOrientation(event.target.files[0], function(orientation) {
					        console.log('orientation: ' + orientation);
					        imageExif = orientation;
				});

			reader.onload = (e) => {
    			
	    		dataURL = reader.result;
	    				
	    		newImage = document.getElementById("inputImage");

	    		
	    		console.log("hopefully Image O: ", imageExif);
	    		this.resetOrientation(dataURL, imageExif, function(resetBase64Image) {
						console.log("newImage", resetBase64Image);
						newImage.src = resetBase64Image;
					})

	    		document.getElementById("inputImage").onload = () => {
	    			
	    			console.log("loaded");
	    			//this.setState({imageUrl: dataURL});
	    			this.setState({imageUrl: newImage.src});
	    			this.emojifyFace();
	    			base64 = newImage.src.slice(newImage.src.indexOf(',')+1);
	    			dataLocal = {base64: base64};
	    			// console.log("new data local", base64);
	    			this.setState({input: dataLocal});
    			}
	
  			}
  			input = reader.readAsDataURL(event.target.files[0]);
  			
		} else {
			//online URL
			this.setState({localUpload: false});
			// console.log("online", event.target.value);
			this.setState({input: event.target.value});
			this.setState({imageUrl: event.target.value});
			this.emojifyFaceURL();
		}

	}

	onButtonSubmit = () => {
		console.log("NEW: input= ", this.state.input);
		app.models.predict(
			"a403429f2ddf4b49b307e318f00e528b",
			this.state.input)
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
		    .catch(err => {
		    	console.log("error", err);
		    	this.setState({imageUrl: balloons});
		    	this.imageLoader();
		    	alert("Error, no image or faces to Emojify");
		    })
		document.getElementById("urlupload").value='';
		document.getElementById("localupload").value='';
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
		      <FaceRecognition width={this.state.width} height={this.state.height} canvas={this.state.canvas} ctx={this.state.ctx} box={this.state.box} imageUrl={this.state.imageUrl}/>
		    </div>
		);
	}
}


export default App;