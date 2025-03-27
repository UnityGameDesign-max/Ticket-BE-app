
npx knex migrate:make create_user --migrations-directory=./src/config/migrations


npx knex migrate:latest --knexfile=./src/config/knexfile.js



npx knex seed:make tickets --knexfile=./src/config/knexfile.js



npx knex seed:run --knexfile=./src/config/knexfile.js


