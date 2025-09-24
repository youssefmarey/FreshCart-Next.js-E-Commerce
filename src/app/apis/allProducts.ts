export async function  getAllProducts(){
    const baseUrl =
      process.env.NEXTAUTH_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const response = await fetch(
      `${baseUrl}/api/users`,
      {
        next: {
          revalidate: 5000,
        },
      }
    );

  const { data } = await response.json();

  return data;
}