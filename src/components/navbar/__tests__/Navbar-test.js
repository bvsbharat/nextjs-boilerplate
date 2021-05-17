import mount from "@test";
import renderer from "react-test-renderer";
import Navbar from "../Navbar";

describe("Navbar", () => {
    const component = mount(<Navbar />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(<Navbar className="navbar" />);
        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
