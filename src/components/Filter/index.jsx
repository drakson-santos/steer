import "./filter.css"

const FilterComponent = ({ icon, selected }) => {
    return (
        <div
            id="Filter"
            className={
                selected ? "filter-selected" : "filter-no-selected"
            }
        >
            <img src={icon} alt="" />
        </div>
    )
}

export default FilterComponent