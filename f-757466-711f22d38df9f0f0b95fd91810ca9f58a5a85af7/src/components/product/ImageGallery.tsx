
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Image {
  src: string;
  alt: string;
  color?: string;
}

interface ImageGalleryProps {
  images: Image[];
  selectedColor?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, selectedColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayImages, setDisplayImages] = useState<Image[]>(images);

  useEffect(() => {
    if (selectedColor) {
      const colorImages = images.filter(img => img.color === selectedColor);
      if (colorImages.length > 0) {
        setDisplayImages(colorImages);
        setCurrentIndex(0);
      } else {
        setDisplayImages(images);
      }
    } else {
      setDisplayImages(images);
    }
  }, [selectedColor, images]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (displayImages.length === 0) return null;

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden bg-muted rounded-lg mb-4">
        <img
          src={displayImages[currentIndex].src}
          alt={displayImages[currentIndex].alt}
          className="object-cover w-full h-full transition-all duration-300"
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {displayImages.map((image, index) => (
          <button
            key={index}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
              index === currentIndex ? 'border-primary' : 'border-transparent hover:border-muted'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
