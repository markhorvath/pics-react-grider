import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: {
        Authorization: 'Client-ID a383037090ced1d59dcaa4675e25be88eed855ab60c8b13876bba3ae434d92be'
    }
});

