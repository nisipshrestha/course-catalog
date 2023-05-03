import Collapsible from "../Collapsible";
import Checkbox from "../Checkbox";
import SearchField from "../SearchField";
import ToggleIcon from "./ToggleIcon";
import "./filter.css";

const Filter = ({
  onToggle,
  toggle,
  onReset,
  onSearch,
  filterData,
  filterCollection,
}) => {
  return (
    <aside className={`filter  ${toggle ? "visible" : ""}`}>
      <ToggleIcon onToggle={onToggle} toggle={toggle} />
      {toggle && (
        <div className={`filter-container flex`}>
          <SearchField
            placeholder="Search"
            name="course"
            onChange={onSearch}
            value={filterData.course}
          />

          <section className="filter-by">
            {/* filter-text */}
            <div className="filter-text flex">
              <div className="flex">
                <i className="fas fa-filter"></i>
                <h3>Filter By:</h3>
              </div>
              <button type="button" onClick={onReset}>
                Reset
              </button>
            </div>
            <Collapsible label="Category">
              <section>
                <SearchField
                  placeholder="Categories"
                  name="categoryFilter"
                  value={filterData.categoryFilter}
                  onChange={onSearch}
                />

                <Checkbox
                  onChange={onSearch}
                  name="allCategories"
                  id="allCategories"
                  label="Select All"
                  checked={
                    filterCollection?.categories?.length ===
                    filterData.categories.length
                  }
                />
                {(filterCollection?.categories || [])
                  .filter((each) =>
                    each
                      .toLowerCase()
                      .includes(filterData.categoryFilter.toLowerCase())
                  )
                  .map((each) => (
                    <Checkbox
                      onChange={onSearch}
                      name="category"
                      key={each}
                      id={each}
                      label={each}
                      checked={filterData.categories.includes(each)}
                      value={each}
                    />
                  ))}
              </section>
            </Collapsible>
            <Collapsible label="Type">
              <section>
                {filterCollection?.types.map((each) => (
                  <Checkbox
                    onChange={onSearch}
                    name="type"
                    key={each}
                    id={each}
                    label={each}
                    value={each}
                  />
                ))}
              </section>
            </Collapsible>
            <Collapsible label="Instructors">
              <section>
                <Checkbox
                  onChange={onSearch}
                  name="allInstructors"
                  id="allInstructors"
                  label="Select All"
                  checked={
                    filterCollection?.instructors?.length ===
                    filterData.instructors.length
                  }
                />
                {filterCollection?.instructors.map((each) => (
                  <Checkbox
                    onChange={onSearch}
                    name="instructor"
                    key={each}
                    id={each}
                    label={each}
                    value={each}
                    checked={filterData.instructors.includes(each)}
                  />
                ))}
              </section>
            </Collapsible>
          </section>
        </div>
      )}
    </aside>
  );
};

export default Filter;
