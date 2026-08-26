export default async function handler(req, res) {
  // Set up Vercel Edge Caching
  // This tells Vercel's global CDN to cache the result for 3600 seconds (1 hour).
  // If 10,000 users visit, Vercel only hits your metals.dev API exactly 1 time per hour.
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  const apiKey = process.env.METALS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      status: 'error', 
      error_message: 'API Key not configured in Vercel Environment Variables' 
    });
  }

  try {
    const url = `https://api.metals.dev/v1/metal/authority?api_key=${apiKey}&authority=mcx&currency=INR&unit=kg`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Vercel Serverless Error:", error);
    res.status(500).json({ 
      status: 'error', 
      error_message: 'Failed to fetch from metals.dev' 
    });
  }
}
