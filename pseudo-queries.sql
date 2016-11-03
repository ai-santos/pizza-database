
  Queries for CRUD on the toppings table


// insert topping
INSERT INTO toppings ( name ) VALUES ( 'pepperonni' ) RETURNING name;

// select topping(s)
SELECT * FROM toppings;
SELECT * FROM toppings WHERE name = 'pepperonni';

// update toppings, changes pepperonni to sausage and back agqin
UPDATE toppings SET name='sausage' WHERE name = 'pepperonni' RETURNING name;
UPDATE toppings SET name='pepperonni' WHERE name = 'sausage' RETURNING name;

// delete topping
DELETE FROM toppings WHERE name = 'pepperonni';


 Knex conversion of queries above

// insert new topping
knex('toppings').returning(name).insert({ name: 'pepperonni' })

// select topping(s)
knex('toppings').select()
knex('toppings').select().where({ name: 'pepperonni' })

// update topping
knex('toppings').where({ name: 'pepperonni' }).update({ name: 'sausage' })
knex('toppings').where({ name: 'sausage' }).update({ name: 'pepperonni' })

// delete topping
knex('toppings').where({ name: 'pepperonni' }).del();




  Queries to CRUD sizes

//insert a size
INSERT INTO sizes ( name, price ) VALUES ( 'S', 10 ) RETURNING (SELECT * FROM sizes);

// select all sizes and put in asc order by price
SELECT * FROM sizes ORDER BY price asc;
SELECT * FROM sizes WHERE name = 'S';

// update size
UPDATE sizes SET name='S', price=10 WHERE name = 'XS' RETURNING name;

// delete a size
DELETE FROM sizes WHERE name='S';

// insert
knex('sizes').insert({ name: 'S', price: 10 })

// select
knex('sizes').select()
knex('sizes').select().where({ name: 'S' })

// update
knex('sizes').where({ name: 'S' }).update({ price: 8 })

// delete
knex('sizes').where({ name: 'S' }).del()
