const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer ({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autoconvocada
//agnostica porq no tiene nombre
//autoconvocada porq se ejecuta con el parentisis
(async () => {
    main()
})()