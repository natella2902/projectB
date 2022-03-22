module.exports = function (mongoose) {
    const schema = mongoose.Schema({
            Project: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Project'
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            image: {
                type: String
            },
            Products: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            type: {
                type: String
            },
            isArchive: {
                type: Boolean
            }
        },
        { timestamps: false }
    );
    const Product = mongoose.model("Product", schema);
    return Product;
};
