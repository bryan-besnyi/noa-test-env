import React, { useState } from 'react';

interface SearchFormProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
}

export default function SearchForm({ 
  className = '', 
  size = 'md',
  placeholder = 'Search...'
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Redirect to search results or handle search
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
    }
  };

  const sizeClasses = {
    sm: 'form-control-sm',
    md: '',
    lg: 'form-control-lg'
  };

  return (
    <form onSubmit={handleSubmit} className={`search-form ${className}`}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${sizeClasses[size]}`}
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: 'var(--input-border)',
            color: 'var(--text-primary)'
          }}
        />
        <button 
          className={`btn btn-outline-secondary ${sizeClasses[size]}`} 
          type="submit"
          aria-label="Search"
          style={{
            borderColor: 'var(--input-border)',
            color: 'var(--text-secondary)'
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
} 