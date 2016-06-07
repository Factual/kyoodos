(ns kyoodos.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [kyoodos.logic :as logic]))

(defroutes app-routes
  (GET "/" [] "Hello world!")
  (GET "/users/:id{[0-9]+}" [id]
    (logic/get-user (read-string id)))
  (POST "/users" request
    (logic/create-user request))
  (PUT "/users/:id{[0-9]+}" request
    (logic/update-user request))
  (DELETE "/users/:id{[0-9]+}" [id]
    (logic/delete-user id))

  (GET "/groups/:id{[0-9]+}" [id]
    (logic/get-group (read-string id)))

  (GET "/kyoodos/:direction/:id{[0-9]+}" [direction id]
    (logic/get-kyoodos (read-string direction) (read-string id)))

  (route/not-found "Not Found"))

(def app
  ; SK - turning off CSRF protection temporarily...
  (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false) ))
