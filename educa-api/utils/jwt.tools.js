const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'Supersecret';
const expTime = process.env.TOKEN_EXP || '15m';

const tools = {};


tools.createToken = (_id, email, role) => {
    return jwt.sign({
        userId: _id,
        userEmail: email,
        userRole: role
    }, secret, { expiresIn: expTime });
}

tools.verifyToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch {
        return false;
    }
}

module.exports = tools;