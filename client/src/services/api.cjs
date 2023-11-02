class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    fetchData = async (endpoint, options) => {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    };

    get = async (endpoint) => {
        return this.fetchData(endpoint, {
            method: 'GET',
        });
    };

    post = async (endpoint, data) => {
        return this.fetchData(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

}

export default ApiService;
