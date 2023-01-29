import { Level2 } from "./Level2";

export function Level1() {
  return (
    <div
      style={{
        marginTop: 20,
        padding: 15,
        border: "1px solid red",
        borderRadius: 5,
      }}
    >
      Niveau de profondeur 1
      <Level2 />
    </div>
  );
}
