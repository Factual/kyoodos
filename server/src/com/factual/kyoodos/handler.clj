(ns com.factual.kyoodos.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

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

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/kyoodos" [] get-kyoodos)
  (POST "/kyoodos" [] post-kyoodos)
  (GET "/user" [] get-user)
  (GET "/group" [] get-group)
  (route/not-found "Not Found"))

(def app
  ; SK - turning off CSRF protection temporarily... 
  (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false) ))
