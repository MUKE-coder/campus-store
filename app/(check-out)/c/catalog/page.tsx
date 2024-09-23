import { getAllProducts } from '@/actions/products';
import { getData } from '@/lib/getData';
import SearchSideBar from '@/components/front-end/SearchSideBar';
import CatPrdts from '@/components/front-end/CatPrdts';
import RecentlyViewed from '@/components/front-end/RecentlyViewed';
import { Category, ProductTypes } from '@/types';
import { getCategoryBySlug } from '@/actions/categorySlug';

export default async function SearchPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined | any};
}) {
  const searchTerm = searchParams.term ; 


  // Fetch all categories
  const categories: Category[] = await getData('categories');

  let filteredProducts: ProductTypes[] = [];
  let filteredCategories: Category[] = [];
  let categoryData: Category | any = null;

  // Check if the search term matches any category slug
  const matchingCategory = categories.find(category => 
    category.slug.toLowerCase() === searchTerm.toLowerCase()
  );

  if (matchingCategory) {
    // If a matching category is found, fetch its data and products
    categoryData = await getCategoryBySlug(matchingCategory.slug);
    filteredProducts = categoryData.products || [];
    filteredCategories = [categoryData];
  } else {
    // If no matching category, perform a general search
    const allProducts: ProductTypes[] | any = await getAllProducts();
    
    filteredProducts = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filteredCategories = categories.filter(category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const noResults = filteredProducts.length === 0 && filteredCategories.length === 0;

  return (
    <>
      {noResults ? (
        <div className='w-full h-screen flex justify-center items-center '>
          <p className='text-base text-black animate-pulse'>No Results found.</p>
        </div>
      ) : (
        <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[3.2rem] min-h-[100vh]'>
          <div className='w-full min-h-screen flex gap-1 lg:flex-row flex-col mt-5'>
            <div className='shadow-lg w-[20%] lg:block hidden'>
              <SearchSideBar/>
            </div>
            <div className='w-full lg:w-[80%]'>
              {searchTerm && (
                <h2 className='line-clamp-1 text-xs font-semibold'>
                  Results for: "{searchTerm}" {categoryData ? '(Category)' : ''}
                </h2>
              )}
              <CatPrdts products={filteredProducts} />
            </div>
          </div>
          <RecentlyViewed />
        </div>
      )}
    </>
  );
}