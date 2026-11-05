# Instalacion
´´´
npm i --save@nest.js/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt 
´´´
# Arrancamos Proyecto
´´´´
npm run start:dev
´´´´
# Modules & Resource
´´´´
nest g mo modules/auth
nest g res modules/users
´´´´
# Controllers & services
nest g co modules/auth
nest g s modules/auth