(ns kyoodos.data-test 
  (:require [clojure.test :refer :all]
            [kyoodos.data :refer :all]))

(deftest get-user-test
  (testing "you can get user by id"
    (is (= "Sevada Abraamyan" ( -> (get-user 1) first :username )))))

(deftest get-group-test
  (testing "you can get a group by its id"
    (is (= "front" ( -> (get-group 1) first :name)))))

(deftest get-kyoodos-from-test
  (testing "you can get kyoodos from a user"
    (is (= "Great job!" ( -> (get-kyoodos "from" 41) first :content)))))

(deftest get-kyoodos-to-test
  (testing "you can get kyoodos to a user"
    (is (= "Great job!" ( -> (get-kyoodos "to" 180) first :content)))))

(deftest valid-user-test
  (testing "should be true if user exists in db"
    (is (= true (valid-user? 1)))))

(deftest invalid-user-test
  (testing "should be false if user does not exist in db"
    (is (= false (valid-user? 300000)))))

(deftest valid-group-test
  (testing "should be true if group exists in db"
    (is (= true (valid-group? 1)))))

(deftest invalid-group-test
  (testing "should be true if group exists in db"
    (is (= false (valid-group? 300000)))))
