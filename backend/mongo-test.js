import mongoose from 'mongoose';

const uri = "mongodb://sagarmishragla_db_user:50536802@ac-hoze37u-shard-00-00.vg3ypz3.mongodb.net:27017,ac-hoze37u-shard-00-01.vg3ypz3.mongodb.net:27017,ac-hoze37u-shard-00-02.vg3ypz3.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-hoze37u-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected successfully from raw test script!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ Connection Error:");
    console.error(err);
    process.exit(1);
  });
