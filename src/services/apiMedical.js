const API_URL = 'https://react-fast-pizza-api.onrender.com/api/menu';

export async function getMedical() {
    const res = await fetch(`${API_URL}`);

    if (!res.ok) throw Error('Failed getting menu');

    const { data } = await res.json();
    return data;
}