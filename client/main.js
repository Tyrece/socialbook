import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/Collections.js';



Template.profile.events({
  'click .js-like'(event, instance) {
    alert("you clicked like")
  },
  'click .js-dis'(event, instance) {
    alert("you clicked dislike")
  },

});


Template.addprofile.events({
	'click .js-add'(event, instance){
	var fName = $("#exampleModal input[name='firstName']").val();
	console.log("The First Name is",fName);

	var lName = $("#exampleModal input[name='lastName']").val();
	console.log("The Last Name is",lName);

	var Ppic = $("#exampleModal input[name='Profilepic']").val();
	console.log("The Profile Picture is",Ppic);

	 $("#exampleModal input[name='firstName']").val('');
	 $("#exampleModal input[name='lastName']").val('');
	 $("#exampleModal input[name='Profilepic']").val('');
	 
  	$("#exampleModal").modal("hide");

  },

})



