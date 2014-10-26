/** @jsx React.DOM */
/*
   deploy to USB script  
   user launch installer
      create registry file on windows  (accelon.reg)
      for OSX see
      http://superuser.com/questions/548119/how-do-i-configure-custom-url-handlers-on-os-x

      check no network or no update available 
      switch to the app directly
*/



Require("bootstrap");
//var othercomponent=Require("other"); 
/*
   installer

   install an app from website //read ksana.json for filelist

   delete local app
   check if update available for installed app

   for node-webkit, Android and iOS only

   share database with email,
   open with http://appurl.org/docs


   downloaded,
   public stores
   invited by friend
*/ 
var logo=Require("logo");
var installed=Require("installed");
var stores=Require("stores");
var main = React.createClass({
  getInitialState: function() {
    return {dirs:[]};
  },
  componentDidMount:function() {
  },
  render: function() {
    return (
      <div className="main">
        <logo/>
        <installed/>
      </div>
    );
  }
});
module.exports=main;