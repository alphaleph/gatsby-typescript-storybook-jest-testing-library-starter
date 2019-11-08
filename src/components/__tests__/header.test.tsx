import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../header/header';
import '@testing-library/jest-dom/extend-expect';

const siteTitle = 'Gatsby-typescript-storybook-jest-testing-library Starter';

describe('Header', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<Header siteTitle={siteTitle} />);
        expect(getByText(siteTitle)).toBeInTheDocument();
    });
    it('renders correctly', () => {
        const { getByText } = render(<Header siteTitle={siteTitle} />);
        expect(getByText(siteTitle).textContent).toBe(siteTitle);
    });
    it('has not changed', () => {
        const { asFragment } = render(<Header siteTitle={siteTitle} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
