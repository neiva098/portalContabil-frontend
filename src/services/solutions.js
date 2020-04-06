import api from './api'

export const getAll = async () => {
    const res = await api.get('/solutions/getAll')

    return res.data
}