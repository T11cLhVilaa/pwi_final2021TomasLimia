const Joi = require("@hapi/joi");

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty" : "No puedes dejar el nombre vacío."
        }),
        contra: Joi.string().min(4).max(20).required().messages({
            "string.empty" : "No puedes dejar la contraseña vacía.",
            "string.min" :  "La contraseña debe tener al menos 4 caracteres.",
            "string.max" :  "La contraseña puede tener como máximo 20 caracteres."
        }),
    }),
    registro: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty" : "No puedes dejar el nombre vacío."
        }),
        contra: Joi.string().min(4).max(20).required().messages({
            "string.empty" : "No puedes dejar la contraseña vacía.",
            "string.min" :  "La contraseña debe tener al menos 4 caracteres.",
            "string.max" :  "La contraseña puede tener como máximo 20 caracteres."
        }),
        mail: Joi.string().email().required(),
    })
}

module.exports = {schemas};