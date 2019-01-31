import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.profile.events({
  'click .js-like'(event, instance) {
    console.log("you clicked like")
  },
  'click .js-dis'(event, instance) {
    alert("you disliked")
  },
});


