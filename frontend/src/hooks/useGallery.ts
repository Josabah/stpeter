import { useState, useEffect } from 'react';
import { apiFetch, apiPath } from '@/lib/api';

export interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  album: string;
  imageUrl: string; // This will be the Cloudinary URL
  cloudinaryId: string;
  featured: boolean;
  createdAt: string;
}

export const useGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      console.log('Fetching gallery images from:', apiPath('/gallery'));
      const response = await apiFetch('/gallery');
      
      console.log('Gallery API response status:', response.status);
      
      if (!response.ok) {
        throw new Error('Failed to fetch gallery images');
      }
      
      const data = await response.json();
      console.log('Gallery API response data:', data);
      setImages(data.data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching gallery images:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch gallery images');
      // Fallback to empty array on error
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { images, loading, error, refresh: fetchImages };
};
