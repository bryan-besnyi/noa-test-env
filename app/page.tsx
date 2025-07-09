export default function Home() {
  return (
    <div className="container-fluid">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron bg-light p-5 rounded mb-4">
              <div className="text-center">
                <h1 className="display-4 text-primary">Welcome to Next.js with Bootstrap!</h1>
                <p className="lead">Your project is now successfully configured with Bootstrap SASS compilation.</p>
                <hr className="my-4" />
                <p>Get started by editing <code className="bg-secondary text-white p-1 rounded">app/page.tsx</code> and see your Bootstrap changes instantly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Image
                  src="/vercel.svg"
                  alt="Vercel logo"
                  width={60}
                  height={60}
                  className="mb-3"
                />
                <h5 className="card-title">Deploy Now</h5>
                                 <p className="card-text">Deploy your Next.js app instantly with Vercel&apos;s platform.</p>
                <a 
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Image
                  src="/file.svg"
                  alt="File icon"
                  width={60}
                  height={60}
                  className="mb-3"
                />
                <h5 className="card-title">Learn Next.js</h5>
                <p className="card-text">Explore interactive tutorials and comprehensive documentation.</p>
                <a 
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="btn btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Image
                  src="/window.svg"
                  alt="Window icon"
                  width={60}
                  height={60}
                  className="mb-3"
                />
                <h5 className="card-title">Examples</h5>
                <p className="card-text">Browse through various Next.js templates and examples.</p>
                <a 
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Examples
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Components Showcase */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4">Bootstrap Components Working!</h2>
            
            {/* Alerts */}
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Success!</h4>
              <p>Bootstrap SASS is successfully compiled and working in your Next.js project.</p>
              <hr />
              <p className="mb-0">You can now use all Bootstrap components and utilities.</p>
            </div>

            {/* Buttons */}
            <div className="text-center mb-4">
              <button type="button" className="btn btn-primary me-2">Primary</button>
              <button type="button" className="btn btn-secondary me-2">Secondary</button>
              <button type="button" className="btn btn-success me-2">Success</button>
              <button type="button" className="btn btn-warning me-2">Warning</button>
              <button type="button" className="btn btn-danger">Danger</button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <h5>Bootstrap Progress Bar</h5>
                             <div className="progress" style={{height: '25px'}}>
                 <div 
                   className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                   role="progressbar" 
                   style={{width: '75%'}}
                   aria-label="Bootstrap integration progress"
                   aria-valuenow={75}
                   aria-valuemin={0}
                   aria-valuemax={100}
                 >
                   75% Complete
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Next.js + Bootstrap</h5>
              <p>Successfully integrated Bootstrap SASS compilation!</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a 
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/globe.svg"
                  alt="Globe icon"
                  width={20}
                  height={20}
                  className="me-2"
                />
                Go to nextjs.org →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
