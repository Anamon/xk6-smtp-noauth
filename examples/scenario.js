import smtp from 'k6/x/smtp';


export default function () {
    const mailOptions = {
        subject: "Test subject",
        message: "Test message",
        udw: ["udwRecipient@gmail.com"]
    }

    smtp.SendMail(
        "smtp.gmail.com",
        "587",
        "sender@gmail.com",
        "recipient@gmail.com",
        mailOptions
    )
}
