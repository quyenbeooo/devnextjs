function Settings() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>⚙️ Settings</h1>
        <p style={styles.subtitle}>Manage your application preferences</p>
      </div>
      <div style={styles.settingsGrid}>
        <div style={styles.settingCard}>
          <h3 style={styles.settingTitle}>Theme</h3>
          <p style={styles.settingDesc}>Choose your preferred color theme</p>
          <div style={styles.buttonGroup}>
            <button style={styles.themeButton}>Light</button>
            <button style={{ ...styles.themeButton, ...styles.themeButtonActive }}>Dark</button>
          </div>
        </div>
        <div style={styles.settingCard}>
          <h3 style={styles.settingTitle}>Notifications</h3>
          <p style={styles.settingDesc}>Manage notification preferences</p>
          <label style={styles.checkbox}>
            <input type="checkbox" defaultChecked />
            <span>Enable notifications</span>
          </label>
        </div>
        <div style={styles.settingCard}>
          <h3 style={styles.settingTitle}>Privacy</h3>
          <p style={styles.settingDesc}>Control your data and privacy settings</p>
          <label style={styles.checkbox}>
            <input type="checkbox" defaultChecked />
            <span>Private notes</span>
          </label>
        </div>
        <div style={styles.settingCard}>
          <h3 style={styles.settingTitle}>Account</h3>
          <p style={styles.settingDesc}>Manage your account settings</p>
          <button style={styles.dangerButton}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    margin: '0 0 12px 0',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  settingsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  settingCard: {
    padding: '24px',
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
  },
  settingTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    margin: '0 0 8px 0',
  },
  settingDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: '0 0 16px 0',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
  themeButton: {
    flex: 1,
    padding: '10px 16px',
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
  themeButtonActive: {
    backgroundColor: 'var(--primary)',
    color: 'white',
    borderColor: 'var(--primary)',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
  } as React.CSSProperties,
  dangerButton: {
    width: '100%',
    padding: '10px 16px',
    backgroundColor: 'var(--error)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
};

export default Settings;
