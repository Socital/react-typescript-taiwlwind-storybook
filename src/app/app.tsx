import React, { Component } from 'react'

import './app.styles.scss'

class App extends Component {
    render (): React.ReactNode {
        return (
            <div className='flex items-center justify-center h-screen text-5xl' data-testid="App">
                Your awesome react app!
            </div>
        )
    }
}

export default App
