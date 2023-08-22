import mongoose from "mongoose";
import chalk from "chalk";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  console.log(
    chalk.green.bold("Tentando estabelecer conexão com MongoDB Atlas...\n")
  );

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(chalk.green.bold("Conexão estabelecida com sucesso!\n"));
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}
