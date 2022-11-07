const User = require('../models/User')
const bcrypt = require('bcrypt')
const sendToken = require('../utils/jwtToken')


// fetching users /api/v1/users
exports.getUsers = async(req,res)=>{ 
    let users = await User.find()
    if(!users){
        res.status(400).json({
            success : true,
            message : 'user not found'
        })
    }

    res.status(200).json({
        success : true,
        message : 'user found',
        data : users
    })
    
}
//-------------------------------------------------------------------------------------------------------------
// fetching user /api/v1/user
exports.getUser = async(req,res)=>{ 
    let users = await User.findById(req.params.id)
    if(!users){
        res.status(400).json({
            success : true,
            message : 'user not found'
        })
    }

    res.status(200).json({
        success : true,
        message : 'user found',
        data : users
    })
    
}
//---------------------------------------------------------------------------------------------------------------
//update name => /api/v1/user/:id
exports.updateName = async(req,res)=>{
    const {name} = req.body;
    let user = user.findById(req.params.id);

    if(!user){
        res.status(400).json({
            success : true,
            message : 'user not found'
        })
    }
    user = User.updateOne({name : name});
    res.status(200).json({
        success : true,
        message : 'user found',
        data : user
    })
}


//---------------------------------------------------------------------------------------------------------------
// register new user /api/v1/register
exports.register = async(req,res)=>{
    const {name,email,password} = req.body;

    User.findOne({email : email}).then(async(user)=>{
        if(user){
            res.status(400).json({
                success : false,
                message : 'email already exist'
            })
        }else{
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });

            let user = await User.create(newUser);

            sendToken(user,200,res);
            console.log('cookie has been sent')
        }
    })
    
}
//-------------------------------------------------------------------------------------------------------------
// login user =>api/v1/login
exports.login = async(req,res)=>{
    const {email,password} = req.body;

    const user = User.findOne({email : email}).select('+password');
    user.then(async(user) =>{
        if(!user){
            res.status(404).json({
                success : false,
                message : 'email not found'
            })
        }else{
            const match = await bcrypt.compare(password, user.password,(err,result)=>{
                console.log('inside cb')
                console.log('err ' + err)
                if(err){
                    console.log('inside error')
                    res.status(400).json({
                        success : false,
                        message : 'something went wrong'
                    })
                }if(result){
                    console.log('matched successfully')

                    sendToken(user,200,res);
                }else{
                    console.log('pass mismatched ')
                    res.status(400).json({
                        success : false,
                        message : 'user not authenticated',
                    })
                }
            });
        }
    })
}
//-------------------------------------------------------------------------------------------------------------