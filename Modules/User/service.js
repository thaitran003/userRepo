const UserModel = require("../../models/user");
exports.all = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.json({
      status: 200,
      message: "Success",
      data: users,
    });
  } catch (err) {
    return res.json({
      status: 500,
      message: "Error",
    });
  }
};
exports.store = async (req, res) => {
  try {
    const { name, avata, age,gender } = req.body;
    if (!name || !avata || !age||!gender) {
      return res.json({
        status: 422,
        message: "name,avata,age,gender is require",
      });
    }
    const user = await UserModel.create({
      name: name,
      avata: avata,
      age: parseInt(age),
      gender:gender
    });
    return res.json({
      status: 200,
      message: "Success",
      data: user,
    });
  } catch (err) {
    return res.json({
      status: 500,
      message: "Error",
      data:err
    });
  }
};
exports.index = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({
      _id:id
    });
    return res.json({
      status: 200,
      message: "Success",
      data: user,
    });
  } catch (err) {
    return res.json({
      status: 500,
      message: "Error",
      data:err
    });
  }
};