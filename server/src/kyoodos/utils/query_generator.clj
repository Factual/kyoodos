(ns kyoodos.utils.query_generator
  (:require [yesql.core]
            [clojure.data.json]))

(def db-spec
  (clojure.data.json/read-str
    (slurp
      (clojure.java.io/file
        (clojure.java.io/resource
          "config/database.json")))
    :key-fn keyword))

(defn defquery [fun-name query-file-path]
  (yesql.core/defquery
    fun-name
    query-file-path
    {:connection db-spec}))

(defn defqueries [query-file-path]
  (yesql.core/defqueries
    query-file-path
    {:connection db-spec}))
