import { plantList } from "./PlantList"
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>
                     {plant.name}
                     {plant.isBestSale && <span>🔥</span>}
                     {/* {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>} */}  
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList

