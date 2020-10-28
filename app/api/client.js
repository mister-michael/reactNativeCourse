import { create } from 'apisauce';

const apiClient = create({
    baseURL:`http://192.168.1.69/api`
});

apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem
    }
})