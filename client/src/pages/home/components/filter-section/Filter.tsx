import { FilterCategoryButton } from "../../../../ui/Button";
import Logo from "../../../../ui/Logo";
import {
  FilterLayout,
  FilterCategories,
  LogoContainer,
} from "../../style/Filter-styles";

function Filter({ setFilter }) {
  const handleFilterClick = (category: string) => {
    setFilter((prevFilter) => (prevFilter === category ? "" : category));
  };

  return (
    <FilterLayout>
      <FilterCategories>
        <ul>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("General")}
            >
              General
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Linux")}
            >
              Linux
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Tools")}
            >
              Tools
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Pen Testing")}
            >
              Pen Testing
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Networking")}
            >
              Networking
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Certification")}
            >
              Certification
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Mobile Hacking")}
            >
              Mobile Hacking
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton
              variant="primary"
              onClick={() => handleFilterClick("Studying Material")}
            >
              Studying Material
            </FilterCategoryButton>
          </li>
        </ul>
      </FilterCategories>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </FilterLayout>
  );
}

export default Filter;
