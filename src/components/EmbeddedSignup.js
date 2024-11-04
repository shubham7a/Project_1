 import React, { useEffect,useState } from 'react';
 
 const EmbeddedSignup = () => {
  const [sessionInfoResponse, setSessionInfoResponse] = useState(null);
    const [sdkResponse, setSdkResponse] = useState(null);
  
    useEffect(() => {
      
      const loadFbSdk = () => {
        window.fbAsyncInit = function () {
          window.FB.init({
            appId: '923306645752743',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v21.0'
          });
        };
  
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        document.body.appendChild(script);
      };
  
      loadFbSdk();
  
     
      const handleMessage = (event) => {
        if (event.origin !== 'https://www.facebook.com' && event.origin !== 'https://web.facebook.com') {
          return;
        }
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'WA_EMBEDDED_SIGNUP') {
            if (data.event === 'FINISH') {
              const { phone_number_id, waba_id } = data.data;
              console.log("Phone number ID ", phone_number_id, " WhatsApp business account ID ", waba_id);
            } else if (data.event === 'CANCEL') {
              const { current_step } = data.data;
              console.warn("Cancel at ", current_step);
            } else if (data.event === 'ERROR') {
              const { error_message } = data.data;
              console.error("error ", error_message);
            }
          }
          setSessionInfoResponse(JSON.stringify(data, null, 2));
        } catch {
          console.log('Non JSON Responses', event.data);
        }
      };
  
      window.addEventListener('message', handleMessage);
  
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, []);
  
    const fbLoginCallback = (response) => {
      if (response.authResponse) {
        const code = response.authResponse.code;
        console.log('Login code:', code);
      }
      setSdkResponse(JSON.stringify(response, null, 2));
    };
  
    const launchWhatsAppSignup = () => {
      window.FB.login(fbLoginCallback, {
        config_id: '778267790925508', // configuration ID
        response_type: 'code',
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: '',
          sessionInfoVersion: '2',
        }
      });
    };
  
    return (
      <div className="p-4">
        <div id="fb-root"></div>
        <button
          onClick={launchWhatsAppSignup}
          className="bg-blue-600 text-white font-bold rounded-lg py-2 px-6 hover:bg-blue-700 transition-colors mx-auto justify-center flex mt-[100px]"
        >
          Login with Facebook
        </button>
        <p className="mt-4 font-semibold">Session info response:</p>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2 overflow-auto max-h-60">{sessionInfoResponse}</pre>
        <p className="mt-4 font-semibold">SDK response:</p>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2 overflow-auto max-h-60">{sdkResponse}</pre>
      </div>
    );
  
  

 }

 export default EmbeddedSignup;

