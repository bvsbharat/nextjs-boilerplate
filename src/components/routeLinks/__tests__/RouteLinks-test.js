import React from "react";
import renderer from "react-test-renderer";
import RouteLinks from "../RouteLinks";

describe(RouteLinks, () => {
    it("Should render correctly", () => {
        const component = renderer.create(<RouteLinks />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
