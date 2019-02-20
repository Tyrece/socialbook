import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/Collections.js';

Template.profile.helpers({
	profAll(){
		return userDB.find({});
	}
});

Template.profile.events({
  'click .js-like'(event, instance) {
    alert("you clicked like")
  },
  'click .js-dis'(event, instance) {
    alert("you clicked dislike")
  },
  'click .js-delete' (event, instance){
  	//console.log(this._id);
  	var profID = this._id;
  	$("#" + this._id).fadeOut("slow","swing",function () {
  	userDB.remove({_id: this._id});
  });

  }

});




Template.addprofile.events({
	'click .js-add'(event, instance){
	var fName = $("#exampleModal input[name='firstName']").val();
	var lName = $("#exampleModal input[name='lastName']").val();
	var Ppic = $("#exampleModal input[name='Profilepic']").val();
	if (Ppic == ""){
		Ppic="v.jpg";
	}
	//console.log("The Profile Picture is",Ppic);

	 $("#exampleModal input[name='firstName']").val('');
	 $("#exampleModal input[name='lastName']").val('');
	 $("#exampleModal input[name='Profilepic']").val('');
	 
  	$("#exampleModal").modal("hide");
  	userDB.insert({'firstName':fName, 'lastName': lName, 'Profilepic': Ppic});

  },

})



