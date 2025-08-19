'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  projectId: string;
}

export function ProjectCarousel({ projectId }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generic placeholder images for now
  const images = [
    `/placeholder.svg?height=400&width=600&query=project screenshot 1 for ${projectId}`,
    `/placeholder.svg?height=400&width=600&query=project screenshot 2 for ${projectId}`,
    `/placeholder.svg?height=400&width=600&query=project screenshot 3 for ${projectId}`,
    `/placeholder.svg?height=400&width=600&query=project screenshot 4 for ${projectId}`,
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      <div className='relative aspect-[3/2] bg-muted rounded-sm overflow-hidden'>
        <img
          src={images[currentIndex] || '/placeholder.svg'}
          alt={`Project screenshot ${currentIndex + 1}`}
          className='w-full h-full object-cover'
        />

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className='absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-sm transition-colors'
          aria-label='Previous image'
        >
          <ChevronLeft className='w-4 h-4' />
        </button>

        <button
          onClick={goToNext}
          className='absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-sm transition-colors'
          aria-label='Next image'
        >
          <ChevronRight className='w-4 h-4' />
        </button>
      </div>

      {/* Dots indicator */}
      <div className='flex justify-center mt-4 space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-foreground'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
