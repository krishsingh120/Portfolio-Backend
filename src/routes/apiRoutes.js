const fastifyPlugin = require("fastify-plugin");

async function apiPlugins(fastify, options) {
  await fastify.register(require("./emailRoutes"), { prefix: "/user" });
}

module.exports = apiPlugins
