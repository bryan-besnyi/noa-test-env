import React from 'react';

interface ExternalLink {
  text: string;
  url: string;
}

interface ExternalLinksSectionProps {
  links: ExternalLink[];
  className?: string;
}

export default function ExternalLinksSection({ links, className = "" }: ExternalLinksSectionProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className={`card ${className}`} style={{
      backgroundColor: 'var(--card-bg)',
      borderColor: 'var(--card-border)',
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div className="card-body" style={{ color: 'var(--text-primary)' }}>
        <h5 className="card-title mb-3" style={{ 
          color: 'var(--text-primary)',
          fontWeight: '600' 
        }}>
          External Quick Links
        </h5>
        
        <div className="row">
          {links.map((link, index) => (
            <div key={index} className="col-md-6 mb-2">
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-block p-2 rounded"
                style={{
                  color: 'var(--smcccd-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease-in-out',
                  border: '1px solid transparent'
                }}
              >
                <i className="fa fa-external-link-alt me-2" aria-hidden="true"></i>
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 