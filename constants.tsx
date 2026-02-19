
import React from 'react';

export const ICONS = {
  Trash: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
  ),
  Plus: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Minus: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  ChevronRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
  ),
  Shield: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
  ),
};

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Minimalist Ceramic Vase',
    price: 45.00,
    image: 'https://picsum.photos/seed/vase/400/400',
    category: 'Home Decor',
    variant: 'Matte White'
  },
  {
    id: '2',
    name: 'Pure Cotton Linen Bedding',
    price: 189.00,
    image: 'https://picsum.photos/seed/bed/400/400',
    category: 'Bedroom',
    variant: 'Queen / Sand'
  },
  {
    id: '3',
    name: 'Abstract Framed Wall Art',
    price: 120.00,
    image: 'https://picsum.photos/seed/art/400/400',
    category: 'Art',
    variant: 'Black Frame'
  }
];

export const UPSELL_PRODUCTS = [
  {
    id: '101',
    name: 'Scented Soy Candle',
    price: 24.00,
    image: 'https://picsum.photos/seed/candle/400/400',
    category: 'Lifestyle'
  },
  {
    id: '102',
    name: 'Handcrafted Mug',
    price: 18.00,
    image: 'https://picsum.photos/seed/mug/400/400',
    category: 'Kitchen'
  },
  {
    id: '103',
    name: 'Wool Throw Blanket',
    price: 85.00,
    image: 'https://picsum.photos/seed/blanket/400/400',
    category: 'Home Decor'
  }
];
