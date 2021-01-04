const nodeMailer = require('../config/nodemailer');


exports.newComment = (comment) => {
    console.log('inside newComment mailer', comment);
    nodeMailer.transporter.sendMail({
        from : 'pulkitnagpal987654321@gmail.com',
        to: comment.user.email,
        subject:'New Comment published!',
        html: '<h1>Comment Published</h1>'
    }, (err, info) => {
        if(err){console.log('Error in sending mail', err); return;}
        console.log('Message sent', info);
        return;
    })
}