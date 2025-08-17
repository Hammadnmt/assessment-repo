// utils/unsplash.ts
export async function fetchUnsplashImage(query: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${
        process.env.SPLSH_ACCESS_KEY
      }`
    );

    if (!res.ok) {
      console.error("Unsplash API error:", await res.text());
      return null;
    }

    const data = await res.json();
    return data.results?.[0]?.urls?.regular || null;
  } catch (error) {
    console.error("Error fetching from Unsplash:", error);
    return null;
  }
}
