import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TemplateName from './TemplateName'
import '@testing-library/jest-dom'

describe('<TemplateName />', () => {
    test('it should mount', () => {
        render(<TemplateName />)
    
        const sample = screen.getByTestId('TemplateName')

        expect(sample).toBeInTheDocument()
    })
})
