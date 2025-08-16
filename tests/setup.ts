import mongoose from "mongoose";

beforeAll(async () => {
  // Connect to a test database
  await mongoose.connect(process.env.DB_URI as string);
});

afterAll(async () => {
  // Drop database & disconnect after all tests
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
