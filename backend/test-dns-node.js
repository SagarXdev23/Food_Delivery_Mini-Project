import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google DNS for lookups which fixes querySrv ECONNREFUSED from local ISP/routers
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = "mongodb+srv://sagarmishragla_db_user:50536802@cluster0.vg3ypz3.mongodb.net/?appName=Cluster0";

console.log("Attempting to connect to MongoDB using SRV and Google DNS...");

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas via SRV!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Connection failed:");
    console.error(err);
    process.exit(1);
  });
