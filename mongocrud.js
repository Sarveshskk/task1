const mongoose = require("mongoose");
const records = require("./users");
const recordsProfile = require("./usersProfile");

mongoose.connect("mongodb://localhost:27017/users");

var usersSchema = mongoose.Schema({
    first_name: String,
    email: String,
    last_name: String,
    passs: {
        type: String,
        required: true,
    },
});
var usersProfileSchema = mongoose.Schema({
    user_id: {
        type: Number,
        unique: true,
    },
    Dob: String,
    mobile_no: {
        type: Number,
        min: [10, "enter 10 digit"],
        max: 10,
    },
});

var Users = mongoose.model("Users", usersSchema);
var UsersProfile = mongoose.model("UsersProfile", usersProfileSchema);

    Users.collection.insertMany(records, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("data inserted");
        }
    });

    UsersProfile.collection.insertMany(recordsProfile, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("data inserted profile");
        }
    });



async function avgDob() {
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    let user = await UsersProfile.find({})
    var age_data=[];
    for (let i of user) {
        age_data.push(getAge(i.Dob));
    }
    avg_age = age_data.reduce((total, number) => {
        return total + number;
    });
    console.log("average_age of all users:"+ avg_age / 5);
};

avgDob();



UsersProfile.deleteMany({Dob: {$gte:"05/08/2001"} }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted User : ", docs);
    }
});
