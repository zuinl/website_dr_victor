const sendmail = require('sendmail')()
const validator = require('email-validator')

module.exports = app => {
    const send = (req, res) => {
        if(!validator.validate(req.body.from)) 
            return res.status(400).json("O e-mail do remetente é inválido")
        else if(!validator.validate(req.body.to)) 
            return res.status(400).json("O e-mail do destinatário é inválido")
        else if(req.body.subject.trim() == "") 
            return res.status(400).json("O assunto não foi preenchido")
        else if(req.body.html.trim() == "") 
            return res.status(400).json("O texto da mensagem está vazio")

        sendmail({
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            html: req.body.html
        }, (err, reply) => {
            if(err) res.status(500).json("Houve um erro: " + err)
            else res.status(200).json("Enviado")
        })
    }

    return { send }
}