'use client'

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://backend.alphadental.com.np/api/appointments/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api;
