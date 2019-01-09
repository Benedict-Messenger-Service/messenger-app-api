import { ELogTopic, ELogLevel} from './utils';

export interface LoggerConfiguration {
    timezone: string;
    showLogTopics: ELogTopic[];
    showLogLevels: ELogLevel[];
}

export type FLoggerCustomOutputFunction = (config: LoggerConfiguration, topic: ELogTopic, level: ELogLevel, msg: string | object, useColour?: boolean) => void

export type FLoggerOutputFunction = (msg : string | object) => void;

export interface ILogger {
    
}