import { ELogTopic, ELogLevel} from './utils';

export interface ILoggerConfiguration {
    timezone: string;
    showLogTopics: ELogTopic[];
    showLogLevels: ELogLevel[];
}

export type FLoggerCustomOutputFunction = (config: ILoggerConfiguration, topic: ELogTopic, level: ELogLevel, msg: string | object, useColour?: boolean) => void

// export type FLogger