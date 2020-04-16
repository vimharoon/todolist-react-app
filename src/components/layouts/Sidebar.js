import React from 'react'

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <i data-eva="inbox"></i>
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <i data-eva="calendar"></i>
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <i data-eva="pantone"></i>
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <i data-eva="chevron-down"></i>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here</ul>
      Add project component here!
    </div>
  )
}
