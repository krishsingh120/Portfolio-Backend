const transport = require("../utils/email");
const EMAIL_TO = require("../utils/constants");
const { EMAIL_AUTH_USER } = require("../config/serverConfig");

const sendMailService = async (emailDetails) => {
  try {
    const { name, email, subject, message } = emailDetails;
    console.log(emailDetails, "inside service");

    // const mailResponse = await transport.sendMail({
    //   from: `"Portfolio Contact" <${EMAIL_AUTH_USER}>`,
    //   to: EMAIL_TO,
    //   replyTo: email,
    //   subject: subject || "New Contact Message",

    //   text: `
    //         Name: ${name}
    //         Email: ${email}

    //         Message:
    //         ${message}
    //        `,

    //   html: `
    //       <h2>New Contact Message</h2>
    //       <p><b>Name:</b> ${name}</p>
    //       <p><b>Email:</b> ${email}</p>
    //       <p><b>Subject:</b> ${subject}</p>
    //       <p><b>Message:</b><br/>${message}</p>
    //        `,
    // });

    const mailResponse = await transport.sendMail({
      from: `"Portfolio Contact" <${EMAIL_AUTH_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: subject || "New Contact Message",

      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}
      `,

      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6fb; padding:30px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1);">

          <!-- Header -->
          <div style="background:linear-gradient(135deg,#4f46e5,#9333ea); padding:20px;">
            <h2 style="color:#ffffff; margin:0; text-align:center;">
              📩 New Contact Message
            </h2>
          </div>

          <!-- Body -->
          <div style="padding:25px; color:#333;">
            <p style="margin:0 0 12px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 12px;"><strong>Email:</strong> 
              <a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">
                ${email}
              </a>
            </p>
            <p style="margin:0 0 20px;"><strong>Subject:</strong> ${subject}</p>

            <div style="background:#f9fafb; padding:15px; border-radius:6px; border-left:4px solid #4f46e5;">
              <p style="margin:0; white-space:pre-line;">
                ${message}
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding:15px; background:#f1f5f9; text-align:center; font-size:12px; color:#555;">
            <p style="margin:0;">
              This message was sent from your portfolio contact form.
            </p>
          </div>

        </div>
      </div>
  `,
    });

    console.log("mail id is: ", mailResponse.messageId);

    return mailResponse;
  } catch (error) {
    console.error("Something went wrong in mail service", error);
  }
};

module.exports = sendMailService;
