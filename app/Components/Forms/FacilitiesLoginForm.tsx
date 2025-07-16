import React from 'react';
import Image from 'next/image';

interface FacilitiesLoginFormProps {
  className?: string;
}

export default function FacilitiesLoginForm({ className = "" }: FacilitiesLoginFormProps) {
  return (
    <div className={className}>
      <Image 
        src="/images/facilities.svg" 
        alt="Facilities helpcenter" 
        width={400}
        height={200}
        className="img-fluid mb-3"
      />
      
      <form
        action="//helpcenter.smccd.edu/requestform/ldapauthenticate_onuma.php"
        method="post"
        target="_blank"
        id="FacilitiesHelpForm"
      >
        <div className="mb-3">
          <label htmlFor="fac-username" className="visually-hidden">
            User Name:
          </label>
          <div className="input-group">
            <input
              id="fac-username"
              name="username"
              type="text"
              placeholder="username"
              className="form-control"
              aria-label="Username"
              autoComplete="username"
              style={{
                backgroundColor: 'var(--input-bg)',
                borderColor: 'var(--input-border)',
                color: 'var(--text-primary)'
              }}
            />
            <span 
              className="input-group-text"
              style={{
                backgroundColor: 'var(--background-secondary)',
                borderColor: 'var(--input-border)',
                color: 'var(--text-secondary)'
              }}
            >
              @smccd.edu
            </span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="fac-password" className="visually-hidden">
            Password:
          </label>
          <input
            id="fac-password"
            name="password"
            type="password"
            placeholder="email password"
            className="form-control"
            autoComplete="current-password"
            style={{
              backgroundColor: 'var(--input-bg)',
              borderColor: 'var(--input-border)',
              color: 'var(--text-primary)'
            }}
          />
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-warning">
            Login
          </button>
        </div>
      </form>
    </div>
  );
} 