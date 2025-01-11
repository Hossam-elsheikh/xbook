const mongoose = require('mongoose')

const AutoIncrement = require('mongoose-sequence')(mongoose)

const exchangeSchema = mongoose.Schema({

})

exchangeSchema.plugin(AutoIncrement,{
    inc_field: 'exchangeID',
    id: 'exchangeNums',
    start_seq: 1
})

module.exports = mongoose.model('Exchange', exchangeSchema)