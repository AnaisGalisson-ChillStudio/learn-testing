import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

export function Level4() {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const toggleThemeMode = () => {
    return themeMode === "light" ? "dark" : "light";
  };
  return (
    <div>
      Niveau de profondeur 4
      <div>
        <Button
          onClick={() => {
            setThemeMode(toggleThemeMode());
          }}
        >
          Changer le theme vers le mode {toggleThemeMode()}
        </Button>
      </div>
    </div>
  );
}
