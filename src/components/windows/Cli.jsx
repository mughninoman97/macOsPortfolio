import React from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"
const Cli = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window" style={{ padding: '12px', fontFamily: 'monospace', color: '#fff', background: '#111', height: '100%', overflow: 'auto' }}>
        <div style={{ whiteSpace: 'pre-wrap' }}>
{`AbdulMughni:~$ `}
        </div>
      </div>
    </MacWindow>
  )
}

export default Cli