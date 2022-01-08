const jwt = require('jsonwebtoken');
const Admin = require('../model/adminSchema')

const adminAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.admintoken;
        if(!token){
            console.log("Token not found",token);
        }
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const adminUser = await Admin.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!adminUser){
            throw new Error('User not found');
        }
        req.token = token;
        req.adminUser = adminUser;
        // console.log(token)
        next();
    } catch (err) {
        res.status(401).send('Unauthorized:No token provided');
        console.log(err)
    }
}

module.exports = adminAuthenticate;