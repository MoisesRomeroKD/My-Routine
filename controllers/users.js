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
        html: `    <div style="height: 450px; width: 500px;
        background-color: #0000ff; 
        border-radius: 20px;
        display: flex; align-items: center;
        justify-content: center;">
        <p style="height: 100%; width: 75%; 
        color: #000; display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 20px;">
            Hola, ¡Bienvenido! a nuestra
            pagina web para comenzar, por
            favor verifica tu correo,
            dando click en el siguiente
            enlace, si no fuiste tu quien
            se registro no hagas click
            en el link y cambia tus datos.
        </p>
            <a target="_blank"
        href="${PAGE_URL}/verify/${savedUser.id}/${token}" 
        style="height: 100%;
        width: 25%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 700;
        text-decoration: none;
        padding: 20px;">
            Verificar el correo
            </a>
        </div>`
    });

    return response
        .status(201)
        .json('Usuario creado. Revise su correo y verifique su Usuario.');

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
            html: `    <div style="height: 450px; width: 500px;
        background-color: #0000ff; 
        border-radius: 20px;
        display: flex; align-items: center;
        justify-content: center;">
        <p style="height: 100%; width: 75%; 
        color: #000; display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 20px;">
            Hola, ¡Bienvenido! a nuestra
            pagina web para comenzar, por
            favor verifica tu correo,
            dando click en el siguiente
            enlace, si no fuiste tu quien
            se registro no hagas click
            en el link y cambia tus datos.
        </p>
            <a target="_blank"
        href="${PAGE_URL}/verify/${savedUser.id}/${token}" 
        style="height: 100%;
        width: 25%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 700;
        text-decoration: none;
        padding: 20px;">
            Verificar el correo
            </a>
        </div>
        `
        });
        return response.status(400).json({
            error: 'El link ya expiro, verifique de nuevo su correo'
        });
    }
});


module.exports = usersRouter;