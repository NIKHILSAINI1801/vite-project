const Header = () =>  {
    const fruits = ["apple", "banana", "grapes", "papaya", "chikku", "coconut"];
    
    return (
        <div>
            <h1>Fruits List</h1>
            {
                fruits.map((fruit) => (
                    <div key={fruit}>  {/* Adding a key prop for each child in a list */}
                        <h1>{fruit} is healthy to eat. </h1>
                    </div>
                ))
            }
        </div>
    );
}