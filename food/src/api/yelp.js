import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xG7A-amp9urQQb31vHM5-IB__vYZyTFLNIyT1e0b6pLASLC9M4JAMxC3HDNwnGWysQRK2IZtAmPBMjeVMoETqrJ2oJXPq0yn4a-8epi1fSzqzwmZVndz-Gw-OX6zYXYx'
    }
});