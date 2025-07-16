import PortalBtn from './components/Buttons/PortalBtn';
import DeptBtn from './components/Buttons/DeptBtn';
import CollegeLinks from './components/CollegeLinks';
import DirectorySearchForm from './components/Forms/DirectorySearchForm';
import FacilitiesLoginForm from './components/Forms/FacilitiesLoginForm';
import ContentCard from './components/Cards/ContentCard';
import ExternalLinksSection from './components/Navigation/ExternalLinksSection';
import QuickLinksTable, { RawQuickLink } from './components/QuickLinksTable';
import ThemeToggle from './components/ThemeToggle';

async function fetchRawQuickLinks(): Promise<RawQuickLink[]> {
  const res = await fetch('https://site-index.smccd.edu/api/indexItems', { cache: 'no-store' });
  if (!res.ok) return [];
  return await res.json(); 
}

export default async function Home() {
  const rawLinks = await fetchRawQuickLinks(); 
  // Portal buttons data
  const portalButtons = [
    { title: 'mySMCCD Portal', color: 'primary', url: 'https://smccd.onelogin.com/' },
    { title: 'O365 Email Login', color: 'purple', url: 'http://webmail.smccd.edu/', icon: 'fas fa-envelope' },
    { title: 'SMCCD Password Management', color: 'info', url: 'https://its.smccd.edu/changing-password-onelogin/', icon: 'fas fa-key' },
    { title: 'Faculty Gateway', color: 'primary', url: 'https://faculty.smccd.edu' }
  ];

  // Department buttons data
  const departments = [
    { title: 'DIS', color: 'DIS', url: 'https://smccd.edu' },
    { title: 'CAN', color: 'success', url: 'https://canadacollege.edu' },
    { title: 'CSM', color: 'CSM', url: 'https://collegeofsanmateo.edu' },
    { title: 'SKY', color: 'danger', url: 'https://skylinecollege.edu' }
  ];

  // College links data
  const collegeLinks = [
    {
      title: 'Cañada College',
      img: '/images/college_canada.svg',
      link: [
        { text: 'Cañada College', url: 'https://canadacollege.edu/' },
        { text: 'Cañada Bookstore', url: 'http://bookstore.canadacollege.edu/home.aspx' },
        { text: 'Cañada Library', url: 'https://www.canadacollege.edu/library/' },
        { text: 'Cañada Construction Updates', url: 'https://canadacollege.edu/construction/' }
      ]
    },
    {
      title: 'College of San Mateo',
      img: '/images/college_csm.svg',
      link: [
        { text: 'College of San Mateo', url: 'http://collegeofsanmateo.edu/' },
        { text: 'CSM Bookstore', url: 'http://bookstore.collegeofsanmateo.edu/home.aspx' },
        { text: 'CSM Events', url: 'https://calendar.collegeofsanmateo.edu/events' },
        { text: 'CSM Library', url: 'https://www.collegeofsanmateo.edu/library/' },
        { text: 'CSM News', url: 'https://www.collegeofsanmateo.edu/news/' }
      ]
    },
    {
      title: 'Skyline College',
      img: '/images/college_skyline.svg',
      link: [
        { text: 'Skyline College', url: 'http://www.skylinecollege.edu/' },
        { text: 'Skyline Shines', url: 'https://www.skylinecollege.edu/skylineshines/' },
        { text: 'Skyline Bookstore', url: 'http://bookstore.skylinecollege.edu/home.aspx' },
        { text: 'Skyline Library', url: 'https://skylinecollege.edu/library/' },
        { text: 'Skyline Construction Updates', url: 'https://smccd.edu/construction/sky-notices.php' }
      ]
    }
  ];

  // External links data
  const externalLinks = [
    { text: "Chancellor's Office DataMart", url: 'http://www.cccco.edu/AboutUs/Divisions/TechResearchInfo/MIS/DataMartandReports/tabid/282/Default.aspx' },
    { text: 'EduCause', url: 'http://www.educause.edu/' },
    { text: 'Google', url: 'http://www.google.com' },
    { text: 'University Business', url: 'http://www.universitybusiness.com/' }
  ];

  return (
    <div>
      {/* Theme Toggle for Development */}
      <ThemeToggle position="fixed" showLabels={true} size="sm" />
      
      <section className="bg-light py-4">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="mb-4">
                <h1 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem' 
                }}>
                  Employee Portal
                </h1>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1.1rem' 
                }}>
                  San Mateo County Community College District
                </p>
              </div>

              {/* Quick Links Table */}
              <QuickLinksTable className="mb-4" rawLinks={rawLinks} />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-section">
                {/* Portal Buttons */}
                <div className="portal-buttons-section" style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '1rem',
                    borderBottom: '2px solid var(--border-color)',
                    paddingBottom: '0.5rem'
                  }}>
                    Quick Access
                  </h4>
                  {portalButtons.map((button, index) => (
                    <PortalBtn key={index} btnInfo={button} />
                  ))}
                </div>

                {/* Department Buttons */}
                <div className="department-buttons-section" style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '1rem',
                    borderBottom: '2px solid var(--border-color)',
                    paddingBottom: '0.5rem'
                  }}>
                    Campus Sites
                  </h4>
                  <div className="row g-2">
                    {departments.map((dept, index) => (
                      <DeptBtn key={index} dept={dept} />
                    ))}
                  </div>
                </div>
              </div>

              {/* District Directory */}
              <ContentCard
                title="District Directory"
                link="//directory.smccd.edu"
                className="mt-4"
              >
                <DirectorySearchForm />
              </ContentCard>

              {/* Keenan SafeColleges */}
              <ContentCard
                title="Keenan SafeColleges"
                link="https://smccd-keenan.safecolleges.com/training/home"
                paragraph="Online compliance training courses for District employees."
                className="mt-4"
              >
                <div className="d-grid gap-2">
                  <a href="https://smccd-keenan.safecolleges.com/training/home" 
                     className="btn btn-success">
                    Keenan SafeColleges Login
                  </a>
                  <a href="https://smccd.edu/safecolleges/index.php" 
                     className="btn btn-link">
                    More About Keenan SafeColleges
                  </a>
                </div>
              </ContentCard>

              {/* Canvas Helpdesk */}
              <ContentCard
                title="Canvas Helpdesk"
                link="https://smccdhelp.zendesk.com/hc/en-us"
                paragraph="Need help with Canvas? Visit the Canvas Helpdesk"
                className="mt-4"
              >
                <div className="d-grid">
                  <a href="https://smccdhelp.zendesk.com/hc/en-us" 
                     className="btn btn-success">
                    Canvas Helpdesk
                  </a>
                </div>
              </ContentCard>

              {/* ITS Section */}
              <ContentCard
                title="ITS"
                link="//www.smccd.edu/its/"
                paragraph="Information Technology Services links and resources."
                className="mt-4"
              />
            </div>
          </div>

          {/* College Links Section */}
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="college-links-flex d-flex flex-wrap gap-3" style={{ rowGap: '1.5rem' }}>
                {collegeLinks.map((college, index) => (
                  <div key={index} style={{ flex: '1 1 260px', minWidth: 220, maxWidth: 340 }}>
                    <CollegeLinks {...college} className="h-100 w-100" />
                  </div>
                ))}
              </div>
              {/* External Quick Links */}
              <div className="row mt-4">
                <div className="col-md-12">
                  <ExternalLinksSection links={externalLinks} />
                </div>
              </div>
            </div>

            {/* Facilities Helpcenter */}
            <div className="col-md-4">
              <ContentCard
                title="Facilities Helpcenter"
                className="mt-4"
              >
                <FacilitiesLoginForm />
              </ContentCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
