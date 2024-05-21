const UserRouters = require('../Modules/User/routes');
module.exports = {
    configRoute: app => {
        app.use('/user', UserRouters);
    },
};
