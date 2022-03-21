module.exports = function (mongoose) {
    const schema = mongoose.Schema({
            name: {
                type: String
            },
            description: {
                type: String
            },
            tariffId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Tariffs'
            },
            userIds: [{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            }],
            owner: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            statusProject: {
                type: String
            }
        },
        { timestamps: false }
    );
    const Project = mongoose.model("Project", schema);
    return Project;
};
