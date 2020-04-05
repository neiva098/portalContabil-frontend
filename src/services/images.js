import api from './api'

export const getAllBackGroundImages = async () => {
    const res = await api.get('/images/backGround/getAll')

    return res.data
}