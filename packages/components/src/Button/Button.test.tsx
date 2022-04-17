import { render } from '@testing-library/react'
import React from "react"
import YoButton from './Button'

describe('button test', () => {
    it('renders children', () => {
        const { getByTestId } = render(<YoButton name='Submit' size='md' type="button" />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const button = getByTestId('button')
        expect(button).toBeTruthy()
    })
})
