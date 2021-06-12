const router = require('express').Router();
const { response } = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
	Tag.findAll().then(response => {
		res.json(response);
	})
});

router.get('/:id', (req, res) => {
	Tag.findOne({where: {id: req.params.id}}).then(response => {
		res.json(response);
	})
});

router.post('/', (req, res) => {
	Tag.create({tag_name: req.body.tag_name}).then(response => {
		res.json(response);
	})
});

router.put('/:id', (req, res) => {
	Tag.update(
		{
			tag_name: req.body.tag_name
		},
		{
			where: {id: req.params.id}
		}).then(response => {
		res.json(response);
	})
});

router.delete('/:id', (req, res) => {
	Tag.destroy({where: {id: req.params.id}}).then(response => {
		res.json(response);
	})
});

module.exports = router;
