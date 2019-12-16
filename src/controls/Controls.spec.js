import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls'

describe("<Controls />", () => {
    it('renders at all', () => {
        render(<Controls />)
    });
})

describe("Control button tests", () => {

    const controlsDefault = render(<Controls />)

    it('renders the right buttons for unlocked / open', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={false} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBtn = getByText(/close gate/i)
        const lockBtn = getByText(/lock gate/i)

        expect(closeBtn.disabled).toBeFalsy()
        expect(lockBtn.disabled).toBeTruthy()

        fireEvent.click(closeBtn)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockBtn)
        expect(lockSpy).not.toBeCalled()
    });

    it('renders the right buttons for unlocked / closed', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={true} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBtn = getByText(/open gate/i)
        const lockBtn = getByText(/lock gate/i)

        expect(closeBtn.disabled).toBeFalsy()
        expect(lockBtn.disabled).toBeFalsy()

        fireEvent.click(closeBtn)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockBtn)
        expect(lockSpy).toBeCalled()
    });

    it('renders the right buttons for locked / closed', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={true} locked={true} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBtn = getByText(/open gate/i)
        const lockBtn = getByText(/unlock gate/i)

        expect(closeBtn.disabled).toBeTruthy()
        expect(lockBtn.disabled).toBeFalsy()

        fireEvent.click(closeBtn)
        expect(closeSpy).not.toBeCalled()

        fireEvent.click(lockBtn)
        expect(lockSpy).toBeCalled()
    });
})


