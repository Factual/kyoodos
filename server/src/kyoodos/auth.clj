(ns kyoodos.auth
  (:require [cheshire.core :refer :all]
            [clj-oauth2.client :as oauth2]))

; to do - move this is a config file
(def CLIENT_ID "349096512619-5g3ijq5ocppnlmeji0spfn5kf1qjipgn.apps.googleusercontent.com")
(def CLIENT_SECRET "lZXZRvOFq4DJCBd3NK7y6LTm")

(def login-uri
  "https://accounts.google.com")

(def google-com-oath2
  {:authorization-uri (str login-uri "/o/oauth2/auth")
   :access-token-uri (str login-uri "/o/oauth2/token")
   :redirect-uri "http://localhost:8080/authentication/callback"
   :client-id CLIENT_ID
   :client-secret CLIENT_SECRET
   :access-query-param :access_token
   :scope ["https://www.googleapis.com/auth/userinfo.email"]
   :grant-type "authorization_code"
   :access-type "online"
   :approval_prompt ""})

