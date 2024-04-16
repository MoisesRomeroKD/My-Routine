const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const userExit = await User.findOne({ email });
    if (!email || !password) {
        return response.status(400).json({ error: 'Todos los espacios son requeridos, por favor asegurese de rellenarlos.' });
    }
    if (!userExit) {
        return response.status(400).json({ error: 'Email o contraseña invalido' });
    }
    if (!userExit.verified) {
        return response.status(400).json({ error: `Tu email no ha sido verificado.` });
    }

    const isCorrect = await bcrypt.compare(password, userExit.passwordHash);

    if (!isCorrect) {
        return response.status(400).json({ error: 'Email o contraseña invalido' });
    }
    const userForToken = {
        id: userExit.id
    };

    const accessToken = jwt.sign(userForToken, process.env.USER_TOKEN_SECRET, { expiresIn: '5d' });
    //milisegundo, segundo, minutos, horas, dias
    response.cookie('accessToken', accessToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    });

    return response.sendStatus(200);
})





module.exports = loginRouter;