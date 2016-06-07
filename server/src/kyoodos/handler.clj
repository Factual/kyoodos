(ns kyoodos.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.util.response :as rr]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [kyoodos.logic :as logic]))

(defroutes app-routes
  (GET "/" [] "Hello World")

  (GET "/users/:id{[0-9]+}" [id]
    (rr/response (logic/get-user (read-string id))))
  (POST "/users" request
    (rr/response (logic/create-user request)))
  (PUT "/users/:id{[0-9]+}" request
    (rr/response (logic/update-user request)))
  (DELETE "/users/:id{[0-9]+}" [id]
    (rr/response (logic/delete-user id)))

  (GET "/groups/:id{[0-9]+}" [id]
    (rr/response (logic/get-group (read-string id))))

  (GET "/kyoodos/:direction/:id{[0-9]+}" [direction id]
    (rr/response (logic/get-kyoodos (read-string direction) (read-string id))))

  (route/not-found "Not Found"))

(def app
  ; SK - turning off CSRF protection temporarily...
  (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false) ))
