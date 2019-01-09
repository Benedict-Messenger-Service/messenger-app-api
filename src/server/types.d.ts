import { LoggingServiceConfiguration } from ;
    import { FLoggerCustomOutputFunction } from "../services/LoggingService/types";

interface ServerConfiguration {
    version: string;
    startDate: Date;
    logger: FLoggerCustomOutputFunction
}