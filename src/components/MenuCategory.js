import React from 'react'
import '../components/MenuCategory.css'
import { Link } from 'react-router-dom'

const categories = [{
    category: "regalos",
    categoryId: 1
},
{
    category: "eventos",
    categoryId: 2
},
{
    category: "condolencias",
    categoryId: 3
}
]

function MenuCategory() {


    return <>
        <div className="MenuCategory">
            {categories
                .map((cat) =>
                    <div key={cat.categoryId} >
                        <Link to={`/categories/${cat.category}`}>
                            <p className="textCat"> {cat.category} </p>
                        </Link>
                    </div>
                )}
        </div>
    </>
}

export default MenuCategory