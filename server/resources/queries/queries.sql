--name: delete-concern!
DELETE FROM concerns WHERE kyoodo_id=:kyoodo_id AND user_id=:user_id 

--name: insert-concern!
INSERT INTO concerns (kyoodo_id, user_id) VALUES (:kyoodo_id, :user_id)

--name: insert-kyoodo!
INSERT INTO kyoodos (from_user_id, to_user_id, content_raw, content) VALUES (:from_user_id, :to_user_id, :content_raw, :content)

-- name: insert-user!
INSERT INTO users (username, email) VALUES (:username, :email)
