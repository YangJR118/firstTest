const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}
const mydata = mongoose.model('cats',schema );
// const kitty = new mydata({ name: 'testZildjian1' });
// kitty.save().then(() => console.log('testmeow1'));
// const kitty1 = new mydata({name:"Yang1",age:1,health:"good"})
// kitty1.save().then(()=>console.log("new schema writed"))
mydata.find({name:"Yang2"},(err,data)=>{console.log(data[0]._doc.name)})