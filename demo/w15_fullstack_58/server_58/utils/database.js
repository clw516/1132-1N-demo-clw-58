import { Pool } from 'pg';

// const { Pool } = pkg;

let pool;

console.log('process.env.DATABASE', process.env.DATABASE);

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '0000',
    database: 'js_demo_xx',
  });
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: 'aws-0-us-weupabase.com',
    port: '5432',
    user: 'postgres.loxlxwyirrqboq',
    password: 'hEqC3CZLF',
    database: 'postgres',
  });
}

// console.log('connect database', pool.options);

export default pool;
