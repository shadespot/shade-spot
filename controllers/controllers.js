const request = require('request');
require("dotenv").config();

const subscribe = async({ email }) => {
  const data = {
    email_address: email,
    status: 'subscribed'
  };

  const listId = process.env.LIST_ID;
  const API_KEY = process.env.API_KEY;


  await new Promise((resolve, reject) => {
    request.post({uri: `https://us2.api.mailchimp.com/3.0/lists/${listId}/members/`,
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
      },
      json: true,
      body: data,
    }, (err, response, body) => {
      if (err) {
        console.warn(error);
        reject(err);
      } else {
        console.log(body);
        resolve(body);
      }
    },
    );
  });
}

const addMemberToList = (req, res) => {
  console.log("Adding Member to list");

  const { email } = req.body;

  try {
    subscribe({ email });
    res.json({ subscribed: 1 });
    console.log(email);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}

module.exports.addMemberToList = addMemberToList;