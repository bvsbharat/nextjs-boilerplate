import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe(Footer, () => {
    it("Should render correctly", () => {
        const component = renderer.create(<Footer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
