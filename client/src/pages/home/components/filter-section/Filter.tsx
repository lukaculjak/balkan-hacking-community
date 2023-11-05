import { FilterCategoryButton } from "../../../../ui/Button";
import Logo from "../../../../ui/Logo";
import {
  FilterLayout,
  FilterCategories,
  LogoContainer,
} from "../../style/Filter-styles";

function Filter() {
  return (
    <FilterLayout>
      <FilterCategories>
        <ul>
          <li>
            <FilterCategoryButton variant="primary">
              General
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">Linux</FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">Tools</FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">
              Pen Testing
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">
              Networking
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">
              Certification
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">
              Mobile Hacking
            </FilterCategoryButton>
          </li>
          <li>
            <FilterCategoryButton variant="primary">
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
