import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { Hello } from "../../src/components/Hello";

describe("Hello", () => {
    let renderer: TestUtils.ShallowRenderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<Hello compiler="TypeScript" framework="React" />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "h1");
    });

    it("should have correct prop values", () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props.children.join("");
        chai.assert.strictEqual(propValues, "Hello from TypeScript and React!");
    });
});