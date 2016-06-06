(ns kyoodos.data
  (:use [kyoodos.utils.query_generator]))

(defqueries "queries/queries.sql")

; if no :user_or_group_id, get current_user kyoodos
(defn get-kyoodos [request]
  (let [user-group-id (get-in request [:params :user_or_group_id])]
    (let [direction (get-in request [:params :direction])]
      {:status 200 :headers {"Content-type" "application/json"} :body {:direction direction :user_or_group_id user-group-id}})))
  
(defn post-kyoodos [request]
  (let [content (get-in request [:params :content])]
    {:status 200 :headers {"Content-type" "application/json"} :body {:status "success"}}))

(defn get-user [request]
  (let [user-id (get-in request [:params :user_id])]
    {:status 200 :headers {"Content-type" "application/json"} :body {:user_id user-id}}))

(defn get-group [request]
  (let [group-id (get-in request [:params :group_id])]
    {:status 200 :headers {"Content-type" "application/json"} :body {:group_id group-id}}))

