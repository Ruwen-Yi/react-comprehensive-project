import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.ATLAS_URI;
// create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let database;
try {
    await client.connect();
    database = client.db("testdb");
    await database.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (e) {
    console.error(e);
}

export default database;