const fastifyPlugin = require("fastify-plugin");

const emailService = require("./emailService");

async function servicePlugin(fastify, options) {
  await fastify.decorate("emailService", {
    sendMailService: emailService,
  });
}

module.exports = fastifyPlugin(servicePlugin);
