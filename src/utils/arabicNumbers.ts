/**
 * Utility functions for Arabic number formatting and localization
 */

// Arabic-Indic digits mapping
const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Convert English digits to Arabic-Indic digits
 */
export const toArabicDigits = (text: string): string => {
  return text.replace(/[0-9]/g, (digit) => arabicDigits[parseInt(digit)]);
};

/**
 * Convert Arabic-Indic digits to English digits
 */
export const toEnglishDigits = (text: string): string => {
  return text.replace(/[٠-٩]/g, (digit) => {
    const index = arabicDigits.indexOf(digit);
    return index !== -1 ? englishDigits[index] : digit;
  });
};

/**
 * Format numbers for Arabic locale with proper separators
 */
export const formatArabicNumber = (num: number, useArabicDigits = true): string => {
  const formatted = new Intl.NumberFormat('ar-SA').format(num);
  return useArabicDigits ? toArabicDigits(formatted) : formatted;
};

/**
 * Format percentage for Arabic locale
 */
export const formatArabicPercentage = (num: number, useArabicDigits = true): string => {
  const formatted = new Intl.NumberFormat('ar-SA', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(num / 100);
  return useArabicDigits ? toArabicDigits(formatted) : formatted;
};

/**
 * Format currency for Saudi Riyal
 */
export const formatSaudiCurrency = (amount: number, useArabicDigits = true): string => {
  const formatted = new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
  return useArabicDigits ? toArabicDigits(formatted) : formatted;
};

/**
 * Format date for Arabic locale
 */
export const formatArabicDate = (date: Date, useArabicDigits = true): string => {
  const formatted = new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
  return useArabicDigits ? toArabicDigits(formatted) : formatted;
};