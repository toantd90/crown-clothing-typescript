import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from 'pages/CategoriesPreview';
import Category from 'pages/Category';

import { useAppDispatch } from 'store/hooks';
import { fetchCategoriesStart } from 'store/category/slice';

const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
