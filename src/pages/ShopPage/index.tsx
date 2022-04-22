import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from 'pages/CategoriesPreview';
import Category from 'pages/Category';

import { getCategoriesAndDocuments } from 'utils/firebase';

import { useAppDispatch } from 'store/hooks';
import { setCategories } from 'store/category/categorySlice';
import { Category as CategoryType } from 'Category-Types';

const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories as CategoryType[]));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
