module.exports = function (mongoose) {
    const schema = mongoose.Schema({
            productId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            price: {
                type: String
            },
            currency: {
                type: String
            }
        },
        { timestamps: false }
    );
    const Essence = mongoose.model("Essence", schema);
    return Essence;
};
