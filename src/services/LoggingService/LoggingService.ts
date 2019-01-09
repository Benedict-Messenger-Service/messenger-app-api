import { LoggerConfiguration } from "./types";
import { AbstractService } from "../AbstractService/AbstractService";
import { ServiceName } from "../AbstractService/utils";

export class LoggerService extends AbstractService<LoggerConfiguration>{
    constructor(loggerConfiguration: LoggerConfiguration, logger?: Logger) {
        super(ServiceName.LoggingService, "GenericLoggingService", loggerConfiguration);
    }

    
}