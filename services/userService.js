const User = require("../models/User");

exports.getInfo = (userid) => User.findById(userid).populate(["createdCourses", "signedUpCourses"]);