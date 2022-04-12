export function apiURL() {
  if (process.env.NODE_ENV !== 'production') {
    // For developing
    return 'http://localhost:8881/api';
  }
  return '/api';
}
