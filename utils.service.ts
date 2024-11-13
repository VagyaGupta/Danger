import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  
    constructor() { }
  
    // Example function to validate email format
    isValidEmail(email: string): boolean {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    }
  
    // Function to format currency (e.g., for invoice amounts)
    formatCurrency(amount: number): string {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }
  
    // Function to save data to localStorage
    saveToLocalStorage(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    // Function to get data from localStorage
    getFromLocalStorage(key: string): any {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
    // Function to clear data from localStorage
    clearFromLocalStorage(key: string): void {
      localStorage.removeItem(key);
    }
  
    // Function to generate a random ID (e.g., for invoices or customers)
    generateRandomId(): string {
      return 'INV-' + Math.random().toString(36).substr(2, 9);
    }
  
    // Function to check if the user is authenticated (for route guards)
    isAuthenticated(): boolean {
      return localStorage.getItem('authToken') !== null;
    }
  }
  

