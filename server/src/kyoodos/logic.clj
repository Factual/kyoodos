(ns kyoodos.logic
  (:require [kyoodos.data :as data]
            [cheshire.core :as json]))

(defn get-kyoodos [direction id]
  (json/generate-string (data/get-kyoodos direction id)))

(defn get-group [request]
  (json/generate-string (data/get-group request)))

(defn get-user [request]
  (json/generate-string (data/get-user request)))

(defn create-user [request]
  (let [token    (get (:params request) :token)
        username (get (:params request) :username)
        email    (get (:params request) :email)]
    (json/generate-string (data/create-user token username email))))
