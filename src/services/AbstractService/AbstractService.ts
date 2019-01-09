import { FLoggerCustomOutputFunction } from "../LoggingService/types";
import { ServiceName } from "./utils";
import { IService } from "./types";

export class AbstractService<ConfigurationType> implements IService<ConfigurationType>{
    protected serviceName: ServiceName;
    protected config: ConfigurationType;
    protected implementationName: string;

    constructor(serviceName: ServiceName, implementationName: string, config: ConfigurationType ) {
        this.serviceName =  serviceName;
        this.config = config;
        this.implementationName = this.implementationName
    }

    public getServiceName() {
        return this.serviceName;
    }

    public getConfig() {
        return this.config;
    }
}