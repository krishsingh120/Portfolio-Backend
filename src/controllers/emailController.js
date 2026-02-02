const emailController = async (req, reply) => {
  try {
    // console.log("HEADERS:", req.headers);
    // console.log("BODY:", req.body);

    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      throw new Error("Some fields are missing");
    }

    // console.log(req.server);

    const sendMail = await req.server.emailService.sendMailService(req.body);

    return reply.code(200).send({
      success: true,
      data: sendMail,
      message: "Successfully sent a mail",
    });
  } catch (err) {
    return reply.code(401).send({
      success: false,
      message: "Unable to send mail",
      error: err.message,
    });
  }
};

module.exports = emailController;
