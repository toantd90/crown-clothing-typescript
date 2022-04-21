import { selectCategoryMap } from 'store/category/categorySlice';
import { useAppSelector } from 'store/hooks';

import { CategoryPreview } from 'components';

const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(selectCategoryMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
