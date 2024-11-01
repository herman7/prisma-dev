import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Mac",
  //     email: "mac365@gmail.com",
  //   },
  // });
  // console.log(user);

  // const users = await prisma.user.findMany()
  // console.log(users)

  // const posts = await prisma.post.findMany()
  // console.log(posts)

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true
    }
  })

  console.dir(usersWithPosts, { depth: null })

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bob@prisma.io",
  //     posts: {
  //       create: [
  //         {
  //           title: "Hello world",
  //           published: true,
  //         },
  //         {
  //           title: "My second post",
  //           content: "This is still a draft",
  //         },
  //       ],
  //     },
  //   },
  // });
  // console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
