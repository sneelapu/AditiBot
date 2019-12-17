var Alexa = require('alexa-sdk');
var appId='amzn1.ask.skill.a0519699-9852-4929-abcb-dadaf0a309d4';
/* var app=require('express')();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()) */

var handlers = {
  
 'LaunchRequest': function () {
 var self=this;
        self.emit('welcomeintent');
    },
    'welcomeintent': function () {
		 var self=this;
        self.emit(':ask', 'Hi, I’m Aditi- the ArtificialIntelligence assistant for Digital Summit! How can I help you?');
    },
	

 
       'CapabilitiesIntent': function () {
	   var self=this;
        self.emit(':ask', 'I can provide information about Team Miracle, Digital Summit, and AP Cloud');
    },
	'DSintent': function () {
	var self=this;
		 if(this.event.request.intent.slots.span.name === 'span' && this.event.request.intent.slots.span.hasOwnProperty('value')){
			
			self.emit(':ask', 'It is conducted from 13/12/2017, to 17/12/2017');
			
		} else if(this.event.request.intent.slots.locs.name === 'locs' && this.event.request.intent.slots.locs.hasOwnProperty('value')){
			
			self.emit(':ask', 'DS 17 is conducted at the Digital Valley in Vizag');
			
		} else {
			
			
			
			self.emit(':ask', 'Digital Summit is a 5-day technical extravaganza focussed on technical skill enablement');
			
		} 
		 
        //this.emit(':tell', 'AP Cloud Initiative strives to create hundred thousand digital transformation professionals in Andhra Pradesh? Would you like to enroll?');
    },
	
	 'AP_Cloud': function () {
	 var self=this;
		 if(this.event.request.intent.slots.yes.name === 'yes' && this.event.request.intent.slots.yes.hasOwnProperty('value')){
			
			self.emit(':ask', 'please visit A.P.Cloud.in and enroll today');
			
		} else if(this.event.request.intent.slots.no.name === 'no' && this.event.request.intent.slots.no.hasOwnProperty('value')){
			
			self.emit(':ask', 'okay, thank you');
			
		} else {
			
			
			
			self.emit(':ask', 'A.P. Cloud Initiative strives to create hundred thousand digital transformation professionals in Andhra Pradesh. Would you like to enroll?');
			
		} 
		 
        //this.emit(':tell', 'AP Cloud Initiative strives to create hundred thousand digital transformation professionals in Andhra Pradesh? Would you like to enroll?');
    },
	 'Miracle': function () {
	 var self=this;
		 var responses=['Miracle Software Systems is a global systems integrator with 24 years of experience and over 3000 employees', 'Miracle has a global presence on four continents with multiple Global Development Centers spanning across the USA, Canada and India.','Miracle has been and continues to be a leader in the niche space of Business Integration and S.O.A. services over the past 21 Years with Premier Partnerships with companies such as S.A.P, IBM, Oracle and Microsoft.','Miracle has been a Premium Business Partner of IBM for many years now, and it is also a National Implementation Partner with S.A.P. as well','Miracle is one of the few companies that has perfected the hybrid On-Demand Model specializing on these Niche skills, and is backed by state-of-the-art facilities at multiple locations around the globe'];
		 var i=Math.floor(Math.random() * 3) + 1;
		 if(i<=3){
			 console.log(i)
			 self.emit(':ask',  responses[i]);
		 }
		
		 /* for(i=count;i<responses.length;i++){ 
			 this.emit(':tell',  responses[i]);
		 } */
        //this.emit(':tell', 'Miracle Software Systems is a global systems integrator with 24 years of experience and over 3000 employees','Miracle is so and so','miracle is global company' );
    },
	'Miracle_locations': function () {
	var self=this;
        self.emit(':ask', 'Miracle is headquartered in Novi, Michigan with its Asia Pacific headquarters in Visakhapatnam');
    },
	'Internships': function () {
	var self=this;
        self.emit(':ask', 'Yes, Miracle provides internships in January and May for engineering students');
    },
	'mss_info': function () {
	var self=this;
        self.emit(':ask', 'To know what we are, Please visit miraclesoft.com');
    },
	'DSInfo': function () {
	var self=this;
        self.emit(':ask', 'Through technical talks, hackathons and job fairs - this event helps the students to get a great exposure towards technology and career opportunities');
    },
	'MIL': function () {
	var self=this;
		 if(this.event.request.intent.slots.technology.name === 'technology' && this.event.request.intent.slots.technology.value==='cloud'){
			
			self.emit(':ask', 'Cloud computing is an information technology (IT) paradigm, a model for enabling ubiquitous access to shared pools of configurable resources');
			
		} else if(this.event.request.intent.slots.technology.name === 'technology' && this.event.request.intent.slots.technology.value==='devops'){
			
			self.emit(':ask', 'DevOps is a software engineering practice that aims at unifying software development (Dev) and software operation (Ops).');
			
		}
		 else if(this.event.request.intent.slots.technology.name === 'technology' && this.event.request.intent.slots.technology.value==='blockchain'){
			
			self.emit(':ask', 'Blockchain is the world leading software platform for digital assets');
			
		} 
		 else if(this.event.request.intent.slots.technology.name === 'technology' && this.event.request.intent.slots.technology.value==='chatbots'){
			
			self.emit(':ask', 'A chatbot  is a computer program which conducts a conversation via auditory or textual methods');
			
		}
		 
		else if(this.event.request.intent.slots.mlabstech.name === 'mlabstech' && this.event.request.intent.slots.mlabstech.hasOwnProperty('value')){
			
			self.emit(':ask', 'MIL handles technologies like  Blockchain, DevOps, Chatbots,more..');
			
		} 
		else {
			
			
			
			self.emit(':ask', 'I was built by Miracle’s Innovation Labs!, A team of researchers focussed on next generation technology ');
			
		} 
	},
    
	
	'ThankyouIntent': function () {
	var self=this;
      
		 if(this.event.request.intent.slots.yess.name === 'yess' && this.event.request.intent.slots.yess.hasOwnProperty('value')){
			
			self.emit(':ask', 'What would you like to know');
			
		} else if(this.event.request.intent.slots.noo.name === 'noo' && this.event.request.intent.slots.noo.hasOwnProperty('value')){
			
			self.emit(':ask', 'Okay, Thank you!! Have a great time');
			
		} else {
			
			
			
			self.emit(':ask', 'Okay, Do you need anything more?');
			
		} 
		 
        //this.emit(':tell', 'AP Cloud Initiative strives to create hundred thousand digital transformation professionals in Andhra Pradesh? Would you like to enroll?');
    },
	
	'anythingelse': function () {
	var self=this;
	 self.emit(':ask', 'I’m sorry, I was not able to understand that. Please try again!');
	},
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    //alexa.appId = appId;
	//alexa.resources = languageStrings;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};