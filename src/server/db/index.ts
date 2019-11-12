import * as mysql from 'mysql';
import config from '../config';

const connection = mysql.createConnection(config.mysql);

connection.connect(() => console.log('Database successfully connected!'));

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		connection.query(query, values, (err, results) => {
			if (err) reject(err);
			resolve(results);
		});
	});
};

import chirps from './queries/chirps';
import users from './queries/users';

export default {
	chirps,
	users
}