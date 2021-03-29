import React, { useState , useEffect} from 'react';
import '../../babys-assets/baby-style/myrecipes.css';
import icon_trash from '../../babys-assets/icon_trashcan.svg';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import plus from '../../babys-assets/icon_plus_white.svg';
import {getToken} from '../../helpers/StorageFunctions';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

export const MyRecipes = () => {
    const [myrecipes, setMyrecipes] = useState([]);
    const token = getToken();
    let dispatch = useDispatch();
    let history = useHistory();
    
    useEffect(()=>{
        fetch('http://localhost:10002/api/v1/recipe', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        if (!res.ok) {
            throw Error('Cant fetch data!');
        }
        return res.json();
    })
    .then(data => {
        setMyrecipes(data)
    })
    .catch(err => {
        console.log(err)
    })
},[])


    const deleteRecipe = async(rid) => {
          await fetch(`http://localhost:10002/api/v1/recipe/${rid}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const newRecipes = myrecipes.filter((item)=> item._id !==rid);
            console.log(newRecipes)
            setMyrecipes([...newRecipes]);
    };
    
    const redirectToUpdate = (rid) => {
        history.push(`update-recipe/${rid}`)
    }

    
    return(
        <div className='my-recipes'>
            <div className="div-title">
            <h2 className="title-recipes">My Recipes</h2>
           <Link to={ROUTES.ADD_RECIPE}><div className='plus'><img className='sing' src={plus} alt=""/></div></Link>
            </div>
                <table className='my-recipes-table'>
                    <thead>
                    <tr className='tr'>
                        <th className='table-head-1'>Recipe Name</th>
                        <th className='table-head-2'>Category</th>
                        <th className='table-head-3'>Created On</th>
                        <th className='table-head-4'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myrecipes && myrecipes.map(recipe => (
                    <tr key={recipe._id} className='trr'>                    
                            <td className='my-recipe-title' onClick={()=>redirectToUpdate(recipe._id)}>{recipe.title}</td>
                            <td className='my-recipe-cat' onClick={()=>redirectToUpdate(recipe._id)}><div>{recipe.category}</div></td>
                            <td className='my-recipe-date' onClick={()=>redirectToUpdate(recipe._id)}>{new Date(recipe.pubDate).toLocaleDateString()}</td>
                            <td className='my-recipe-del' onClick={()=>{deleteRecipe(recipe._id)}}><img src={icon_trash}/></td>          
                    </tr>                    
              ))}
              </tbody>
               </table>
            
          </div>
  
    )
}

export default MyRecipes;