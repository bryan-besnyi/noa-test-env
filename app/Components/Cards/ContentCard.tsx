import React, { ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  link?: string;
  paragraph?: string;
  className?: string;
  children?: ReactNode;
}

export default function ContentCard({ 
  title, 
  link, 
  paragraph, 
  className = "", 
  children 
}: ContentCardProps) {
  const TitleComponent = link ? 'a' : 'h5';
  const titleProps = link ? { 
    href: link, 
    target: '_blank', 
    rel: 'noopener noreferrer',
    style: { textDecoration: 'none', color: 'var(--smcccd-primary)' }
  } : {};

  return (
    <div className={`card ${className}`} style={{
      backgroundColor: 'var(--card-bg)',
      borderColor: 'var(--card-border)',
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div className="card-body" style={{ color: 'var(--text-primary)' }}>
        <TitleComponent 
          className="card-title h5 mb-3" 
          style={{ 
            color: link ? 'var(--smcccd-primary)' : 'var(--text-primary)',
            fontWeight: '600',
            marginBottom: '1rem'
          }}
          {...titleProps}
        >
          {title}
        </TitleComponent>
        
        {paragraph && (
          <p className="card-text mb-3" style={{ 
            color: 'var(--text-secondary)',
            lineHeight: 1.5 
          }}>
            {paragraph}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
} 