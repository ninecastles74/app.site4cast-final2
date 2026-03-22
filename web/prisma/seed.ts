import { prisma } from "../src/index";

async function main() {
  const organization = await prisma.organization.upsert({
    where: { slug: "demo-builder" },
    update: {},
    create: {
      name: "Demo Builder",
      slug: "demo-builder",
      memberships: {
        create: {
          role: "OWNER",
          user: {
            create: {
              email: "owner@demobuilder.com",
              name: "Demo Owner",
            },
          },
        },
      },
      projects: {
        create: {
          name: "Cambridge Biotech Lab",
          type: "Life Science",
          contractValue: 145000000,
          estimatedDailyBurn: 161000,
          status: "ACTIVE",
        },
      },
    },
    include: {
      projects: true,
    },
  });

  console.log("Seeded organization:", organization.slug);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
