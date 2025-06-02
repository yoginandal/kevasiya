export function getBaseURL(): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:8000"

  try {
    return new URL(baseUrl).toString()
  } catch (err) {
    console.error("❌ Invalid base URL:", baseUrl)
    return "https://localhost:8000" // fallback
  }
}
