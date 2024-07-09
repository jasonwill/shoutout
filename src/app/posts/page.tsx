import prisma from '@/lib/prisma';

export default async function Page() {
  const data = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title} by {item.author?.name}</div>
      ))}
    </div>
  );
}
