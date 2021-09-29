const { v4: uuidv4 } = require("uuid");
const { create: CreateModel } = require("../model/investor");



const addInvestor = async (req, res) => {
	try {

		let investor = req.body;
		investor["id"] = uuidv4();

		await createModel(investor)

		res.status(201).json({
			id: investor.id,
			message: "Successfully added investor"

		});

	} catch (error) {
		res.status(400).json({
			error: error
		});
	}
}

module.exports = { addInvestor };