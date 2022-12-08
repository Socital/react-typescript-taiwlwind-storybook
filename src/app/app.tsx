import React, { Component } from 'react'
import Sample from '../components/Sample/Sample'
import './app.styles.scss'

class App extends Component {
    render (): React.ReactNode {
        return (
            <div className='flex items-center justify-center h-screen text-5xl' data-testid="App">
                <Sample>hey</Sample>
            </div>
        )
    }
}

export default App
