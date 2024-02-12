const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/secrets');
const { logger } = require('./logger');

const generate = (id,email) => jwt.sign({ id:id,email:email }, JWT_SECRET_KEY, { expiresIn: '1d'});

const decode = (token) => {
    try {
        console.log("decoded token-->"+token)
        console.log("stringify decoded token-->"+JSON.stringify(token))
        return jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
        logger.error(error);
    }
};

module.exports = {
    generate,
    decode
}