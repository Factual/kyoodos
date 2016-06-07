-- name: get-group-raw
SELECT * FROM groups WHERE id = :group_id

-- name: get-to-kyoodos-raw
SELECT * FROM kyoodos WHERE to_user_id = :user_or_group_id OR to_user_id = (SELECT group_id from user_groups WHERE user_id = :user_or_group_id)

-- name: get-from-kyoodos-raw
SELECT * FROM kyoodos WHERE from_user_id = :user_or_group_id OR from_user_id = (SELECT group_id from user_groups WHERE user_id = :user_or_group_id)

-- name: get-kyoodos-raw
SELECT * FROM kyoodos

-- name: valid-user
SELECT EXISTS(SELECT * FROM users WHERE id=:id)

-- name: valid-group
SELECT EXISTS(SELECT * FROM groups where id=:id)

--name: insert-kyoodo-raw!
INSERT INTO kyoodos (from_user_id, to_user_id, content_raw, content) VALUES (:from_user_id, :to_user_id, :content_raw, :content)

-- name: get-user-raw
SELECT * FROM users WHERE id = :user_id
--name: insert-user-raw!
INSERT INTO users (token, username, email) VALUES (:token, :username, :email)
--name: update-user-raw!
UPDATE users SET token=:token, username=:username, email=:email WHERE id=:id
--name: delete-user-raw!
DELETE FROM users WHERE id=:id
