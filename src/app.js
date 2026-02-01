const fastifyPlugins = require("fastify-plugin");
const cors = require("@fastify/cors");
const formBody = require("@fastify/formbody");

const servicePlugin = require("./services/servicePlugin");
const corsOption = {
  origin: "*",
  methods: ["POST", "GET"],
};

async function app(fastify, options) {
  try {
    await fastify.register(formBody);
    await fastify.register(cors, corsOption);
    await fastify.register(servicePlugin);

    await fastify.register(require("./routes/apiRoutes"), { prefix: "/api" });
  } catch (error) {
    console.error("App error: ", error);
  }
}

module.exports = fastifyPlugins(app);
