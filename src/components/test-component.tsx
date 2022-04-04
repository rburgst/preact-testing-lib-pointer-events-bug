import { FunctionComponent } from "preact";
import React from 'preact/compat'

interface TestComponentProps {
    onPointerEnter: () => void
    onClick: () => void
}
export const TestComponent : FunctionComponent<TestComponentProps> = ({onPointerEnter, onClick}) => {
    return <div onPointerEnter={onPointerEnter} onClick={onClick} data-testid="test-div">My Div</div>
}