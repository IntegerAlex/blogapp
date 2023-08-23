import { MongoClient } from 'mongodb';
import saslprep from 'saslprep';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI; //
const dbName = 'blogapp'; // 

MongoClient.saslprep = saslprep;
const connectToDatabase = async () => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    console.log('Connected to MongoDB');
    query(client);
    console.log('Connection closed');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

async function query(client){
const db = client.db(dbName);
const collection =  db.collection('blogs')
let query = await collection.findOne({ title: "my first blog" });
console.log(query);

client.close();
}

connectToDatabase();
