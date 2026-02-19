
import React, { useState, useMemo, useEffect } from 'react';
import { CartItem, Product, CartTotals } from './types';
import { MOCK_PRODUCTS } from './constants';
import { CartItemRow } from './components/CartItemRow';
import { OrderSummary } from './components/OrderSummary';
import { EmptyCart } from './components/EmptyCart';
import { UpsellSection } from './components/UpsellSection';

const App: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(
    MOCK_PRODUCTS.map(p => ({ ...p, quantity: 1 }))
  );
  const [discountPercent, setDiscountPercent] = useState(0);

  const totals = useMemo<CartTotals>(() => {
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 150 ? 0 : 15.00;
    const tax = subtotal * 0.08; // 8% dummy tax
    const discount = subtotal * (discountPercent / 100);
    const total = subtotal + shipping + tax - discount;

    return { subtotal, shipping, tax, discount, total };
  }, [items, discountPercent]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleApplyCoupon = (code: string) => {
    if (code.toLowerCase() === 'save20') {
      setDiscountPercent(20);
      alert('Coupon applied! 20% discount added.');
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8">
      {/* Navigation - Minimalist */}
      <nav className="max-w-7xl mx-auto py-8 flex justify-between items-center border-b border-gray-100 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">L</span>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">LUXECART</span>
        </div>
        <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Shop</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Account</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
          <p className="text-gray-500 mt-2 font-medium">You have {items.length} items in your bag</p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="divide-y divide-gray-100">
                {items.map(item => (
                  <CartItemRow 
                    key={item.id} 
                    item={item} 
                    onUpdateQuantity={updateQuantity} 
                    onRemove={removeItem} 
                  />
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button className="text-sm font-bold text-gray-900 flex items-center gap-2 hover:opacity-70 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Continue Shopping
                </button>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 10-6 6H2l6-6Z"/><path d="M2 10 8 4h14l-6 6Z"/><path d="m22 22-1.5-1.5"/><path d="M11 22H2"/><path d="M11 18H2"/><path d="M11 14H2"/><path d="M11 10H2"/><path d="m15 18-3 3 3 3"/></svg>
                  You're only ${(150 - totals.subtotal > 0 ? (150 - totals.subtotal).toFixed(2) : 0)} away from free shipping!
                </div>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-4">
              <OrderSummary totals={totals} onApplyCoupon={handleApplyCoupon} />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}

        {/* Upsell Content */}
        <UpsellSection onAddToCart={addToCart} />
      </main>

      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400 font-medium">© 2024 LuxeCart Inc. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-gray-300 uppercase tracking-widest">
          <a href="#" className="hover:text-gray-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Shipping</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
