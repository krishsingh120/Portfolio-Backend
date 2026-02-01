const fastifyPlugins = require("fastify-plugin");
const emailController = require("../controllers/emailController");

async function emailRoutes(fastify, options) {
  await fastify.post("/send", emailController);
}

module.exports = emailRoutes;
