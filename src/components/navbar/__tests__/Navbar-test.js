import mount from "@test";
import renderer from "react-test-renderer";
import Navbar from "../Navbar";

describe("Navbar", () => {
    const component = mount(<Navbar />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(<Navbar />);
        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("cards length must be equal to the length of the meta data ", () => {
        expect(component.find(".nav-wrapper").length).toEqual(1);
    });
});
