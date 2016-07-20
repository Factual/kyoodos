import { emojiPosition } from './slack-emoji'

export function parseKyoodos(kyoodosArr) {
  let user_ids = {}
  kyoodosArr.forEach((kyoodo) => {
    let ids = getUsersFromKyoodo(kyoodo)
    for(var i=0;i<ids.length;i++) {
      user_ids[ids[i]] = true 
    } 
  })
  return Object.keys(user_ids)
}

export function getUsersFromKyoodo(kyoodo) {
  var res = {},
      users = {},
      matches = kyoodo.content.match(/<@.{9}>/g) || [],
      receiverIds = matches.map(function (m) {
        return m.match(/<@(.{9})>/)[1];
      }),
      userIds = receiverIds.concat([kyoodo.from_user_id]);
  return userIds
}

export function parseKyoodoContent(content) {
    let foobar = content.split(/((?:<@.{9}>)|(?::[^: ]+:))/);
    let message = foobar.map((x) => {
      if (x.match(/<@.{9}>/)) {
        var id = x.match(/<@(.{9})>/)[1];
        x = {
          type: 'user',
          id: id
        };
      } else if (x.match(/^:[^:]+:$/)) {
        x = {
          type: 'emoji',
          txt: x,
          position: emojiPosition[x]
        };
      }
      return x;
    });
    return message
}

