import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome to Project Camp! We're excited to onboard you.",
            action:{
                instructions: "To verify your email click on the following button.",
                button: {
                    color: "#00ff6eff",
                    text: "Verify Your Email",
                    link: verificationURL
                }
            },
            outro: "Need help, or have questions? just reply to this email, we would love to help."
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetURL) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of your account.",
            action:{
                instructions: "To reset your password click on the following button.",
                button: {
                    color: "#ff0000ff",
                    text: "Verify Your Email",
                    link: passwordResetURL
                }
            },
            outro: "Need help, or have questions? just reply to this email, we would love to help."
        }
    }
}

export {
    emailVerificationMailgenContent, 
    forgotPasswordMailgenContent
}