(ns kyoodos.data
  (:require [cheshire.core :refer :all])
  (:use [kyoodos.utils.query_generator]))

(defqueries "queries/queries.sql")
  
(defn get-user [user-id]
  (get-user-raw {:user_id user-id}))
(defn create-user [token username email]
  (insert-user-raw! {:token token
                     :username username
                     :email email}))
(defn update-user [id token username email]
  (update-user-raw! {:id id
                     :token token
                     :username username
                     :email email}))
(defn delete-user [id]
  (delete-user-raw! {:id id}))

(defn get-group [group-id]
  (get-group-raw {:group_id group-id}))

(defn get-kyoodos [direction id]
  (case (str direction)
        "to" (get-to-kyoodos-raw {:user_or_group_id id})
        "from" (get-from-kyoodos-raw {:user_or_group_id id})
        (get-kyoodos-raw)))

(defn valid-user? [id]
  (let [existence (valid-user {:id id})]
    ((first existence) :exists)))

(defn valid-group? [id]
  (let [existence (valid-group {:id id})]
    ((first existence) :exists)))

(defn insert-kyoodos [content]
  (let [to (get-in content [:to])]
    (if (or (valid-user? to) (valid-group? to)) (insert-kyoodo-raw! {:from_user_id (content :from) :to_user_id (content :to) :content_raw (generate-string content) :content (content :content)}) (str "No such user or group: " to))))
