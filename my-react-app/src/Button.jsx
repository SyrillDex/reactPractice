
function Button(){

    const handleClick = (e) => e.target.textContent = "OWWWW";


    return(<button onClick={(e) => handleClick(e)}>Click me!!!</button>);
}

export default Button