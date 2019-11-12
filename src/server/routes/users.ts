import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:userid?', async (req, res) => {
	const userid = req.params.userid;
	if (userid) {
		try {
            const [user] = await db.users.one(userid);
            res.json(user);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	} else {
		try {
			const users = await db.users.all();
			res.json(users);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	}
});

export default router;
