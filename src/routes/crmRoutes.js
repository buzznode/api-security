import {
  addNewContact,
  getContacts,
  getContacts,
  getContactWithID,
  loginRequired,
  updateContact,
} from '../controllers/crmController';

import { login, register, loginRequired } from '../controllers/userController';

const routes = (app) => {
  app
    .route('/contacts')
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      loginRequired,
      getContacts
    )

    // POST endpoint
    .post(loginRequired, addNewContact);

  app
    .route('/contat/:contactId')
    // get specific contact
    .get(loginRequired, getContactWithID)

    // put request
    .put(loginRequired, updateContact)

    // delete request
    .delete(loginRequired, deleteContact);

  // registration route
  app.route('/auth/register').post(register);

  // login
  app.route('/login').post(login);
};

export default routes;
