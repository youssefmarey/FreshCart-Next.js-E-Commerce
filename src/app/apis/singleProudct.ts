"use server"
export default async function getSingleProduct(id:string) {
    const respones = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    const {data} = await respones.json()

    return data
}