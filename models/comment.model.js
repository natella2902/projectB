module.exports = function (mongoose) {
    const schema = mongoose.Schema({
            userId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            clientId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Client'
            },
            files: [{
                type: String
            }],
            assignedUsers: [{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            }],
            Labels: [{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'CommentLabel'
            }],
            childrenComments: [{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Comment'
            }],
            isDeleted: {
                type: Boolean
            }
        },
        { timestamps: false }
    );
    const Comment = mongoose.model("Comment", schema);
    return Comment;
};
