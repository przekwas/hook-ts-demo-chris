import { Query } from '../index';

const all = () => Query<[]>('SELECT * FROM chirps');
const one = (id: string) => Query<{}[]>('SELECT * FROM chirps WHERE id = ?', [id]);

export default {
    all,
    one
}