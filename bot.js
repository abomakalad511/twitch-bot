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

   if (msg === '!هل انت عبد') {
    client.say(channel, `انا مطيع لبونايف ${user} 👋`);
  }
});
