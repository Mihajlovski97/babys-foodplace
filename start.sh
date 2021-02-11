# START PROXY
node services/proxy/index.js &

# START SERVICES
node services/auth/index.js &
node services/recipe/index.js &