(ns kyoodos.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [kyoodos.logic :as logic]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

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
