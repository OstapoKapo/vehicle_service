export const getBaseUrl = (service: 'user' | 'vehicle') => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    if (service === 'user') {
      return process.env.INTERNAL_USER_SERVICE_URL || 'http://user_service_app:3002/api';
    }
    if (service === 'vehicle') {
      return process.env.INTERNAL_VEHICLE_SERVICE_URL || 'http://vehicle_service_app:3003/api';
    }
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || 'https://ostap-user.duckdns.org/api';
};
