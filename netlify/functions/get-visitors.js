const { neon } = require('@neondatabase/serverless');

exports.handler = async () => {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const rows = await sql`SELECT * FROM visitors`;

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rows)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
