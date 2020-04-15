import React from 'react'

export const Header = () => (
  <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="todolist" />
      </div>
      <div className="settings">
        <ul>
          <li>
            <i data-eva="plus"></i>
          </li>
          <li>
            <i data-eva="moon"></i>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)
