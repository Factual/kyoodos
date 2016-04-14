(defproject . "0.1.0-SNAPSHOT"
	:description "Factual Kudo System"
	:url "https://github.com/Factual/kyoodos"
	:min-lein-version "2.0.0"
	:dependencies [[org.clojure/clojure "1.8.0"]
								 [compojure "1.5.0"]
								 [ring/ring-defaults "0.1.5"]
                 [org.slf4j/slf4j-log4j12 "1.7.9"]
                 [postgresql "9.3-1102.jdbc41"]
                 [migratus "0.8.13"]]
	:plugins [[lein-ring "0.9.7"]
						[migratus-lein "0.2.6"]]
	:ring {:handler com.factual.kyoodos.handler/app}
	:profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
																	[ring/ring-mock "0.3.0"]]}}
	:migratus {:store :database
						 :migration-dir "migrations"
						 :db {:classname "org.postgresql.Driver"
									:subprotocol "postgresql"
									:subname "//localhost:5432/kyoodos"
									:user "postgres"
									:password "postgres"}})
