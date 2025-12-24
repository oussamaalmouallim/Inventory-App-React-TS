import { FormErrors } from '../types';

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateProductForm = (data: {
  sku: string;
  name: string;
  category: string;
  price: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!data.sku.trim()) errors.sku = 'SKU requis';
  if (!data.name.trim()) errors.name = 'Nom requis';
  if (!data.category.trim()) errors.category = 'Catégorie requise';
  if (!data.price.trim()) errors.price = 'Prix requis';
  else if (isNaN(Number(data.price)) || Number(data.price) < 0) {
    errors.price = 'Prix invalide';
  }

  return errors;
};

export const validateCategoryForm = (data: {
  name: string;
  description: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = 'Nom requis';
  if (!data.description.trim()) errors.description = 'Description requise';

  return errors;
};

export const validateUserForm = (data: {
  name: string;
  email: string;
  role: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = 'Nom requis';
  if (!data.email.trim()) errors.email = 'Email requis';
  else if (!validateEmail(data.email)) errors.email = 'Email invalide';
  if (!data.role.trim()) errors.role = 'Rôle requis';

  return errors;
};