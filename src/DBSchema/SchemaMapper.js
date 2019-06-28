var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const CommentSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    commentBy:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

mongoose.model('User', UserSchema);
mongoose.model('Comment', CommentSchema);

mongoose.connect('mongodb://localhost:27017/comments', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;