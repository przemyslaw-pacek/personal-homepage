import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleTheme } from "../Projects/projectsSlice";
import { Button, Circle, Sun, Text, ToggleContent } from "./styled";

export const Toggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);

    return (
        <ToggleContent>
            <Text>dark mode {darkMode ? "on" : "off"}</Text>
            <Button $dark={darkMode} onClick={() => dispatch(toggleTheme())}>
                <Circle $dark={darkMode}>
                    <Sun />
                </Circle>
            </Button>
        </ToggleContent>
    )
};