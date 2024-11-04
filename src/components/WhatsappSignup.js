import React, { useEffect } from 'react';

const WhatsAppSignup = () => {
  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: '923306645752743', // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v21.0' // Graph API version
      });
    };

    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const launchWhatsAppSignup = () => {
    // Conversion tracking code
    if (window.fbq) {
      window.fbq('trackCustom', 'WhatsAppOnboardingStart', {
        appId: 'your-facebook-app-id', 
        feature: 'whatsapp_embedded_signup'
      });
    }

    // Facebook Login with JavaScript SDK
    window.FB.login(function (response) {
      if (response.authResponse) {
        const { code } = response.authResponse;
        // Transmit code to your backend for server-to-server access token exchange
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      config_id: '1907247449785013', // Replace with your configuration ID
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        setup: {
          // Prefilled data can go here
        }
      }
    });
  };

  return (
    <div>
      <button onClick={launchWhatsAppSignup}>Start WhatsApp Signup</button>
    </div>
  );
};

export default WhatsAppSignup;
