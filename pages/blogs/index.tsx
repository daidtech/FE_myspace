import Blog from 'src/components/Blog/Blog';
import { BlogTypes } from 'src/models/blog';
import { useEffect, useState } from 'react';
import { getCategories } from 'src/services/categories';
import { Category } from 'src/models/category';

export default function Index() {
  const [categories, setCategories] = useState<Category[]>()

  const fetchData = async () => {
    try {
      const categories = await getCategories()
      // setCategories(categories)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Blog type={BlogTypes.Index} />
  )
}