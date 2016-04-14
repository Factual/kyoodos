(ns com.factual.kyoodos.tools.import-users
  (:require [com.factual.kyoodos.utils.query_generator :as query_generator]
            [clojure.data.json]))

(def people
  (clojure.data.json/read-str
    (slurp
      (clojure.java.io/file
        (clojure.java.io/resource
          "people.json")))
    :key-fn keyword))

(query_generator/defqueries "queries/insert-user.sql")

(doseq [p people]
  (insert-user! { :username (:full_name p) :email (:email p) }))
