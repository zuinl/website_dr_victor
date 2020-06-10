module.exports = app => {
    app.post('/sendMail', app.api.mail.send)
}