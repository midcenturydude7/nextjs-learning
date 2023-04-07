export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) undefined;

  return res.json();
}
