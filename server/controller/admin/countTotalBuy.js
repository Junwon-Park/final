const { Buy } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalBuy(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    const thisMonth= (date.getMonth()+1).toString();
    const thisDate= date.getDate().toString();
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Buy b \n' +
            'where buy_status ="1" or buy_status ="0" or buy_status ="2" and \n'+
            'DAY(buy_edate)="'+thisDate+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalBuy };