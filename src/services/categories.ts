import api from 'src/services/api';
import { Category } from 'src/models/category';
import { plainToClass } from 'class-transformer';

export const getCategories = async () => {
  const response =  await api.get('/api/v1/categories').then(response => {
    const categories = response.data
    const realCategories = plainToClass(Category, categories);
    return realCategories
  }).catch((error) => {
    return {error: error.message}
  });
  return response
}