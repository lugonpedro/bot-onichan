module.exports.run = async (client, message, args) => {
  const helpMessage = `**Comandos:**
    +perfil "nome do perfil" -> Perfil do My Anime List
    +anime "nome do anime" -> Detalhes do Anime
    +animes "nome do anime" -> Três Primeiros Animes da Lista
    +top40 anime|manga -> Top 40 dos Animes ou Mangás



    Bot desenvolvido por twitch.tv/goka0`;
  message.channel.send(helpMessage);
};
