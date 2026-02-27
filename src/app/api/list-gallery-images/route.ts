import { NextResponse } from 'next/server'

export async function GET() {
  const hostname = process.env.BUNNY_STORAGE_HOSTNAME
  const username = process.env.BUNNY_STORAGE_USERNAME
  const password = process.env.BUNNY_STORAGE_PASSWORD

  if (!hostname || !username || !password) {
    return NextResponse.json(
      { error: 'Bunny CDN environment variables not configured' },
      { status: 500 }
    )
  }

  try {
    // Create Basic Auth header
    const auth = Buffer.from(`${username}:${password}`).toString('base64')

    // List files from Bunny Storage
    const response = await fetch(
      `https://${hostname}/storage/${username}/image_gallery/`,
      {
        headers: {
          'Authorization': `Basic ${auth}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Bunny API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Filter for image files and construct URLs
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const images = data
      .filter((item: { IsDirectory: boolean; ObjectName: string }) => !item.IsDirectory)
      .filter((item: { ObjectName: string }) => 
        imageExtensions.some(ext => item.ObjectName.toLowerCase().endsWith(ext))
      )
      .map((item: { ObjectName: string }) => {
        // Construct the Bunny CDN URL
        // Format: https://{hostname}/{username}/image_gallery/{filename}
        return `https://${hostname}/${username}/image_gallery/${item.ObjectName}`
      })

    return NextResponse.json({ images })
  } catch (error) {
    console.error('Error fetching images from Bunny CDN:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images from CDN' },
      { status: 500 }
    )
  }
}
