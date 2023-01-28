function RecipesComponent(props) {
    return(
            <div className="box-info">
                    <a href={props.link}>
                        <img src={props.image} alt="recipe" className="recipe-image"/>
                    </a>
                    
                    {/* <button className="btn-add">Add</button> */}
                    <br/>
                    <br/>
                <div className="box-recipe-igredients">
                        <p className="recipe-label">{props.label}</p>
                    
                        {/* <p className="recipe-calories">{props.calories.toFixed()} calories</p> */}
                    <br/>
                        {/* <p className="ingredientsLength">{props.ingredientsList} Ingredients</p>
                    <div className="box-ul">
                        <div className="recipe-igredients">
                            <br/>
                            {props.igredients.map((ingredient, index) => (
                                <p key={index} className="ingredient">{ingredient}</p>
                            ))}
                        </div>
                    </div> */}
                    <br/>
                    <div className="container-recipes-info">
                        <div className="subcontainer-recipes-info">
                            <div className="callInfo">
                                <p>{props.calories.toFixed()}</p>
                            </div>
                            <div className="cal-name">
                                <span>Cal</span>
                            </div>
                        </div>

                        <div className="subcontainer-recipes-info">
                            <div className="callInfo">
                                <p>{Math.floor(props.protein)}g</p>
                            </div>
                            <div className="cal-name">
                                <span>Protein</span>
                            </div>
                        </div>

                        <div className="subcontainer-recipes-info">
                            <div className="callInfo">
                                <p>{Math.floor(props.carbs)}g</p>
                            </div>
                            <div className="cal-name">
                                <span>Carbs</span>
                            </div>
                        </div>

                        <div className="subcontainer-recipes-info">
                            <div className="callInfo">
                                <p>{Math.floor(props.fat)}g</p>
                            </div>
                            <div className="cal-name">
                                <span>Fat</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    {/* <p className="cookingTime">cooking time: <span>  {props.totalTime} min</span></p> */}
                    <div className="box-link">
                        <a href={props.link} target="blank">Sources of recommendations</a>
                    </div>
                    <br/>
                </div> 
            </div>
    )
}

export default RecipesComponent;