export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Deployed Successfully!
      </h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
        Next.js + Docker + GitHub Actions + EC2 + Lambda Logging
      </p>
      <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
        Build time: {new Date().toLocaleString()}
      </p>
    </main>
  );
}
