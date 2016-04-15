(ns com.factual.kyoodos.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defn post-kyoodos [request]
  (let [content (get-in request [:params :content])]
    (str "You posted: " content)))
    ;{:status 200 :headers {"Content-type" "application/json"} :body "{}"})

; if no :user_or_group_id, get current_user kyoodos
(defn get-kyoodos [request]
  (let [user-group-id (get-in request [:params :user_or_group_id])]
    (let [direction (get-in request [:params :direction])]
      (str "You requested kyoodos " direction " "  user-group-id))))
    ;{:status 200 :headers {"Content-type" "application/json"} :body "{}"})))
  
(defn get-user [request]
  (let [user-id (get-in request [:params :user_id])]
    (str "You requested user: " user-id)))

(defn get-group [request]
  (let [group-id (get-in request [:params :group_id])]
    (str "You requested user: " group-id)))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/test" [] 
    {:status 200 :headers {"Content-type" "application/json"} :body "{}"})
  (GET "/kyoodos" [] get-kyoodos)
  (POST "/kyoodos" [] post-kyoodos)
  (GET "/user" [] get-user)
  (GET "/group" [] get-group)
  (route/not-found "Not Found"))

(def app
  ; SK - turning off CSRF protection temporarily... 
  (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false) ))
