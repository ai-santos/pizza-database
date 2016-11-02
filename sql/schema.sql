CREATE TABLE "customers" (
"id"  SERIAL NOT NULL ,
"name" VARCHAR(80) NOT NULL DEFAULT 'NULL' ,
"address" VARCHAR(80) ,
"phone" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "customer_orders" (
"id"  SERIAL NOT NULL ,
"customer_id" INTEGER ,
"credit_card_id" INTEGER ,
"total_price" MONEY ,
PRIMARY KEY ("id")
);

CREATE TABLE "credit_cards" (
"id"  SERIAL ,
"name" VARCHAR(80) ,
"card_number" INTEGER NOT NULL ,
"expiration" VARCHAR ,
PRIMARY KEY ("id"),
UNIQUE ("card_number", "name")
);

CREATE TABLE "customer_credit_cards" (
"customer_id"  INTEGER ,
"credit_card_id" INTEGER
);

CREATE TABLE "pizzas" (
"id"  SERIAL NOT NULL,
"size" VARCHAR(2) ,
"topping_1" VARCHAR(10) DEFAULT 'None',
"topping_2" VARCHAR(10) DEFAULT 'None',
PRIMARY KEY ("id")
);

CREATE TABLE "toppings" (
"id"  SERIAL NOT NULL,
"name" VARCHAR(10) ,
PRIMARY KEY ("id"),
UNIQUE ("name")
);

CREATE TABLE "sizes" (
"name"  VARCHAR(2),
"price" MONEY ,
PRIMARY KEY ("name")
);

CREATE TABLE "beverages" (
"id"  SERIAL ,
"name" VARCHAR(20) ,
"price" MONEY ,
PRIMARY KEY ("id"),
UNIQUE ("name")
);

CREATE TABLE "customer_pizza_preference" (
"customer_id"  INTEGER ,
"pizza_id" INTEGER
);

CREATE TABLE "sold_pizzas" (
"customer_order_id"  INTEGER ,
"pizza_id" INTEGER
);

CREATE TABLE "sold_beverages" (
"customer_order_id"  INTEGER NOT NULL,
"beverage_id" INTEGER NOT NULL
);

CREATE TABLE "transactions" (
"id"  SERIAL NOT NULL,
"customer_order_id" INTEGER ,
"date" TIMESTAMP WITH TIME ZONE ,
PRIMARY KEY ("id")
);

ALTER TABLE "customer_orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");
ALTER TABLE "customer_orders" ADD FOREIGN KEY ("credit_card_id") REFERENCES "credit_cards" ("id");
ALTER TABLE "customer_credit_cards" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");
ALTER TABLE "customer_credit_cards" ADD FOREIGN KEY ("credit_card_id") REFERENCES "credit_cards" ("id");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("size") REFERENCES "sizes" ("name");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("topping_1") REFERENCES "toppings" ("name");
ALTER TABLE "pizzas" ADD FOREIGN KEY ("topping_2") REFERENCES "toppings" ("name");
ALTER TABLE "customer_pizza_preference" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");
ALTER TABLE "customer_pizza_preference" ADD FOREIGN KEY ("pizza_id") REFERENCES "pizzas" ("id");
ALTER TABLE "sold_pizzas" ADD FOREIGN KEY ("customer_order_id") REFERENCES "customer_orders" ("id");
ALTER TABLE "sold_pizzas" ADD FOREIGN KEY ("pizza_id") REFERENCES "pizzas" ("id");
ALTER TABLE "sold_beverages" ADD FOREIGN KEY ("customer_order_id") REFERENCES "customer_orders" ("id");
ALTER TABLE "sold_beverages" ADD FOREIGN KEY ("beverage_id") REFERENCES "beverages" ("id");
ALTER TABLE "transactions" ADD FOREIGN KEY ("id") REFERENCES "customer_orders" ("id");
