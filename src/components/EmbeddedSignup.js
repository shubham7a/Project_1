 import React, { useEffect } from 'react';
 
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

  return (
    <div className="p-4">
      <div id="fb-root"></div>
      <button
        className="bg-blue-600 text-white font-bold rounded-lg py-2 px-6 hover:bg-blue-700 transition-colors mx-auto justify-center flex mt-[100px]"
      >
        Login with Facebook
      </button>
      <p className="mt-4 font-semibold">Session info response:</p>
      {/*<pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2 overflow-auto max-h-60">{sessionInfoResponse}</pre>*/}
       <p className="mt-4 font-semibold">SDK response:</p>
      {/*<pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2 overflow-auto max-h-60">{sdkResponse}</pre>*/}
    </div>
  ) 
  
  

 }

 export default EmbeddedSignup;

