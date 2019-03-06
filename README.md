# Easy-Mailer
A web application for sending emails for feedback from customers

To use this application, you have to make some changes. Changes will be described below:

1. clone the repository
2. you first need to create a file dev.js that you will put in the config folder
3. cd config
4. touch keys.js
5. then add the folowing content

module.exports = {
  googleClientID: '',
  googleClientSecret:'',
  mongoURI:'',
  stripePublishableKey:'',
  cookieKey: '',
  stripeSecretKey: '',
  sendGridKey: '',
  redirectDomain: ''
};

You have to create the following accounts:

1. Google API console account
2. Mongo DB cloud account
3. Stripe API console account
4. Sendgrid API console account.

You have to create these accounts and add these API keys in the dev.js file in the config folder.

How to Run:
1. Install all the dependencies: npm install
2. npm i --save concurrently
3. cd client
4. npm install
5. You can launch both the servers using "npm run dev"
6. Your application is now running.


# Important thing:
In the Sendgrid account after getting your api keys. go to mail settings and check the checkbox "clicked" and give the url as https://domain in sendgrid_webhooks.js file.

