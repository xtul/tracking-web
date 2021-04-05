export default function getApiUrl() {
    if (process.env.NODE_ENV !== 'production') {
		return 'https://localhost:5001/api/';
	} else {
		return '/api/';
	}
}
