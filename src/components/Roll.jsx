export default function Roll({ rollFn }) {

    return (
        <button
            className="roll-btn"
            onClick={rollFn}>
            Roll
        </button>
    )
}