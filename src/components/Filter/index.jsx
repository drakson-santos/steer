import "./filter.css"
import { useState } from "react";

const filters_selected = [];

function filterIsSelected(filter_id) {
    return filters_selected.indexOf(filter_id) > -1
}

function select_filter(html_id) {
    filters_selected.push(html_id)
}

function unselect_filter(html_id) {
    filters_selected.splice(filters_selected.indexOf(html_id), 1);
}

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
            <img src={icon} alt="" />
        </div>
    )
}

export default FilterComponent