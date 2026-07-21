function Footer({ totalTasks, completedTasks, remainingTasks }) {
  return (
    <div className="footer">

      <div className="footer-card">
        <h3>Total</h3>
        <p>{totalTasks}</p>
      </div>

      <div className="footer-card">
        <h3>Completed</h3>
        <p>{completedTasks}</p>
      </div>

      <div className="footer-card">
        <h3>Remaining</h3>
        <p>{remainingTasks}</p>
      </div>

    </div>
  );
}

export default Footer;