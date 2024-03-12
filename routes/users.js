const express = require('express');
const router = express.Router();
const pool = require('./db');

/**
 * users
 */

// 모든 유저 조회
router.get('/', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
});

// 유저 추가
router.post('/', (req, res) => {
  const { name, email } = req.body;
  pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${results.insertId}`);
  });
});

// 해당 ID의 유저 조회
router.get('/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
});

// 유저 수정
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User updated with ID: ${id}`);
  });
});

// 유저 삭제
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
});

module.exports = router;
