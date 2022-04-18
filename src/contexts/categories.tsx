import React, { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from 'utils/firebase';

import { CategoryMap } from 'Category-Types';

const useValue = () => {
  const [categoriesMap, setCategoriesMap] = useState<CategoryMap>({});

  return { categoriesMap, setCategoriesMap };
};

export const CategoriesContext = createContext({
  categoriesMap: {} as CategoryMap,
} as ReturnType<typeof useValue>);

export const CategoriesProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { categoriesMap, setCategoriesMap } = useValue();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
