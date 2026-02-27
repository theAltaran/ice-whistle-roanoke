'use client'

import { useState, useEffect } from 'react'

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/list-gallery-images')
        const data = await response.json()
        
        if (data.error) {
          setError(data.error)
        } else {
          setImages(data.images || [])
        }
      } catch (err) {
        setError('Failed to load images')
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-primary-200 text-lg">Loading images...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-red-400 text-lg">{error}</div>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary-200 mb-8 text-center">Image Gallery</h1>
        <div className="text-primary-300 text-center">No images found in the gallery.</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary-200 mb-8 text-center">Image Gallery</h1>
      
      {/* Carousel */}
      <div className="relative">
        {/* Main Image */}
        <div className="aspect-video relative bg-primary-900 rounded-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-800/80 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-800/80 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-400'
                    : 'bg-primary-600 hover:bg-primary-500'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mt-2 text-primary-400">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
