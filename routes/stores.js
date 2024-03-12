const express = require('express');
const router = express.Router();

/**
 * stores
 */

let stores = [];

router.get('/', (req, res) => {
  res.status(200).send(stores);
});

router.post('/', (req, res) => {
  const store = req.body;
  stores.push(store);
  res.status(201).send(store);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const store = req.body;
  const index = stores.findIndex(s => s.id === parseInt(id));
  if (index >= 0) {
    stores[index] = store;
    res.status(200).send(store);
  } else {
    res.status(404).send({ message: 'Store not found' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  stores = stores.filter(s => s.id !== parseInt(id));
  res.status(204).send();
});

module.exports = router;
