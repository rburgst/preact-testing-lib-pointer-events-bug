import { fireEvent, render, screen} from "@testing-library/preact"
import { TestComponent } from "../test-component"
import React from 'preact/compat'

describe("test-component", () => {
    it("should invoke onClick", async () => {
        const onClick = jest.fn()
        const onPointerEnter = jest.fn()
        const {container, debug} = render(<TestComponent onPointerEnter={onPointerEnter} onClick={onClick}/>)

        debug(container)
        const div = await screen.findByTestId("test-div")
        fireEvent.click(div)

        expect(onClick).toBeCalled()
    })
    
    it("should invoke onPointerEnter", async () => {
        const onClick = jest.fn()
        const onPointerEnter = jest.fn()
        const {container, debug} = render(<TestComponent onPointerEnter={onPointerEnter} onClick={onClick}/>)
        debug(container)

        const div = await screen.findByTestId("test-div")

        fireEvent.pointerEnter(div)

        expect(onPointerEnter).toBeCalled()
    })
})