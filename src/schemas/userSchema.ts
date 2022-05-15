import joi from 'joi';

const signUpSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    avatar: joi.string()
        .pattern(/https?:\/\/.*.(?:png|jpg)/)
        .required(),
    subtitle: joi.string(),
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: joi.string().min(6).required(),
});

const loginSchema = joi.object({
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: joi.string().min(6).required(),
});

export {
    signUpSchema,
    loginSchema,
};
