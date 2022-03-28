module.exports = function (mongoose) {
    const schema = mongoose.Schema({
            name: {
                type: String
            },
            color: {
                type: String
            },
            icon: {
                type: String
            },
            projectId: {
                type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'Project'
            }
        },
        { timestamps: false }
    );
    const CommentLabel = mongoose.model("CommentLabel", schema);
    return CommentLabel;
};
