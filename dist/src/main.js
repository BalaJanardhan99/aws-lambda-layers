"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const aws_serverless_express_1 = require("aws-serverless-express");
let expressApp;
async function bootstrap() {
    expressApp = await core_1.NestFactory.create(app_module_1.AppModule);
    await expressApp.init();
}
bootstrap();
const handler = (event, context) => {
    if (!expressApp) {
        bootstrap().then(() => {
            const server = (0, aws_serverless_express_1.createServer)(expressApp.getHttpAdapter().getInstance());
            (0, aws_serverless_express_1.proxy)(server, event, context);
        });
    }
    else {
        const server = (0, aws_serverless_express_1.createServer)(expressApp.getHttpAdapter().getInstance());
        (0, aws_serverless_express_1.proxy)(server, event, context);
    }
};
exports.handler = handler;
//# sourceMappingURL=main.js.map