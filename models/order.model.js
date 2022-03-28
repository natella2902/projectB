module.exports = function (mongoose) {
    const schema = mongoose.Schema({
        status: {
            type: String
        },
        userId: {
            type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
        },
        essenceId: {
            type: Schema.Types.ObjectId,
                required: true,
                ref: 'Essence'
        },
        productId: {
            type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
        },
        price: {
            type: String
        }
    },
        { timestamps: false }
    );
    const Order = mongoose.model("Order", schema);
    return Order;
};
