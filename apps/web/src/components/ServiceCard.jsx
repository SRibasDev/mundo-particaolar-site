import React from 'react';
import { Check } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, benefits }) {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      
      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 mt-auto">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;