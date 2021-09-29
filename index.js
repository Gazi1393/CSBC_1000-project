// // importing libraries
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// // initializing firebase access to its services
admin.initializeApp(functions.config().firebase);


// // initializing express
const app = express();
const main = express();

// // adding the path to receive requests
main.use('/api/v1', app);
// // using body parser to process the body
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// // getting access to the Firestore database
const db = admin.firestore();
// // Setting a name for the collection
const CredentialRecords = "credentials";

// // Creating the cloud function and exporting it 
const webAPI = functions.https.onRequest(main);
module.exports = { webAPI };


// // custom object that represents a credential record
class credential {
    constructor(uuid,fullname, email, address, phoneno, Associate_Degree, Associate_School, UG_Degree, UG_School, PG_Degree, PG_School, userHash) {
        this.id = uuid;
        this.fullname = fullname;
        this.email = email;
        this.address = address;
        this.phoneno = phoneo;
        this.Associate_Degree = Associate_Degree;
        this.Associate_School = Associate_School;
        this.UG_Degree = UG_Degree;
        this.UG_School = UG_School;
        this.PG_Degree = PG_Degree;
        this.PG_School = PG_SChool;
        this.userHash = userHash;
    }

}


// // API for submitting/creating new credential instance to the "CVS_MAIN" collection

app.post('/CVS_MAIN', async (req, res) => {
    try {
        // creating test object
        const newCredential = new Credential(
            uuidv4(),
            "Sheldon Cooper",
            "coopersheldon@gmail.com",
            "456 Boulvd. Drive, Boston",
            634222,
            "Associate of Science",
            "BDH Associate School",
            "Bachelor of Mathematics",
            "MIT",
            "Masters in Applied Physics",
            "University of Waterloo",
            "2dbafc26e2daaaec35f425f9f274cbeac2ac5e38d78feaa729e6fc5bd66b94fb"
        );

        // sending it to the database asynchronously
        await db.collection(CVS_MAINCollection)
            .doc(newCredential.id)
            .set(Object.assign({}, newCredential));

        res.status(201).send('Successfully added record ${newCredential.id}');

    } catch (error) {
        // handling errors

        res.status(400).send(error);
    }
});







// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
