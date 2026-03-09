// ===== Request =====
export interface UserPayload {
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
    isPremium: boolean;
    deviceName: string;
    qaSecret: string;
  }
  
  // ===== Response =====
  export interface AuthResponse {
    access_token: string;
    accessToken?: string;
  }