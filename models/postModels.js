const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: { type: String, required: true },
    user: String,
    postedAt: Date,
    description: String,
    image: String,
    likes: { type: Number, default: 0 },
    share: { type: Number, deafult: 0 },


});
module.export = model('PostCollection', mySchema);