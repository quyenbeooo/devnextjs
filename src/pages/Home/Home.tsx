function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏠 Welcome Home</h1>
        <p style={styles.subtitle}>Your personal notebook application</p>
      </div>
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <div style={styles.cardIcon}>📝</div>
          <h3 style={styles.cardTitle}>Create Notes</h3>
          <p style={styles.cardText}>Start creating your own notes and organize them efficiently.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.cardIcon}>🔍</div>
          <h3 style={styles.cardTitle}>Search Notes</h3>
          <p style={styles.cardText}>Quickly find your notes using powerful search functionality.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.cardIcon}>⚙️</div>
          <h3 style={styles.cardTitle}>Customize</h3>
          <p style={styles.cardText}>Personalize your experience with custom settings.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '48px',
    animation: 'slideDown 0.5s ease',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    margin: '0 0 12px 0',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    padding: '32px 24px',
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  } as React.CSSProperties & {'_hover': any},
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    display: 'inline-block',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    margin: '12px 0',
  },
  cardText: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    margin: 0,
    lineHeight: '1.6',
  },
};

export default Home;
