# Gouse Neon + Netlify Assignment

## Files included
- `index.html` - frontend page that calls the Netlify function
- `styles.css` - styling for the page
- `netlify/functions/get-visitors.js` - Netlify serverless function
- `downloads/get-visitors.js` - downloadable copy for assignment submission
- `package.json` - installs the Neon serverless driver

## What you still need to do
1. Create a free Neon project.
2. In the Neon SQL editor, run:

```sql
CREATE TABLE visitors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO visitors (name) VALUES
('Gouse'),
('Professor Bobby'),
('Cloud Development Student');
```

3. In Netlify, add this environment variable:
   - Key: `DATABASE_URL`
   - Value: your Neon connection string

4. Push these files to GitHub.
5. Trigger a fresh Netlify deploy.
6. Open your site and confirm the visitor list loads.

## Important
Do not commit your real Neon connection string to GitHub.
