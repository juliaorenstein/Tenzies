export default function Die({ die, toggle }) {

    return (
        <button
            className={`die ${die.selected && "selected"}`}
            onClick={() => toggle(die.id)}>
            {die.num}
        </button>
    )
}