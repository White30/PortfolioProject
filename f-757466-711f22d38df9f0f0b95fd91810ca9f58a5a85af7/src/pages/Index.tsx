
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import Reviews from '@/components/product/Reviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import { featuredProduct, relatedProducts } from '@/data/productData';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Electronics', href: '/shop/electronics' },
  ];

  return (
    <>
      <Navbar />
      <Toaster />
      
      <main className="container mx-auto px-4 pb-20">
        <Breadcrumb 
          items={breadcrumbItems} 
          currentPage={featuredProduct.name} 
        />
        
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <ImageGallery 
            images={featuredProduct.images} 
            selectedColor={selectedColor}
          />
          <ProductInfo 
            product={featuredProduct} 
            onColorChange={setSelectedColor}
          />
        </div>
        
        <Separator className="my-10" />
        
        <Reviews 
          reviews={featuredProduct.reviews}
          rating={featuredProduct.rating}
          reviewCount={featuredProduct.reviewCount}
        />
        
        <Separator className="my-6" />
        
        <RelatedProducts products={relatedProducts} />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
