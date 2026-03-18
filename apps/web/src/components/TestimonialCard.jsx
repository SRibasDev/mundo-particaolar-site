import React from 'react';
import { Star } from 'lucide-react';

function TestimonialCard({ dogPhoto, testimonialText, ownerName, dogName, rating }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 break-inside-avoid mb-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={dogPhoto}
          alt={`Foto de ${dogName}`}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{dogName}</p>
          <p className="text-sm text-muted-foreground">{ownerName}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? 'fill-secondary text-secondary' : 'text-muted'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-sm text-foreground leading-relaxed">
        "{testimonialText}"
      </blockquote>
    </div>
  );
}

export default TestimonialCard;