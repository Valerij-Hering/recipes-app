function RecipesComponent(props) {
    return(
            <div className="box-info">
                    <img src={props.image} alt="recipe" className="recipe-image"/>
                    {/* <button className="btn-add">Add</button> */}
                    <br/>
                <div className="box-recipe-igredients">
                        <p className="recipe-label">{props.label}</p>
                    <br/>
                        <p className="recipe-calories">{props.calories.toFixed()} calories</p>
                    <br/>
                        <p className="ingredientsLength">{props.ingredientsList} Ingredients</p>
                    <div className="box-ul">
                        <div className="recipe-igredients">
                            {props.igredients.map((ingredient, index) => (
                                <p key={index} className="ingredient">{ingredient}</p>
                            ))}
                        </div>
                    </div>
                    <br/>
                </div> 
            </div>
    )
}

export default RecipesComponent;