import chalk from "chalk";

export const logInfo = (message: string) => {
  console.log(chalk.blue("[INFO]"), chalk.white(message));
};

export const getEnv = (name: string): string => {
  if (!process.env[name]) {
    throw new Error('Env variable "' + name + '" is not set');
  }

  return process.env[name] as string;
};
