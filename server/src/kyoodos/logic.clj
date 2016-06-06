(ns kyoodos.logic
  (:require [kyoodos.data :as data]
            [cheshire.core :as json]))

(defn get-kyoodos [direction id]
  (json/generate-string (data/get-kyoodos direction id)))

(defn get-group [request]
  (json/generate-string (data/get-group request)))

(defn get-user [request]
  (json/generate-string (data/get-user request)))
