import { Pool } from 'pg';

let pool: Pool;

const connectionConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || 'localhost',
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
    };

// Prevent multiple pools from being created during next dev hot-reload
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    ...connectionConfig,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false }
  });
} else {
  if (!(global as any).pool) {
    (global as any).pool = new Pool(connectionConfig);
  }
  pool = (global as any).pool;
}

export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query', { text, duration, rows: res.rowCount });
  return res;
};

export default pool;
