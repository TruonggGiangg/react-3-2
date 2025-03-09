export async function getProducts(skip, limit) {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data; // Trả về dữ liệu
}

export async function getUserAvatar() {
    const response = await fetch('https://dummyjson.com/users?limit=1&skip=5&select=image');
    const data = await response.json();
    return data; // Trả về dữ liệu
}