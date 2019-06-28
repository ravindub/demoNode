var mongoose        = require('../DBSchema/SchemaMapper');
var CommentSchema   = mongoose.model('Comment');

var CommentController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var comment = new CommentSchema({
                comment: data.comment,
                date: data.date,
                commentBy: data.userId
            });
            comment.save().then(() => {
                resolve({status: 200, message: "Added new comment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            CommentSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "update comment"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CommentSchema.find().populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            CommentSchema.find({_id: id}).populate('User').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CommentSchema.remove({_id: id}).then(() => {
                resolve({status: 200, message: "remove comment"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new CommentController();