import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const connectionConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || 'localhost',
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
    };

async function main() {
  const client = new pg.Client(connectionConfig);
  try {
    await client.connect();
    console.log('Connected to database successfully. Running migrations...');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(50) NOT NULL,
        company VARCHAR(255),
        flooring_type VARCHAR(100) NOT NULL,
        area_sqm NUMERIC NOT NULL,
        project_sector VARCHAR(100) NOT NULL,
        finish_style VARCHAR(100) NOT NULL,
        metal_inlays VARCHAR(100),
        underfloor_heating BOOLEAN DEFAULT FALSE,
        estimated_price NUMERIC NOT NULL,
        lead_type VARCHAR(50) NOT NULL, -- 'general_quote' or 'terrazzo_proposal'
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await client.query(createTableQuery);
    console.log('Database schema checked/created successfully. "leads" table is active.');
  } catch (error) {
    console.error('Database schema setup failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
