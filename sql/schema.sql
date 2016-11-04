CREATE TABLE "customer" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR(60) ,
"address" VARCHAR(60) ,
"phone" VARCHAR(14) ,
PRIMARY KEY ("id")
);

CREATE TABLE "credit_card" (
"id"  SERIAL ,
"name" VARCHAR(60) ,
"number" VARCHAR(20) ,
"expiration" DATE ,
PRIMARY KEY ("id"),
UNIQUE ("name", "number")
);

CREATE TABLE "customer_credit_card" (
"customer_id"  INTEGER ,
"credit_card_id" INTEGER
);

CREATE TABLE "customer_order" (
"id"  SERIAL ,
"customer_id" INTEGER ,
"credit_card_id" INTEGER ,
"total_price" MONEY ,
PRIMARY KEY ("id")
);

CREATE TABLE "customer_order_preference" (
"customer_id"  INTEGER ,
"customer_order_id" INTEGER
);

CREATE TABLE "drinks" (
"name"  VARCHAR(20) ,
"price" MONEY ,
PRIMARY KEY ("name")
);

CREATE TABLE "pizzas" (
"id"  SERIAL ,
"size" VARCHAR(2) ,
"topping_1" VARCHAR(20) ,
"topping_2" VARCHAR(20) ,
PRIMARY KEY ("id")
);

CREATE TABLE "customer_pizzas" (
"customer_order_id"  INTEGER ,
"pizza_id" INTEGER
);

CREATE TABLE "toppings" (
"name"  VARCHAR(20) ,
PRIMARY KEY ("name")
);

CREATE TABLE "customer_drinks" (
"customer_order_id"  SERIAL ,
"drink" VARCHAR(20)
);

CREATE TABLE "sizes" (
"name"  VARCHAR(2) ,
"price" MONEY ,
PRIMARY KEY ("name")
);

ALTER TABLE "customer_credit_card" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");
ALTER TABLE "customer_credit_card" ADD FOREIGN KEY ("credit_card_id") REFERENCES "credit_card" ("id");
ALTER TABLE "customer_order" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");
ALTER TABLE "customer_order" ADD FOREIGN KEY ("credit_card_id") REFERENCES "credit_card" ("id");
ALTER TABLE "customer_order_preference" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");
ALTER TABLE "customer_order_preference" ADD FOREIGN KEY ("customer_order_id") REFERENCES "customer_order" ("id");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("size") REFERENCES "sizes" ("name");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("topping_1") REFERENCES "toppings" ("name");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("topping_2") REFERENCES "toppings" ("name");
ALTER TABLE "customer_pizzas" ADD FOREIGN KEY ("customer_order_id") REFERENCES "customer_order" ("id");
ALTER TABLE "customer_pizzas" ADD FOREIGN KEY ("pizza_id") REFERENCES "pizzas" ("id");
ALTER TABLE "customer_drinks" ADD FOREIGN KEY ("customer_order_id") REFERENCES "customer_order" ("id");
ALTER TABLE "customer_drinks" ADD FOREIGN KEY ("drink") REFERENCES "drinks" ("name");
