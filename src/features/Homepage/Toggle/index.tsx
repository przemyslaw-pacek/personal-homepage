import { useAppDispatch, useAppSelector } from "../../../core/hooks";
import { selectTheme, toggleTheme } from "./themeSlice";
import { Button, Circle, Sun, ToggleContent } from "./styled";
import { Caption } from "../../../common/Caption";

export const Toggle = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectTheme);

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
