const withPlugins = require("next-compose-plugins");

const config = {
    env: {
        API_URL: "https://60a1d813745cd70017575841.mockapi.io/api/",
    },
};

module.exports = withPlugins([], config);
