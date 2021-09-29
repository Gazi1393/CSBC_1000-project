const { getDB } = require('../config/firebase');

const db = getDB();
const investorCollection = "investors";

const create = async (investor) => {

	await db.collection(investorCollection)
		.doc(investor.id)
		.set(Object.assign({}, investor));
};

module.exports = { create };