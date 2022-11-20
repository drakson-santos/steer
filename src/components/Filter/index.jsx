import "./filter.css"
import { useState } from "react";

const FilterComponent = ({
    id,
    icon,
    handlerFilter,
}) => {
    const [selected, setSelected] = useState(false)

    const filterClicked = () => {
        let is_selected = !selected
        setSelected(is_selected)
        handlerFilter(id, is_selected)
    }

    return (
        <div
            id="Filter"
            className={
                selected ? "filter-selected" : "filter-no-selected"
            }
            onClick={() => filterClicked()}
        >
            <img src={icon} alt="" width={30}/>
        </div>
    )
}

export default FilterComponent