import prisma from '@/lib/prisma';

import { Post, User } from '@prisma/client';

type PostWithAuthor = Post & { author: User | null };

export default async function Page() {
  const data: PostWithAuthor[] = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      {data.map((item: PostWithAuthor) => (
        <div key={item.id}>
          {item.title} by {item.author?.name}
        </div>
      ))}
    </div>
  );
}
