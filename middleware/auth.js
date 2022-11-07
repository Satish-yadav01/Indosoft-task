const jwt = require('jsonwebtoken')
const User = require('../models/User');

exports.isAuthenticatedUser = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            res.status(401).json({
                success: false,
                message: 'login first to access this resource'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRECT)
        req.user = await User.findById(decoded.id);
        next();
    } catch {
        res.status(401).json({
            success: false,
            message: 'sasas'
        })
    }
}

