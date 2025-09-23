export async function  getAllProducts(){
    const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/users`,
    {
      next: {
        revalidate: 5000,
      },
    }
  );

  const { data } = await response.json();

  return data;
}