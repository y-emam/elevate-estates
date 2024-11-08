// lib/mongodb.ts
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the MongoClient isn't constantly recreated on hot reload
  let globalClient: MongoClient | undefined = (global as any)._mongoClient;

  if (!globalClient) {
    globalClient = client;
    (global as any)._mongoClient = globalClient;
  }

  clientPromise = Promise.resolve(globalClient);
} else {
  clientPromise = client.connect();
}

export default clientPromise;
