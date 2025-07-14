export default function Die({ die, toggle }) {

    return (
        <button
            className={`die ${die.selected && "selected"}`}
            onClick={() => toggle(die.id)}
            aria-label={`Die with number ${die.num}, ${die.selected ? "held" : "not held"}`}
            aria-pressed={die.selected}>
            {die.num}
        </button>
    )
}