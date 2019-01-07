import { ServerConfigurations } from '../server/types';
import permissionConfigs from './permissionConfigs';
import loggerConfigs from './loggerConfigs';

const config: ServerConfiguration  = {
     version: 'v1.0.0',
     startDate: new Date(),
     logger: loggerConfigs,
     permissions: permissionConfigs
}

export default config