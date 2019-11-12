import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:chirpid?', async (req, res) => {
	const chirpid = req.params.chirpid;
	if (chirpid) {
		try {
            const [chirp] = await db.chirps.one(chirpid);
            res.json(chirp);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	} else {
		try {
			const chirps = await db.chirps.all();
			res.json(chirps);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	}
});

export default router;
