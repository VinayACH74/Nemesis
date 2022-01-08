const express = require("express");
const adminAuthenticate = require("../middleware/adminAuthenticate");
const Admin = require("../model/adminSchema");
const router = express.Router();
const User = require("../model/userSchema");

router.post("/", async (req, res) => {
  try {
    // let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Filled the missing data" });
    }
    const userLogin = await Admin.findOne({ email: email, password: password});
    // //compare password and email
    if (userLogin) {
      const isMatch = await (password == password);
      token = await userLogin.generateToken();

      // storing cookies
      res.cookie("admintoken", token),
        {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        };

      if (!isMatch) {
        res.json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "User sigin successfully" });
      }
    } else {
      res.json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/adminTab/createuser', adminAuthenticate, async (req, res) => {

  //getting the values 
  const { username, mobileno, email, address } = req.body;
  //checking if all the values are filled
  if (!username|| !mobileno || !email || !address) {
      return res.status(422).json({ error: "Fill the missing fields" });
  }

  try {
      //Check if the eamil already exists and password are same
      const userExist = await User.findOne({ email: email });
      if (userExist) {
          return res.status(422).json({ error: "Email already exists" });
      }else {
          const user = new User({ username, mobileno, email, address });

          const userRegister = await user.save();

          if (userRegister) {
              res.status(201).json({ message: "User registered successfully" });
          } else {
              res.status(500).json({ error: "Failed to registered" });
          }
      }
  } catch (err) {
      console.log(err);
  }

});

router.get("/adminTab/userdetails", adminAuthenticate, async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

router.delete("/adminTab/userdetails/:mainid", adminAuthenticate, async (req, res) => {
    const mainid = req.params.mainid;
    // console.log(mainid)
    const deletedata = await User.findOneAndDelete({ _id: mainid });
    // console.log(deletedata);
    if (deletedata) {
      res.status(200).json({ message: "User Deleted" });
    }
  }
);

router.get('/logout',(req,res)=>{
  console.log("Logout page");
  res.clearCookie('admintoken',{path:'/'});
  res.status(200).send('User Logout');
});

module.exports = router;
