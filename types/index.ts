// types/index.ts

import { ReactNode } from 'react';

/
 * Represents a product in the luxury LRP cosmetics line.
 */
export interface Product {
  / Unique identifier for the product */
  id: string;
  / Name of the product */
  name: string;
  / Description of the product */
  description: string;
  / Price of the product in USD */
  price: number;
  / URL to the product image */
  imageUrl: string;
  / Categories the product belongs to */
  categories: Category[];
  / Indicates if the product is a best-seller */
  isBestSeller: boolean;
}

/
 * Represents a category of products.
 */
export interface Category {
  / Unique identifier for the category */
  id: string;
  / Name of the category */
  name: string;
}

/
 * Represents a customer of luxury LRP cosmetics.
 */
export interface Customer {
  / Unique identifier for the customer */
  id: string;
  / Full name of the customer */
  name: string;
  / Email address of the customer */
  email: string;
  / List of product IDs the customer has purchased */
  purchasedProductIds: string[];
}

/
 * Represents a review left by a customer for a product.
 */
export interface Review {
  / Unique identifier for the review */
  id: string;
  / Rating given by the customer (1 to 5) */
  rating: number;
  / Comment provided by the customer */
  comment: string;
  / The ID of the product being reviewed */
  productId: string;
  / The ID of the customer who left the review */
  customerId: string;
}

/
 * Props for a component in the luxury LRP cosmetics website.
 */
export interface ComponentProps {
  / Content or child elements of the component */
  children?: ReactNode;
  / Additional class names for styling */
  className?: string;
}

/
 * Represents a 3D model used in the luxury LRP cosmetics website.
 */
export interface ThreeDModel {
  / Unique identifier for the 3D model */
  id: string;
  / Name of the 3D model */
  name: string;
  / URL to the 3D model file */
  modelUrl: string;
  / Description of the 3D model */
  description: string;
  / Tags associated with the 3D model */
  tags: string[];
}

export type { Product, Category, Customer, Review, ComponentProps, ThreeDModel };
