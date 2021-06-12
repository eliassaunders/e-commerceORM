const router = require('express').Router();
const { response } = require('express');
const { beforeFindAfterExpandIncludeAll } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
	Category.findAll({})
		.then(response => {
			res.json(response);
		})
});

router.get('/:id', (req, res) => {
	Category.findOne({
		where: id = req.param.id
	}).then(response => {
		res.json(response);
	})
});

router.post('/', (req, res) => {
	Category.create({
		category_name: req.body.category_name
	}).then(response => {
		res.json(response);
	})
});

router.put('/:id', (req, res) => {
	Category.update({
		category_name: req.body.category_name
	},
	{
		where: {
			id: req.params.id
		}
	}).then(response => {
		res.json(response);
	})
});

router.delete('/:id', (req, res) => {
Category.destroy({where: {id: req.params.id}})
.then(response => {
	res.json(response);
})
});

module.exports = router;
