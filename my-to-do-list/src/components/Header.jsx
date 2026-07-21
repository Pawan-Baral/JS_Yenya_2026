function Header({darkMode,toggleTheme}) {
  return (
    <header className="header">

      <div className="header-left">
        <h1>📋 Todo List</h1>
        <p>Organize your tasks efficiently</p>
      </div>

<button
    className="theme-btn"
    onClick={() => toggleTheme()}
>
    {darkMode ? "☀️" : "🌙"}
</button>

    </header>
  );
}

export default Header;