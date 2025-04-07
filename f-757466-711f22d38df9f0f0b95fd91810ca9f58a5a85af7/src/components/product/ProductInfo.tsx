
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { Product, ProductSize, ProductColor } from '@/data/productData';
import { toast } from 'sonner';

interface ProductInfoProps {
  product: Product;
  onColorChange: (color: string) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onColorChange }) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleColorSelect = (color: ProductColor) => {
    setSelectedColor(color);
    onColorChange(color.name);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }
    
    toast.success(
      <div className="flex flex-col">
        <p className="font-medium">Added to your cart</p>
        <p className="text-sm text-muted-foreground">
          {product.name} - {selectedColor.name}, Size {selectedSize}, Qty: {quantity}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Product Title and Price */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          {product.discount && (
            <span className="text-muted-foreground line-through">${product.discount.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground">{product.description}</p>

      {/* Color Selection */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="color-select">Color</Label>
          {selectedColor && <span className="text-sm">{selectedColor.name}</span>}
        </div>
        <div id="color-select" className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className={`relative rounded-full w-8 h-8 outline outline-offset-2 outline-2 ${
                selectedColor?.name === color.name
                  ? 'outline-primary'
                  : 'outline-transparent'
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorSelect(color)}
              title={color.name}
            >
              {selectedColor?.name === color.name && (
                <Check className="absolute inset-0 m-auto text-white h-4 w-4" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="size-select">Size</Label>
          <a href="#size-guide" className="text-sm text-muted-foreground underline">
            Size guide
          </a>
        </div>
        <div id="size-select" className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`py-2 border rounded-md transition ${
                selectedSize === size
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-input hover:border-primary/50'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <div className="flex items-center border rounded-md w-32">
          <button 
            className="px-3 py-2 text-lg"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="flex-1 text-center">{quantity}</span>
          <button 
            className="px-3 py-2 text-lg"
            onClick={() => setQuantity(q => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart and Wishlist */}
      <div className="flex gap-4">
        <Button 
          size="lg" 
          className="flex-1"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button size="icon" variant="outline">
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      {/* Product Details */}
      <div className="border-t pt-6 space-y-2">
        <h3 className="font-medium">Product Details</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
