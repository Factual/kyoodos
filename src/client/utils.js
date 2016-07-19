export function parseKyoodos(kyoodosArr) {
  let user_ids = {}
  kyoodosArr.forEach((kyoodo) => {
    let ids = parseKyoodo(kyoodo)
    for(var i=0;i<ids.length;i++) {
      user_ids[ids[i]] = true 
    } 
  })
  return Object.keys(user_ids)
}

export function parseKyoodo(kyoodo) {
  var res = {},
      users = {},
      matches = kyoodo.content.match(/<@.{9}>/g) || [],
      receiverIds = matches.map(function (m) {
        return m.match(/<@(.{9})>/)[1];
      }),
      userIds = receiverIds.concat([kyoodo.from_user_id]);
  return userIds
}
