const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const DB = process.env.MONGO_URL;

module.exports = function (callback) {
    mongoose.connect(
        "mongodb+srv://Parth:nBRdfgdgHavz0uM3@cluster0.xgiwngw.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true },
        async (err, result) => {
            if (err) console.log("---" + err);
            else {
                console.log("connected to mongo");
                const foodCollection = await mongoose.connection.db.collection(
                    "food_items"
                );
                // foodCollection.find({}).toArray(async function (err, data) {
                //     const categoryCollection =
                //         await mongoose.connection.db.collection("Categories");
                //     categoryCollection
                //         .find({})
                //         .toArray(async function (err, Catdata) {
                //             if (err) console.log(err);
                //             else {

                //             }
                //         });
                // });
            }
        }
    );
};
