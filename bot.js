const tmi = require('tmi.js');

const client = new tmi.Client({
  identity: {
    username: 'العبد',
    password: process.env.TOKEN
  },
  channels: ['YOUR_CHANNEL_NAME']
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
});
