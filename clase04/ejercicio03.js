
 const Sequelize = require('sequelize');

 const sequelize = new Sequelize('empresa', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  port:3306,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


class Items extends Sequelize.Model {}
Items.init({
  itemId: Sequelize.INTEGER,
  nombre:Sequelize.STRING,
  cantidad:Sequelize.INTEGER
}, { sequelize, modelName: 'ejer1' });

sequelize.sync()
    .then(() => {
        for (let index = 0 ; index >= 5; index++) {
          Items.create({
            itemId: index,
            nombre: 'freezer'+index,
            cantidad: '125'
          })
          .then(jane => {
            console.log(jane.toJSON());
          })
        }
    })
    .then(() =>Items.update({
        cantidad :  '200' },{
        where: {
            itemId: '1'
        }
    }))
    .then(() =>{
        console.log("<--Inserción y Actualizacion de varios -->terminada")
    })
