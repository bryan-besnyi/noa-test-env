import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUniversity, faTools, faExternalLinkAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// Map keywords to icons for clarity
const linkIconMap: Record<string, IconDefinition> = {
  bookstore: faBook,
  library: faBook,
  construction: faTools,
  updates: faTools,
  homepage: faUniversity,
  college: faUniversity,
};

// No descriptions needed now

type linkInfo = {
    title: string,
    link: { text: string; url: string }[],
    img?: string,
    className?: string,
}

export default function CollegeLinks(props: linkInfo) {
    const { title, link, img, className = "" } = props;
    const mainLink = link[0];
    const secondaryLinks = link.slice(1);

    // Helper to pick icon
    function getIcon(text: string) {
      const lower = text.toLowerCase();
      for (const key in linkIconMap) {
        if (lower.includes(key)) {
          return linkIconMap[key];
        }
      }
      return faExternalLinkAlt as IconDefinition;
    }

    return (
      <div
        className={`college-links-card ${className}`}
        style={{
          background: 'var(--card-bg, #fff)',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          padding: '1.25rem',
          minWidth: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className="d-flex align-items-center mb-2" style={{ gap: '0.75rem' }}>
          {img && (
            <Image 
              src={img} 
              alt={title}
              width={48}
              height={48}
              style={{ borderRadius: 8, background: '#fff' }}
            />
          )}
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{title}</div>
            {mainLink && (
              <a
                href={mainLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--smcccd-primary)', fontSize: '0.97rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                aria-label={`Visit ${title} main site`}
              >
                Visit main site <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: 4, fontSize: '0.9em' }} />
              </a>
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-color)', margin: '0.5rem 0 0.5rem 0', width: '100%' }} />
        <ul className="list-unstyled mb-0" style={{ fontSize: '0.97rem' }}>
          {secondaryLinks.map((l, i) => {
            const icon = getIcon(l.text);
            return (
              <li key={i} className="d-flex align-items-start mb-1" style={{ gap: '0.5rem' }}>
                <span style={{ minWidth: 18, color: 'var(--smcccd-primary)' }}>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', textDecoration: 'underline', fontWeight: 500 }}
                >
                  {l.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
}