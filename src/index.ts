
import prisma  from "./prisma";

(async () => {    
    try {
      console.log(`Hello world`);
      const res = await prisma.author.findFirst();
      console.log(res?.name);
    } catch(err) {    
      console.log(`Error: `, err);
    } 
    process.exit(1);
  })();