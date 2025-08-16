// lib/utils.ts

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/
 * Combines multiple classes into one string, removing duplicates and merging Tailwind classes.
 * @param classes - An array of class names or conditional expressions.
 * @returns A single string of combined and optimized class names.
 */
export function cn(...classes: Array<string | undefined | false | null>): string {
  return twMerge(clsx(classes));
}

/
 * Formats a currency value to USD, suitable for luxury LRP cosmetics products.
 * @param value - The numeric value to be formatted.
 * @returns The formatted currency string in USD.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
}

/
 * Formats a product description for luxury LRP cosmetics, ensuring elegant presentation.
 * @param description - The raw product description.
 * @returns A formatted and styled product description string.
 */
export function formatProductDescription(description: string): string {
  // Assume some business logic here for formatting
  return description.replace(/(luxury|premium|exclusive)/gi, '<strong>$1</strong>');
}

/
 * A type representing a cosmetic product in the luxury LRP cosmetics brand.
 */
export interface CosmeticProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
}

/
 * Formats a product's price and name for display in a luxury context.
 * @param product - A cosmetic product from luxury LRP cosmetics.
 * @returns An object containing the formatted name and price.
 */
export function formatProductDisplay(product: CosmeticProduct): { displayName: string; displayPrice: string } {
  return {
    displayName: ${product.name} - luxury LRP cosmetics,
    displayPrice: formatCurrency(product.price),
  };
}
