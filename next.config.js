const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  //dev server config
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        ENV_VAR: "http://localhost:3000",
      },
    };
  }

  //prod server config
  return {
    reactStrictMode: true,
    env: {
      ENV_VAR: "http://localhost:3000",
    },
  };
};
