import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import MacWindow from './MacWindow'
import './notes.scss'

const Note = ({ windowName, setWindowState }) => {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch('/note.txt')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        {markdown ? (
          <div className="note-content">
            <SyntaxHighlighter
              language="typescript"
              style={atelierDuneDark}
              customStyle={{
                margin: 0,
                width: '100%',
                maxWidth: '100%',
                overflow: 'auto',
                background: 'transparent',
              }}
              wrapLongLines={true}
            >
              {markdown}
            </SyntaxHighlighter>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  )
}

export default Note