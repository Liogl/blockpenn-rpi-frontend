export function apiURL() {
  if (process.env.NODE_ENV !== 'production') {
    // For developing
    return 'http://localhost:8000/api';
  }
  return '/api';
}
