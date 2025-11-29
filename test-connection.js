// test-connection.js

// 🚨 ADD THIS LINE AT THE TOP 🚨
// This loads the .env.local file variables into process.env
import 'dotenv/config'; 

import { db } from './lib/db.js'; // Check the path to db.js is correct!
import { sql } from 'drizzle-orm';

// ... rest of your runTestQuery function ...

async function runTestQuery() {
    console.log('Attempting to connect to NeonDB...');

    // --- Add this line to confirm it loaded ---
    console.log('DB URL check:', process.env.DATABASE_URL ? 'Loaded' : 'Not Found!');
    // ------------------------------------------

    try {
        const result = await db.execute(sql`SELECT current_database()`);
        console.log('✅ Connection successful!');
        console.log('Connected to Database:', result[0].current_database);
    } catch (error) {
        console.error('❌ Connection Failed!');
        console.error("Error details:", error.message);
    }
}

console.log(process.env.DATABASE_URL)
runTestQuery();