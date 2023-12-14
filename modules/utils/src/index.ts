import chalk from "chalk";

export const logDetails = (details?: any, prefix: string = "") => {
  if (details) {
    console.log(prefix + chalk.gray("[→]"), details);
  }
};

export const logInfo = (message?: any, ...details: any) => {
  console.log(chalk.blue("[INF]"), chalk.white(message));

  for (let i = 0; i < details.length; i++) {
    logDetails(details[i], "  ");
  }
};

export const logSuccess = (message?: any, details?: any) => {
  console.log(chalk.green("[SCS]"), chalk.white(message));

  logDetails(details, "  ");
};

export const logWarning = (message?: any, ...details: any) => {
  console.log(chalk.yellow("[WRN]"), chalk.white(message));

  for (let i = 0; i < details.length; i++) {
    logDetails(details[i], "  ");
  }
};

export const logError = (message?: any, details?: any) => {
  console.log(chalk.red("[ERR]"), chalk.white(message));

  logDetails(details, "  ");
};

export const getEnv = (name: string): string => {
  if (!process.env[name]) {
    throw new Error('Env variable "' + name + '" is not set');
  }

  return process.env[name] as string;
};

export const isProduction = (): boolean => {
  return process.env["NODE_ENV"] === "production";
};
