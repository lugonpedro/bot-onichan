const Jikan = require("jikan-node");
const mal = new Jikan();

module.exports.run = async (client, message, args) => {
  var anime = "Anime não encontrado";

  async function findAnime() {
    mal
      .findAnime("11597", "episodes", 1)
      .then((info) => (anime = info))
      .catch((err) => (anime = err));
  }

  message.channel.send(anime);
};
