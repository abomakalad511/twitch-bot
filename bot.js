const tmi = require('tmi.js');

const client = new tmi.Client({
  identity: {
    username: 'al33bd',
    password: 'oauth:27vt7pedmjqs0ui3hz9n0opzoh4vmg'
  },
  channels: ['Abonaaif']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const msg = message.toLowerCase();
  const user = tags.username;

 // 👋 هلا
  if (msg === '!هلا') {
    client.say(channel, `هلا والله ${user} 👋`);
  } 

  // 💜 فولو
  if (msg === '!فولو') {
    client.say(channel, '💜 لا تنسى المتابعة');
  }

  // 📢 دسكورد
  if (msg === '!تيك') {
    client.say(channel, '📢 https://www.tiktok.com/@zp1dr');
  }

  // 📜 قوانين
  if (msg === '!قوانين') {
    client.say(channel, '🚫 ممنوع السب - 🚫 سبام - احترام الجميع 🤍');
  }

  // 🤖 رد ذكي
  if (msg.includes('يا عبد')) {
    client.say(channel, 'انت العبد انا مملوك لبو نايف 🤖');
  }
  
if (msg.includes('ابو البي')) {
    client.say(channel, 'تقصد الاصلع ؟');
  }
  
});
