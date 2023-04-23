const ERROR_TYPES = require('../../config/error');

module.exports = (req, res, next) => {
    const data = req.body;
    let message = '';
    if (!data.name.match('^[a-zA-Z ]*$')) {
        message = 'Invalid characters in Name'
    } else if (!data.emailId.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')) {
        message = 'Invalid Email Pattern';
    } else if (!data.password.match('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{6,12}$')) {
        message = `Password must contain 1 uppercase, 1 lowercase, 1 symbol, 1 number and have minimum 6 characters and maximum 12 characters`;
    }
    if (message)
        return res.status(ERROR_TYPES.BAD_REQUEST.code).send({ success: false, data: '', message: message, status: ERROR_TYPES.BAD_REQUEST.status });
    next();
}
