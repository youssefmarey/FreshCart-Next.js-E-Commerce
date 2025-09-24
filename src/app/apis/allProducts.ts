export async function  getAllProducts(){
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products",
      {
        next: {
          revalidate: 5000,
        },
      }
    );

  const { data } = await response.json();

  return data;
}