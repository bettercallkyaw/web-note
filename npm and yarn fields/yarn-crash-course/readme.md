# Yarn Crash Course

- yarn -v 
- yarn init
- yarn init -y
- yarn config set init-license ISC
- yarn config get init-license
- yarn config remove init-license
- yarn config delete init-license
- yarn check
- yarn import
- yarn licenses list
- yarn pack
- yarn cache list
- yarn cache list --pattern lodash
- yarn cache clean

# Package Install 
- yarn add lodash
- yarn add moment
- yarn install
- yarn add gulp -D
- yarn add nodemon -D


# Remove Package
- yarn remove lodash

# Package Install With Version
- yarn add lodash@4.17.3

# Update Package
- yarn outdated
- yarn upgrade lodash
- yarn upgrade lodash@4.17.4

# Global Install Package
- yarn global add nodemon
- yarn global bin

# Remove Package With Globally
- yarn global remove nodemon

# Packaget Lists
- yarn list depth=0
- yarn list --depth=0
- yarn list --pattern gulp

# Server Running
- yarn run dev