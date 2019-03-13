import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../libCollections.js';

Template.profiles.helpers({
  profAll(){
    return userDB.find({});
  }
});

Template.profiles.events({
  'click .js-like'(event, instance) { 
    var profID = this._id;
    var numLikes = userDB.findOne({_id:  profID}).like;
    if (!numLikes) {
      numLikes = 0;
    }
    numLikes = numLikes + 1;  
    userDB.update({_id:profID}, {$set:{'like': numLikes}});
  },
  'click .js-dislike'(event, instance){
    var profID = this._id;
    var numDisLikes = userDB.findOne({_id:  profID}).dislike;
    if (!numDisLikes) {
      numDisLikes = 0;
    }
    numDisLikes = numDisLikes + 1;  
    userDB.update({_id:profID}, {$set:{'dislike': numDisLikes}});
  },
  'click .js-delete'(event, instance){
    // console.log(this._id);
    var profID = this._id;
    $("#" + profID).fadeOut("slow", "swing", function () {
      userDB.remove({_id: profID});
    });   
  },
  'click .viewUser'(event, instance){
    var uId = this._id;
    $('#userId').val(uId);
    $('#viewUserProfile img').attr('src',userDB.findOne({_id:uId}).img);
  }
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
