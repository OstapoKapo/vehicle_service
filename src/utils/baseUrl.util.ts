export const getBaseUrl = (service: 'user' | 'vehicle') => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    if (service === 'user') {
      return process.env.INTERNAL_USER_SERVICE_URL || 'http://localhost:8000/api';
    }
    if (service === 'vehicle') {
      return process.env.INTERNAL_VEHICLE_SERVICE_URL || 'http://localhost:8090/api';
    }
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080/api';
};
