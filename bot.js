const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
                                                                                                                                                                 





client.on('ready', () => {                           
client.user.setGame(`System Zorex`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});






client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`💥Welcome To Server Zorex Community💥
💥Name Member: ${member}
💥You Number: ${member.guild.memberCount}`) 
}).catch(console.error)
})





client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('#bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "SYSTEM SERVER";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🎇**Zorex Community**🎇')
.addField('👑**الرسالة**👑', args)
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on('message',async Epic => {
  var codes = "#";
  if(Epic.content.startsWith(codes + "onlinezorex")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **ليس معي الصلاحيات الكافية**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(` Zorex_online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});




client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
  msg.reply('**👑وعليكم السلام👑**')
});



client.on('message', msg => {
  if(msg.content === 'مرحبا')
  msg.reply('**😍مراحب😍**')
});





client.on('message', msg => {
  if(msg.content === 'برب')
  msg.reply('**😍الله معك😍**')
});




client.on('message', msg => {
  if(msg.content === 'باي')
  msg.reply('**👑الله معك👑**')
});



client.on('message', msg => {
  if(msg.content === 'شعار')
  msg.reply('**! Zx™**')
});



client.on('message', msg => {
  if(msg.content === ' موقع السيرفر')
  msg.reply('**👑https://ZorexHost.com👑**')
});




client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply('**💥هلوات💥**')
});







client.login(process.env.BOT_TOKEN);
