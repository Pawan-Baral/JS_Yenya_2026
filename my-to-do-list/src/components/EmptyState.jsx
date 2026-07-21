function EmptyState({ message }) {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        📋
      </div>

      <h3>{message}</h3>

      <p>
        You're all caught up!
      </p>

    </div>
  );
}

export default EmptyState;