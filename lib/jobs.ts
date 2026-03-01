export interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  level: string
  description: string
  requirements: string[]
  posted: string
}

// Your Google Sheet CSV export URL
// Sheet must be shared as "Anyone with the link can view"
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1OBEbgbAoCwzWubm_NF5bDQalWcNBq6vZ8PSxclzHogw/export?format=csv&gid=0"

function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.trim().split("\n")
  if (lines.length < 2) return []

  // Parse header row
  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""))

  return lines.slice(1).map((line) => {
    // Handle commas inside quoted fields
    const values: string[] = []
    let current = ""
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === "," && !inQuotes) {
        values.push(current.trim())
        current = ""
      } else {
        current += char
      }
    }
    values.push(current.trim())

    const row: Record<string, string> = {}
    headers.forEach((header, idx) => {
      row[header] = (values[idx] ?? "").replace(/^"|"$/g, "")
    })
    return row
  })
}

export async function getJobs(): Promise<Job[]> {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL, {
      // Revalidate data every 60 seconds so changes in the sheet reflect quickly
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      console.error("Failed to fetch jobs from Google Sheets:", response.statusText)
      return []
    }

    const csvText = await response.text()
    const rows = parseCSV(csvText)

    return rows
      .filter((row) => row.title) // skip empty rows
      .map((row, index) => ({
        id: Number(row.id) || index + 1,
        title: row.title || "",
        department: row.department || "",
        location: row.location || "",
        type: row.type || "Full-time",
        level: row.level || "",
        description: row.description || "",
        requirements: row.requirements
          ? row.requirements.split(",").map((r) => r.trim()).filter(Boolean)
          : [],
        posted: row.posted || "Recently",
      }))
  } catch (error) {
    console.error("Error fetching jobs from Google Sheets:", error)
    return []
  }
}
