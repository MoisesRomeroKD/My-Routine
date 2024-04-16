const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;
    console.log(name, email, password);

    if (!name || !email || !password) {
        return response.status(400).json({ error: 'Todos los espacios son requeridos, por favor asegurese de rellenarlos.' });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        return response
            .status(400)
            .json({ error: 'El email ya se encuentra en uso' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
        name,
        email,
        passwordHash
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: savedUser.email, // list of receivers
        subject: 'Verificacion de usuario', // Subject line
        html: `<a target="_blank" href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar Usuario</a>`,
    });

    return response
        .status(201)
        .json(`Usuario creado. Revise su correo y verifique su Correo 
        ` );
    //<a target="_blank" href="https://mail.google.com/">Ir a correo</a>
});

usersRouter.patch('/:id/:token', async (request, response) => {
    try {
        //encontrar email
        const token = request.params.token;
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const id = decodedToken.id;
        await User.findByIdAndUpdate(id, { verified: true });
        return response.sendStatus(200);
    } catch (error) {
        //encontrar el email
        const id = request.params.id;
        const { email } = await User.findById(id);

        //firmar el nuevo token
        const token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });

        //enviar el email

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASS, // generated ethereal password
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to: email, // list of receivers
            subject: 'Verificacion de usuario', // Subject line
            html: `<a target="_blank" href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar Usuario</a>`,
        });

        return response.status(400).json({
            error: 'El link ya expiro, verifique de nuevo su correo'
        });
    }
});


module.exports = usersRouter;