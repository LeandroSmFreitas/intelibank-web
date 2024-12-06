class AuthUtils {
    static AUTH_TOKEN_KEY = 'auth-token';
  
    // Função para configurar o cookie com HttpOnly e as melhores práticas de segurança
    static setToken = (token: string) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'Strict',
        httpOnly: false,
      };
  
      // Define o cookie
      const cookieString = `${AuthUtils.AUTH_TOKEN_KEY}=${token}; path=${cookieOptions.path}; max-age=${cookieOptions.maxAge}; samesite=${cookieOptions.sameSite}`;
      document.cookie = cookieString;
    };

    static getToken = (): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${AuthUtils.AUTH_TOKEN_KEY}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
      return null;
    };
  
    static isAuthenticated = (): boolean => {
      return AuthUtils.getToken() !== null;
    };
  
    static removeToken = () => {
      document.cookie = `${AuthUtils.AUTH_TOKEN_KEY}=; Max-Age=-99999999; path=/;`;
    };
  }
  
  export default AuthUtils;