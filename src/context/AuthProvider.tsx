import React, {createContext, useState, useContext} from 'react';

type AuthContextType = {
  userType: 'admin' | 'patient' | null;
  setUserType: (type: 'admin' | 'patient' | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [userType, setUserType] = useState<'admin' | 'patient' | null>(null);

  return (
    <AuthContext.Provider value={{userType, setUserType}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
