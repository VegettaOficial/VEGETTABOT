let toM = (a) => "@" + a.split("@")[0];
function handler(m, {groupMetadata}) {
  let ps = groupMetadata.participants.map((v) => v.id);
  let a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(
    `*🔰 Vamos a hacer algunas amistades 🔰*\n\n*He ${toM(a)} hablale al privado a ${toM(
      b
    )} para que conversen y se haga una bonita amistad ❤️*\n\n*Las mejores amistades empiezan con una charla 😍*`,
    null,
    {
      mentions: [a, b],
    }
  );
}
handler.help = ["amistad"];
handler.tags = ["main", "fun"];
handler.command = ["amigorandom", "amistad"];
handler.group = true;
export default handler;
