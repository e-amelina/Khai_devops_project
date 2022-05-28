module.exports = {
  type: 'mysql',
  host: process.env.SQLHOST || 'localhost',
  port: process.env.SQLPORT || 3306,
  username: process.env.SQLUSER,
  password: process.env.SQLPASSWORD,
  database: process.env.SQLDATABASE,
  migrations: ['src/database/migrations/*.ts'],
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
