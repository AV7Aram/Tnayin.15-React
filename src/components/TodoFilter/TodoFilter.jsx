export function TodoFilter({ setFilter }) {
    return (
        <>
            <button onClick={() => setFilter("notDone")}>IsDone</button>
            <button onClick={() => setFilter("done")}>Done</button>
            <button onClick={() => setFilter("all")}>All</button>
        </>
    )
}