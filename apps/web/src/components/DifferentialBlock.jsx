import React from 'react';

function DifferentialBlock({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-accent rounded-xl hover:bg-accent/80 transition-colors duration-200">
      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default DifferentialBlock;