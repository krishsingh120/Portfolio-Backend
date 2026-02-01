const fastify = require("fastify")({ logger: false });

const app = require("./app");
const { PORT } = require("./config/serverConfig");

fastify.register(app);

fastify.get("/health", async () => {
  return { status: "ok" };
});

const startServer = async () => {
  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Server is listening on port http://localhost:${PORT}`);

    console.log(fastify.printRoutes());

    // fastify.log.info(`Server is listening on port http://localhost:${4200}`);
  } catch (err) {
    console.error("Fastify Server error: ", err);
    // fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
