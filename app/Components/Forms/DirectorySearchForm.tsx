import React from 'react';

interface DirectorySearchFormProps {
  className?: string;
}

export default function DirectorySearchForm({ className = "" }: DirectorySearchFormProps) {
  return (
    <form 
      action="//directory.smccd.edu/decider_portal.php" 
      method="get"
      className={className}
    >
      <div className="mb-3">
        <label htmlFor="givenName" className="visually-hidden">
          First Name:
        </label>
        <input
          id="givenName"
          name="fname"
          type="text"
          placeholder="First Name"
          className="form-control"
          autoComplete="given-name"
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: 'var(--input-border)',
            color: 'var(--text-primary)'
          }}
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="familyName" className="visually-hidden">
          Last Name:
        </label>
        <input
          id="familyName"
          name="lname"
          type="text"
          placeholder="Last Name"
          className="form-control"
          autoComplete="family-name"
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: 'var(--input-border)',
            color: 'var(--text-primary)'
          }}
        />
      </div>
      
      <div className="row align-items-center">
        <div className="col">
          <a
            href="//www.smccd.edu/directory"
            className="text-decoration-none"
            style={{ color: 'var(--smcccd-primary)' }}
          >
            Advanced Search
          </a>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            <i className="fa fa-search me-2" aria-hidden="true"></i>
            Find
          </button>
        </div>
      </div>
    </form>
  );
} 