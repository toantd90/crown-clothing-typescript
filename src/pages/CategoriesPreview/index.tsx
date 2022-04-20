import { useContext } from 'react';

import { CategoryPreview } from 'components';
import { CategoriesContext } from 'contexts/categories';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => (
        <CategoryPreview title={title} products={categoriesMap[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
