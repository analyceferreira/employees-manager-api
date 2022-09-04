# Company
npx sequelize model:generate --name company --attributes corporate_name:STRING,commercial_name:STRING,email:STRING,cnpj:STRING,phone:STRING,address:STRING

# User
npx sequelize model:generate --name user --attributes name:STRING,email:STRING,password_hash:STRING,cpf:STRING,phone:STRING,address:STRING,id_company:INTEGER,admin_user:BOOLEAN