import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/Collections.js';

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

Template.addProfile.events({
 'click .js-saveProfile'(event, instance){
    // get user data
    var fName = $("#addUserModal input[name='firstName']").val();
    var lName = $("#addUserModal input[name='lastName']").val();
    var image = $("#addUserModal input[name='image']").val();
    if (image == ""){
      image="v.jpg";
    }
    // Reset the form
    $("#addUserModal input[name='firstName']").val('');
    $("#addUserModal input[name='lastName']").val('');
    $("#addUserModal input[name='image']").val('');
    // Close the modal
    $("#addUserModal").modal("hide");
    userDB.insert({'firstName':fName, 'lastName':lName, 'img':image});
  }
})
