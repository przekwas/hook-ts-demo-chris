import {Query} from '../index';

const all = () => Query<[]>('SELECT * FROM users');
const one = (id: string) => Query<{}[]>('SELECT * FROM users WHERE id = ?', [id]);

export default {
    all,
    one
}