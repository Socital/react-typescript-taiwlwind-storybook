import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/app'
import './index.scss'
import CONFIG from './config'

if (CONFIG.development) console.table(CONFIG)

const container = document.getElementById('root')
if (container != null) {
    const root = createRoot(container)
    root.render(<App />)
}
