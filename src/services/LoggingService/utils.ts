import chalk from 'chalk';

export enum ELogLevel {
    WARN    = 'warn',
    INFO    = 'info',
    DEBUG   = 'debug',
    ERROR   = 'error',
    FATAL   = 'fatal'
}

export enum ELogTopic {
    SERVER       = 'main',
    ENVIRONMENT  = 'env',
    NETWORK      = 'net',
    DATABSE      = 'dbsv',
    IDENTITY     = 'idsv',
    TOKEN        = 'tokn',
    USERCACHE    = 'usrc',
  
    SERVERLOG    = 'svlg',
    ACTION       = 'act',
    PERMISSION   = 'perm',
    GROUP        = 'grp',
  }
  