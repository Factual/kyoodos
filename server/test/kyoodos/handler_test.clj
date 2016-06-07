(ns kyoodos.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [kyoodos.handler :refer :all]))

(deftest test-app
; (testing "main route"
;   (let [response (app (mock/request :get "/"))]
;     (is (= (:status response) 200))
;     (is (= (:body response) "Hello World"))))
;
;  (testing "not-found route"
;    (let [response (app (mock/request :get "/invalid"))]
;      (is (= (:status response) 404)))))
;
;  (testing "get kyoodos route"
;    (let [response (app (mock/request :get "/kyoodos" {:user_or_group_id "1", :direction "from"}))]
;      (is (= (:status response) 200))
;      (is (= (:body response) {:direction "from" :user_or_group_id "1"}))))
;
;  (testing "post kyoodos route"
;    (let [response (app (mock/request :post "/kyoodos" {:content "good job"}))]
;      (is (= (:status response) 200))
;      (is (= (:body response) {:status "success"}))))
;
;  (testing "get user route"
;    (let [response (app (mock/request :get "/user" {:user_id "1"}))]
;      (is (= (:status response) 200))
;      (is (= (:body response) {:user_id "1"}))))
;
;  (testing "get group route"
;    (let [response (app (mock/request :get "/group" {:group_id "1"}))]
;      (is (= (:status response) 200))
;      (is (= (:body response) {:group_id "1"}))))
;
;  (testing "post users route"
;    (let [response (app (mock/request :post "/users" {:token "!2" :username "HH1" :email "honghao+hh1@factual.com"}))]
;      (is (= (:status response) 200))
;      (is (= (:body response) "1"))))
)
