// let mn = require('backbone.marionette');
// let _ = require('underscore');
import mn from 'backbone.marionette';
import _ from 'underscore';

let profileContainer = mn.View.extend({
  template: _.template(`
    <div id='profileContainer'></div>
  `)
});
export default profileContainer;