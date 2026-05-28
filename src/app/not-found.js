import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-block integration-block" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 offset-md-2 col-sm-12">
            <h1 style={{ fontSize: '100px', fontWeight: 'bold', margin: '0', color: '#111' }}>404</h1>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>Page Not Found</h3>
            <p style={{ margin: '20px 0 30px 0', fontSize: '16px', color: '#666' }}>
              Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="btn btn-medium btn-rounded btn-border-black">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
