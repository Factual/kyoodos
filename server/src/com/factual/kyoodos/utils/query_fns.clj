(ns com.factual.kyoodos.utils.query_generator
  (:require '[yesql.core :refer [defquery db-spec]]
            [clojure.data.json]))

(defquery insert-kyoodo "resources/queries/insert-kyoodo.sql"
  {:connection db-spec})

(defquery insert-concern "resources/queries/insert-concern"
  {:connection db-spec})

(defquery delete-concern "resources/queries/delete-concern"
  {:connection db-spec})

(defquery insert-user "resources/queries/insert-user"
  {:connection db-spec})
