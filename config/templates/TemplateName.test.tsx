import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import TemplateName from './TemplateName'

describe('<TemplateName />', () => {
    test('it should mount', () => {
        render(<TemplateName />)
    
        const sample = screen.getByTestId('TemplateName')

        expect(sample).toBeInTheDocument()
    })
})
