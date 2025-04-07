
import React, { useState } from 'react';
import { ProductReview } from '@/data/productData';
import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ReviewsProps {
  reviews: ProductReview[];
  rating: number;
  reviewCount: number;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, rating, reviewCount }) => {
  const [helpfulIds, setHelpfulIds] = useState<string[]>([]);

  const markHelpful = (reviewId: string) => {
    if (!helpfulIds.includes(reviewId)) {
      setHelpfulIds([...helpfulIds, reviewId]);
    }
  };

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]; // 5, 4, 3, 2, 1 stars
  reviews.forEach(review => {
    ratingCounts[5 - review.rating] += 1;
  });
  
  const ratingDistribution = ratingCounts.map(count => {
    return reviewCount > 0 ? (count / reviewCount) * 100 : 0;
  });

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <Tabs defaultValue="reviews">
        <TabsList className="mb-6">
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="ratings">Ratings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reviews" className="space-y-8">
          {reviews.length === 0 ? (
            <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.avatar} 
                      alt={review.user} 
                      className="rounded-full w-10 h-10 object-cover" 
                    />
                    <div>
                      <p className="font-medium">{review.user}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h4 className="font-medium mt-3">{review.title}</h4>
                <p className="text-muted-foreground mt-2">{review.content}</p>
                
                <div className="mt-4 flex items-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => markHelpful(review.id)}
                    disabled={helpfulIds.includes(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({helpfulIds.includes(review.id) ? review.helpful + 1 : review.helpful})
                  </Button>
                </div>
              </div>
            ))
          )}
          
          <Button variant="outline" className="w-full">Load More Reviews</Button>
        </TabsContent>
        
        <TabsContent value="ratings" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold">{rating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">out of 5</div>
            </div>
            
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <div className="text-sm font-medium w-2">{star}</div>
                  <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${ratingDistribution[5 - star]}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground w-12">
                    {ratingCounts[5 - star]} {ratingCounts[5 - star] === 1 ? 'review' : 'reviews'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button className="w-full">Write a Review</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reviews;
