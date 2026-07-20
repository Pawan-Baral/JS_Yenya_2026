function Footer({ totalTasks, completedTasks, remainingTasks }) {
  return (
    <div>
      <p>Total: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
      <p>Remaining: {remainingTasks}</p>
    </div>
  );
}
export default Footer;