 import React, { useEffect, useState } from 'react';
 
 const EmbeddedSignup = () => {

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '923306645752743',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v21.0'
      });
    };

    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); 
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return null; 

 }

 export default EmbeddedSignup;

