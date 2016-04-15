--name: insert-kyoodo!
INSERT INTO kyoodos (from_user_id, to_user_id, content_raw, content) VALUES (:from_user_id, :to_user_id, :content_raw, :content)
