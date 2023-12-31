import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { APIConfig } from './shared/tsdk-helper';
/**
 * Set the AxiosInstance
 *
 * @param instance - AxiosInstance
 */
export declare const setAxiosInstance: (instance: AxiosInstance) => void;
/**
 * Get the AxiosInstance
 *
 * @param instance - AxiosInstance
 * @returns The AxiosInstance
 */
export declare const getAxiosInstance: () => AxiosInstance;
export type RequestConfig<ReqPayload> = Omit<AxiosRequestConfig, 'data'> & {
    data?: ReqPayload;
};
export declare function axiosHandler(apiConfig: APIConfig, requestData: any, requestConfig?: RequestConfig<any>, 
/** remove fields with undefined */
needTrim?: boolean): Promise<any>;
