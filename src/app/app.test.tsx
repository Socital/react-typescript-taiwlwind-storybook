import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import App from './app'

describe('<App/>', () => {
    test('it should mount', () => {
        render(<App/>)

        const app = screen.getByTestId('App')

        expect(app).toBeInTheDocument()
    })
})
