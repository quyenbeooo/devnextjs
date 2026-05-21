function Notes() {
  const sampleNotes = [
    { id: 1, title: 'My First Note', date: '2024-05-20', preview: 'This is my first note...' },
    { id: 2, title: 'Meeting Notes', date: '2024-05-19', preview: 'Important points from today...' },
    { id: 3, title: 'Project Ideas', date: '2024-05-18', preview: 'Future project concepts...' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📝 My Notes</h1>
        <button style={styles.button}>+ New Note</button>
      </div>
      <div style={styles.notesList}>
        {sampleNotes.map((note) => (
          <div key={note.id} style={styles.noteItem}>
            <div style={styles.noteContent}>
              <h3 style={styles.noteTitle}>{note.title}</h3>
              <p style={styles.notePreview}>{note.preview}</p>
            </div>
            <span style={styles.noteDate}>{note.date}</span>
          </div>
        ))}
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    margin: 0,
  },
  button: {
    padding: '10px 24px',
    backgroundColor: 'var(--primary)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
  notesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  noteItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  } as React.CSSProperties,
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    margin: '0 0 8px 0',
  },
  notePreview: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  noteDate: {
    fontSize: '0.85rem',
    color: 'var(--text-tertiary)',
    minWidth: '100px',
    textAlign: 'right',
  },
};

export default Notes;
