const tmi = require('tmi.js');

const client = new tmi.Client({
  identity: {
    username: 'al33bd',
    password: 'oauth:27vt7pedmjqs0ui3hz9n0opzoh4vmg'
  },
  channels: ['Abonaaif']
});

client.connect();

const welcomedUsers = new Set();

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const user = tags.username;
  const msg = message.toLowerCase();

  if (!welcomedUsers.has(user)) {
    welcomedUsers.add(user);
    client.say(channel, `✨ نورت يا ${user}`);
  }

  if (msg === '!هلا') {
    client.say(channel, `هلا والله ${user} 👋`);
  }

if (msg === 'ابو البي') {
    client.say(channel, `هل تقصد الاصلع؟ ${user} 👋`);
  }
  
 

  setInterval(() => {
  client.say(channel, '💜 لا تنسى تتابع القناة!');
}, 1000000);


  

  '!فولو': () => {
    return '💜 لا تنسى تتابع القناة!';
  },

 


  

  '!قوانين': () => {
    return '🚫 ممنوع السب - 🚫 سبام - استمتعوا 🤍';
  },

  '!انستا': () => {
    return '📸 حساب الانستقرام: https://www.instagram.com/';
  },

  '!تيك': () => {
    return '🎵 حساب التيك توك: https://www.tiktok.com/@zp1dr';
  },

 
  

  '!اب': () => {
    return '🔥 لا تنسى اللايك يا وحش!';
  },

  '!بث': () => {
    return '🔴 البث شغال لا تفوتك!';
  }

  // الردود
if (commands[msg]) {
  client.say(channel, commands[msg](channel, tags.username));
}

// سؤال البوت
if (msg.includes('هل انت انسان')) {
  client.say(channel, 'انا مملوك لبونايف 🤖');
}

  if (msg.includes('يا عبد') || msg.includes('ياعبد')) {
  client.say(channel, 'انت العبد انا مملوك لبو نايف 🤖');
}
  
};
  
});
