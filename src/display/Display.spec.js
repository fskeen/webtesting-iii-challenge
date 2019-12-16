import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render } from "@testing-library/react";
import 'react-testing-library/cleanup-after-each';

import Display from './Display'

describe("<Display />", () => {
    it('renders at all', () => {
        render(<Display />)
    });
})

describe("Display state tests based on props", () => {

    it('shows unlocked/open', () => {
        const display = render(<Display locked={false} closed={false}/>)
        expect(display.getByText('Unlocked'))
        expect(display.getByText('Open'))

        // green LED - green LED
        const unlocked = display.getByText('Unlocked');
        const open = display.getByText('Open');
        expect(unlocked.className).toMatch('led green-led')
        expect(open.className).toMatch('led green-led')
    });
    
    it('shows unlocked/closed', () => {
        const display = render(<Display locked={false} closed={true}/>)
        expect(display.getByText('Unlocked'))
        expect(display.getByText('Closed'))

        // green LED - red LED
        const unlocked = display.getByText('Unlocked');
        const closed = display.getByText('Closed');
        expect(unlocked.className).toMatch('led green-led')
        expect(closed.className).toMatch('led red-led')
    });
    
    it('shows locked/closed', () => {
        const display = render(<Display locked={true} closed={true}/>)
        expect(display.getByText('Locked'))
        expect(display.getByText('Closed'))

        // red LED - red LED
        const locked = display.getByText('Locked');
        const closed = display.getByText('Closed');
        expect(locked.className).toMatch('led red-led')
        expect(closed.className).toMatch('led red-led')
    });

    it('DOES NOT ever show locked/open', () => {
        const display = render(<Display locked={true} closed={true}/>)
        expect(display.queryByText('Locked')).toBeTruthy()
        expect(display.queryByText('Open')).toBeFalsy()
    });

})