import { useAppSelector } from 'store/hooks';
import {
  selectCategoryMap,
  selectIsLoading,
} from 'store/category/categorySlice';

import { CategoryPreview, Spinner } from 'components';

const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(selectCategoryMap);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(categoriesMap).map((title: string) => (
            <CategoryPreview
              key={title}
              title={title}
              products={categoriesMap[title]}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CategoriesPreview;
