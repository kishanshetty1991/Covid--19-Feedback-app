const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require ('./Recipient');

const surveySchema = new Schema ({
 title: String ,
 subject: String ,
 body: String ,
 recipients: [RecipientSchema],
 yes: { type: Number, default: 0 } ,
 no:  {type:Number, default: 0 },
 _user: { type: Schema.Types.ObjectId, ref: 'User'},
 dateSent: Date,
 lastResponded: Date
});

//to load to mongoose library here 'surveys' 
//is the name of the collection or model class
// while surveySchema is the schema.
mongoose.model('surveys',surveySchema);