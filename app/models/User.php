<?php 
require_once 'Database.php';

	class User extends Database {

		public static function all() {
			$query = 'SELECT * FROM users';
			return parent::findAll($query);
		}

		public static function find($id = array()) {
			$query = 'SELECT * FROM users WHERE id = :id';
			return parent::findOne($query, $id);
		}

		public static function save($params = array()) {
			$query = 'INSERT INTO users(username, email, password) VALUES(:username, :email, :password)';
			parent::insert($query, $params);
		}

		public static function delete($ids = array()) {
			$query = 'DELETE FROM users WHERE id = :id';
			parent::destroy($query, $ids);
		}

		public static function update($params = array()) {
			$query = 'UPDATE users SET username = :username, email = :email, password = :password WHERE id = :id';
			parent::edit($query, $params);
		}

	}

 ?>