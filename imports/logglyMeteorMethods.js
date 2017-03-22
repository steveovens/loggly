
/**
 * Meteor methods for Loggly
 */

 Meteor.methods({
   logglyLog: function(param, tag) {
     check(param, Match.OneOf(String, Object));
     check(tag, Match.OneOf([String], null));

     Meteor.defer(function() {
       Logger.log(param, tag);
     });
   },
   logglyTrace: function(param) {
     check(param, Match.OneOf(String, Object));

     Meteor.defer(function() {
       Logger.trace(param);
     });
   },
   logglyInfo: function(param) {
     check(param, Match.OneOf(String, Object));

     Meteor.defer(function() {
       Logger.info(param);
     });
   },
   logglyWarn: function(param) {
     check(param, Match.OneOf(String, Object));

     Meteor.defer(function() {
       Logger.warn(param);
     });
   },
   logglyError: function(param) {
     check(param, Match.OneOf(String, Object));

     Meteor.defer(function() {
       Logger.error(param);
     });
   }
 });
