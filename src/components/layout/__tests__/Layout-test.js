import React from "react";
import renderer from "react-test-renderer";
import Layout from "../Layout";

describe(Layout, () => {
    it("Should render correctly", () => {
        const component = renderer.create(
            <Layout>
                <h1>child</h1>
            </Layout>,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
