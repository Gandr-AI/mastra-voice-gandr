import { MastraVoice } from '@mastra/core/voice';
type GandrVoiceId = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' | 'ash' | 'coral' | 'sage' | 'gandr-mia' | 'gandr-nova';
export interface GandrConfig {
    name?: string;
    apiKey?: string;
    baseURL?: string;
}
export interface GandrVoiceConfig {
    speech?: GandrConfig;
    speaker?: GandrVoiceId;
}
export declare class GandrVoice extends MastraVoice {
    speechApiKey?: string;
    speechBaseURL: string;
    constructor({ speechModel, speaker }?: {
        speechModel?: GandrConfig;
        speaker?: string;
    });
    getSpeakers(): Promise<Array<{
        voiceId: GandrVoiceId;
    }>>;
    speak(input: string | NodeJS.ReadableStream, options?: {
        speaker?: string;
        speed?: number;
        [key: string]: any;
    }): Promise<NodeJS.ReadableStream>;
    getListener(): Promise<{
        enabled: boolean;
    }>;
    listen(): Promise<string>;
}
export {};
