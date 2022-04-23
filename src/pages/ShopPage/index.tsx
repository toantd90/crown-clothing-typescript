import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from 'pages/CategoriesPreview';
import Category from 'pages/Category';

import { useAppDispatch } from 'store/hooks';
import { fetchCategoriesAsync } from 'store/category/categorySlice';

const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
