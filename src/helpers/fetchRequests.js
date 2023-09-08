export const URL = "https://fakestoreapi.com"

//GET Products
export async function fetchAllProducts(page) {
    const limit = page * 10
    try {
        const response = await fetch(`${URL}/products?limit=${limit}`);
        const result = response.json();
        return result;
    } catch (error) {
        console.error(`ERROR FETCHING ALL PRODUCTS: ${error}`);
    }
}

//GET Single Product
export async function fetchSingleProduct(id) {
    try {
        const response = await fetch(`${URL}/products/${id}`);
        const result = response.json();
        return result;
    } catch (error) {
        console.error(`ERROR FETCHING ITEM#${id}: ${error}`);
    }
}