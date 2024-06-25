// composables/useAuth.js
export const useAuth = async () => {
    try {
        const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Language': 'en_US',
                'Authorization': 'Basic ' + btoa('AVb2Cs9Cp7h9p20WJ9RDDb4Xamm0qYjLm3PNYEsHYwu-A9vt-voRtuvCemVvrBBlvjRevxxp0AO8QSJL:EPwpejN9IrPF-08_lgTOQvZgLtie5EiBOzjPS9XB-XZ0zPLVKsfBT6TlPVzjpcQRorlLXqsNr43iLWxo'),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch access token');
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
};

