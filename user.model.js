var Mn = require("backbone.marionette");
var backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");

var user = backbone.Model.extend({
    default: {
        userName: "",
        email: ""
    }
});


var usersCollection = backbone.Collection.extend({
    model: user
});
export { user,usersCollection }; 