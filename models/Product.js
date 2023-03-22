const moongoose = require("mongoose");

const ProductSchema = new moongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
			min: 6,
		},
		categories: {
			type: Array,
		},
		size: {
			type: String,
		},
		color: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = moongoose.model("Product", ProductSchema);
