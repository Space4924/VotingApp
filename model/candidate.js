const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    party:{
        type:String,
        required:true
    },

    //nested object having an array of objects containing
    //the user id and the time of the vote
    votes:[
        {
            user:{
                ///nested object
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true
            },
            votedAt:{
                type:Date,
                dafault:Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }
});

const Candidate = mongoose.model('Candidate',userSchema);
module.exports=Candidate;