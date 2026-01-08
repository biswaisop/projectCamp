import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async(options) => {
    const generator = new Mailgen(
        {
            theme: "default",
            product: {
                name: "Project Camp",
                link: "https://projectcamp.com"
            },
        }
    )
    const emailTextual = generator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailgenContent.generate (options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS
        }
    })

    const mail = {
        from: "mail.projectcamp@example.com",
        to: options.email,
        subject: options.subject,
        text: options.emailTextual,
        html: options.emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email Service failed!")
    }
}


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
    forgotPasswordMailgenContent,
    sendEmail
}