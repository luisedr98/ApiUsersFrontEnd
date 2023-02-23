
/**
 * 
 * @param {Number} page 
 * @returns
 */
export const loadUserByPages = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}