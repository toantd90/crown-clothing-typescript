import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from 'pages/CategoriesPreview';
import Category from 'pages/Category';

import { getCategoriesAndDocuments } from 'utils/firebase';

import { useAppDispatch } from 'store/hooks';
import { setCategoriesMap } from 'store/category/categorySlice';

const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
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
