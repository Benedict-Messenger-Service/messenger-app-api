import { ServiceName } from "./utils";

export interface IService<ConfigurationType> {
    getServiceName(): ServiceName;
    getConfig(): ConfigurationType;
}