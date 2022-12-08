import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import App from './app'
import {store} from '../store/store'
import {Provider} from 'react-redux'

describe('<App/>', () => {
    test('it should mount', () => {
        render(
            <Provider store={store}>
                <App></App>
            </Provider>
        )

        const app = screen.getByTestId('App')

        expect(app).toBeInTheDocument()
    })
})
