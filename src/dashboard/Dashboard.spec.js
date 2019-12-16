import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard'

describe("<Dashboard />", () => {
    it('renders at all', () => {
        render(<Dashboard />)
    });
})

describe("Dashboard display and controls tests", () => {
    it('shows controls on initial render', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText('Lock Gate'));
        expect(getByText('Close Gate'));
    });

    it('shows display on initial render', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    });

    // the above also tests if it defaults to the right state (unlocked + open)

})