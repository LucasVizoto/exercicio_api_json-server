import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const getFilmes = () => api.get(`/filmes`)

export const getFilmeById = (id: string) => api.get(`/filmes/${id}`);

export const updateFilme = (id: string, filme: any) => api.put(`/filmes/${id}`, filme)

export const createFilme = (filme: any) => api.post(`/filmes`, filme);

export const deleteFilme = (id: string) => api.delete(`/filmes/${id}`);