# Split Bill

This is a simple example of a split bill tracker built with Next.js and Supabase. It allows you to add bills and see them listed on the page.

## Setup

1. Copy `.env.example` to `.env` and fill in your Supabase project details.
2. Install dependencies (requires internet access):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Open <http://localhost:3000> in your browser to see the app.

## Supabase Table

Create a table called `bills` with the following columns:
- `id` (bigint, primary key)
- `name` (text)
- `total` (numeric)
- `participants` (text[])
