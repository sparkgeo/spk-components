import { render } from "@testing-library/react";
import { InfoPanelContainer } from "./InfoPanelContainer";

describe("InfoPanelContainer", () => {
    it("renders with correct position class and children", () => {
        const StubChildComponent = () => (<div>This is a stubbed child element</div>)

        const {container} = render(
            <InfoPanelContainer data-testid='infoPanel' position="topLeft">
                <StubChildComponent/>
            </InfoPanelContainer>
        );

        expect(container).toMatchSnapshot();
    });
});