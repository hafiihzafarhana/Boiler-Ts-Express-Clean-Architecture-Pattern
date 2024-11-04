/**
 * Global types berfungsi untuk menempatkan sebuah tipe data, enum yang bisa digunakan
 * secara global
 */
export interface PaginatedResponse<T> {
  items: T[]; // Daftar item
  totalItems: number; // Jumlah total item
  currentPage: number; // Halaman saat ini
  totalPages: number; // Total halaman
  pageSize: number; // Jumlah item per halaman
}

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Completed = 'COMPLETED',
  Canceled = 'CANCELED'
}

export interface KeyValue<T> {
  [key: string]: T;
}
