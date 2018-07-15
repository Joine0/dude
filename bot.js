const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
   client.user.setGame(("I'm Bot bc ."),`http://www.twitch.tv/rebel711`);
});
 
 
       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "#"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "bc") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');
          message.channel.send(`:loudspeaker:  تم ارسال هذة الرسالة الى **${message.guild.members.size}** مشترك `).then(m => m.delete(8000));
        message.guild.members.forEach(m => {
        let reaction1 = args.replace('-user', m)
m.send(`${reaction1}`);
})
}
}
});

       client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
            var prefix = "#"
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==prefix + "obc") {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');
    message.channel.send(`:loudspeaker:  تم ارسال هذة الرسالة الى **${message.guild.members.filter(m => m.presence.status !== 'online').size}** مشترك `)
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
        let reaction1 = args.replace('-user', m)
m.send(`${reaction1}`);
})
}
}
});
client.login(process.env.BOT_TOKEN);
