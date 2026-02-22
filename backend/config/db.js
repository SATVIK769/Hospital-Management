import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://satvikm876_db_user:MQTwFgYVO9DbkTA9@cluster0.aa1i1ba.mongodb.net/MediCare").then(() => {
        console.log("DB CONNECTED");
    })
}
// mongodb+srv://satvikm876_db_user:MQTwFgYVO9DbkTA9@cluster0.aa1i1ba.mongodb.net/MediCare
// mongodb+srv://pathakaruni044_db_user:33opvrEuJl2iSUrH@cluster0.n9k2oso.mongodb.net/