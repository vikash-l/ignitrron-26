import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name?: string;
  className?: string;
  size?: number;
  fallback?: React.ReactNode;
}

export const IconRenderer: React.FC<IconRendererProps> = ({
  name,
  className = 'w-5 h-5',
  size = 20,
  fallback = null,
}) => {
  if (!name) return <>{fallback}</>;

  // Dynamically resolve icon from lucide-react
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[name];

  if (!IconComponent) {
    // Default fallback icon
    const DefaultIcon = Icons.Sparkles;
    return <DefaultIcon className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
