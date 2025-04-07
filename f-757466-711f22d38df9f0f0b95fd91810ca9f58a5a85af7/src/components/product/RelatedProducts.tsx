
import React from 'react';
import { Product } from '@/data/productData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  const handleQuickAdd = (product: Product) => {
    toast.success(
      <div className="flex flex-col">
        <p className="font-medium">Added to your cart</p>
        <p className="text-sm text-muted-foreground">
          {product.name}
        </p>
      </div>
    );
  };

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative overflow-hidden group">
              <img 
                src={product.images[0].src} 
                alt={product.images[0].alt} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  Quick View
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-medium truncate">{product.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="font-semibold">${product.price.toFixed(2)}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleQuickAdd(product)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
