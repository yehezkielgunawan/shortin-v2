# Shortin - URL Shortener

A modern URL shortener built with Next.js 14 using the App Router.

## Features

- ✅ **Shorten any URL**: Convert long URLs into easy-to-share short links
- ✅ **Custom aliases**: Create personalized short URLs with custom aliases
- ✅ **Fast redirects**: Optimized for quick redirection to destination pages
- ✅ **SEO Friendly**: This uses Next JS built-in SEO setup
- ✅ **Modern UI**: Clean interface built with Tailwind CSS and Daisy UI
- ✅ **Personalized linter and formatter**: Using Biome as the main linter and formatter
- ✅ **Base Typography Setup**: It uses Tailwind CSS official Typography lib

## How to Use

### Shorten a URL

1. Visit the homepage
2. Enter the long URL you want to shorten in the input field
3. (Optional) Enter a custom alias if you want a specific shortcode
4. Click "Shorten" button
5. Copy your new short URL to share

### Access a Shortened URL

Simply visit `shortin.yehezgun.com/[shortcode]` and you'll be automatically redirected to the original URL if you've made the shorten url before here.

## Technology Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Daisy UI
- **Linting/Formatting**: Biome
- **SEO**: Next.js built-in SEO optimization
- **Typography**: Tailwind CSS Typography plugin

## Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/yehezkielgunawan/shortin-v2.git
   cd shortin-v2
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your environment variables
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Routes

The project includes API routes to handle URL shortening and redirection:

- `POST /api/shorten`: Creates a new shortened URL
- `GET /api/[shortcode]`: Retrieves the original URL for redirection

## Deployment

Follow standard Next.js deployment procedures using your preferred hosting service like Vercel, Netlify, or a custom server.

## License

MIT

## Acknowledgments

Built with ❤️ by [Yehezkiel Gunawan](https://github.com/yehezkielgunawan)
