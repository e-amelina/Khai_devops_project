// DB connection
export const SQL_TYPE = 'mysql';
export const SQL_HOST = process.env.SQLHOST || 'localhost';
export const SQL_PORT = Number(process.env.SQLPORT) || 3306;
export const SQL_USER = process.env.SQLUSER;
export const SQL_PASSWORD = process.env.SQLPASSWORD;
export const SQL_DATABASE = process.env.SQLDATABASE;
