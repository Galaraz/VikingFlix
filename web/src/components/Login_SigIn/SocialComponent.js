import React, { Component } from 'react';
import './Style/SocialComponent';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class SocialComponent extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        
      <FacebookLogin
        appId="388217602626588" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="428989945337-2keqfo0u8kjq23rdht4o68i6us8ltkmf.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default SocialComponent;