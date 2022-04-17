import { render } from '@testing-library/react'
import React from "react"
import IconHeading from './IconHeading'

describe('icon heading test', () => {
    it('renders children', () => {
        const { getByTestId } = render(<IconHeading heading='Services' />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const heading = getByTestId('icon-heading')
        expect(heading).toBeTruthy()
    })
})
