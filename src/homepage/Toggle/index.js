import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../Toggle/themeSlice";
import { Button, Circle, Sun, ToggleContent } from "./styled";
import { Caption } from "../../common/Caption";

export const Toggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectTheme);

    return (
        <ToggleContent>
            <Caption $toggleMode>dark mode {darkMode ? "on" : "off"}</Caption>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Circle $dark={darkMode}>
                    <Sun />
                </Circle>
            </Button>
        </ToggleContent>
    );
};