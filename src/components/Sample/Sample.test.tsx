import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Sample from './Sample'
import {store} from '../../store/store'
import {Provider} from 'react-redux'

describe('<Sample />', () => {
    test('it should mount', () => {
        render(
            <Provider store={store}>
                <Sample></Sample>
            </Provider>
        )
    
        const sample = screen.getByTestId('Sample')

        expect(sample).toBeInTheDocument()
    })
})
