import {config as conf} from 'dotenv';
conf();
const config = {
    port : process.env['PORT'] || 4402,
    mongoUrl : process.env['MONGO_URL'],
    production : process.env['PRODUCTION'],
    jwtSecret : process.env['JWT_SECRET']
};

export default config;