const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {

    const msg = {
        to: options.email,
        from: process.env.SENDGRID_MAIL,
        templateId: options.templateId,
        dynamic_template_data:{ 
            // subject: 'Please reset your password from Given link',
            link: options.data.reset_url,
            namei: options.data.user.name,
            emaill: options.data.user.email,
            usern: options.data.user.username,
            avatart: options.data.user.avatar,
            boi: options.data.user.bio,
            followe: options.data.user.followers,
            followi: options.data.user.following,
            web: options.data.user.website,
             time: process.env.COOKIE_EXPIRE,
             
               
        },
    }
    // console.log(options.data.reset_url)
    // console.log(options.data.user.name)
    // console.log(options.data.user.email)
    // console.log(options.data.user.username)
    // console.log(options.data.user.avatar)
    // console.log(process.env.COOKIE_EXPIRE)
    sgMail.send(msg).then(() => {
        console.log('Email Sent')
    }).catch((error) => {
        console.error(error)
    });
};

module.exports = sendEmail;