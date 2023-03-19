/* tslint:disable */
/* eslint-disable */
/**
 * alex-api
 * HTTP server in Go with Swagger endpoints definition. An API for all my hobbies.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: alexnou@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ComputedRecipe
 */
export interface ComputedRecipe {
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipe
     */
    'outputItem': string;
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipe
     */
    'facility': string;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'numFacilitiesNeeded': number;
    /**
     * 
     * @type {object}
     * @memberof ComputedRecipe
     */
    'itemsConsumedPerSec': object;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'secondsSpentPerCraft': number;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'craftingPerSecond'?: number;
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipe
     */
    'usedFor': string;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'depth'?: number;
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipe
     */
    'action'?: string;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'quantityProduced'?: number;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipe
     */
    'timeToProduce'?: number;
    /**
     * 
     * @type {MarketData}
     * @memberof ComputedRecipe
     */
    'marketData'?: MarketData;
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipe
     */
    'image'?: string;
}
/**
 * 
 * @export
 * @interface ComputedRecipeRequest
 */
export interface ComputedRecipeRequest {
    /**
     * 
     * @type {string}
     * @memberof ComputedRecipeRequest
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof ComputedRecipeRequest
     */
    'rate': number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ComputedRecipeRequest
     */
    'requirements'?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface MarketData
 */
export interface MarketData {
    /**
     * 
     * @type {string}
     * @memberof MarketData
     */
    'marketDataID'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarketData
     */
    'lastUpdateAttempt'?: number;
    /**
     * 
     * @type {number}
     * @memberof MarketData
     */
    'lastUpdated'?: number;
    /**
     * 
     * @type {number}
     * @memberof MarketData
     */
    'price'?: number;
    /**
     * 
     * @type {number}
     * @memberof MarketData
     */
    'quantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof MarketData
     */
    'totalTradeCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof MarketData
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'outputItem': string;
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    'outputItemCount': number;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'facility': string;
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    'time': number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Recipe
     */
    'materials': { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'image'?: string;
}
/**
 * 
 * @export
 * @interface TwitterMedia
 */
export interface TwitterMedia {
    /**
     * 
     * @type {string}
     * @memberof TwitterMedia
     */
    'author': string;
    /**
     * 
     * @type {string}
     * @memberof TwitterMedia
     */
    'tweetId': string;
    /**
     * 
     * @type {string}
     * @memberof TwitterMedia
     */
    'url': string;
    /**
     * 
     * @type {number}
     * @memberof TwitterMedia
     */
    'width': number;
    /**
     * 
     * @type {number}
     * @memberof TwitterMedia
     */
    'height': number;
    /**
     * 
     * @type {boolean}
     * @memberof TwitterMedia
     */
    'possiblySensitive': boolean;
    /**
     * 
     * @type {string}
     * @memberof TwitterMedia
     */
    'created_at': string;
}

/**
 * BlackDesertOnlineApi - axios parameter creator
 * @export
 */
export const BlackDesertOnlineApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBDOComputedRecipe: async (recipeRequest?: Array<ComputedRecipeRequest>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/bdo/computedRecipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all BDO recipes
         * @summary Get all BDO recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBDORecipes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/bdo/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BlackDesertOnlineApi - functional programming interface
 * @export
 */
export const BlackDesertOnlineApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlackDesertOnlineApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBDOComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ComputedRecipe>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBDOComputedRecipe(recipeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all BDO recipes
         * @summary Get all BDO recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBDORecipes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Array<Recipe>>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBDORecipes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BlackDesertOnlineApi - factory interface
 * @export
 */
export const BlackDesertOnlineApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlackDesertOnlineApiFp(configuration)
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBDOComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: any): AxiosPromise<Array<ComputedRecipe>> {
            return localVarFp.getBDOComputedRecipe(recipeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all BDO recipes
         * @summary Get all BDO recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBDORecipes(options?: any): AxiosPromise<Array<Array<Recipe>>> {
            return localVarFp.getBDORecipes(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlackDesertOnlineApi - object-oriented interface
 * @export
 * @class BlackDesertOnlineApi
 * @extends {BaseAPI}
 */
export class BlackDesertOnlineApi extends BaseAPI {
    /**
     * Get the computed recipe
     * @summary Get the computed recipe
     * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlackDesertOnlineApi
     */
    public getBDOComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: AxiosRequestConfig) {
        return BlackDesertOnlineApiFp(this.configuration).getBDOComputedRecipe(recipeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all BDO recipes
     * @summary Get all BDO recipes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlackDesertOnlineApi
     */
    public getBDORecipes(options?: AxiosRequestConfig) {
        return BlackDesertOnlineApiFp(this.configuration).getBDORecipes(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DysonSphereProgramApi - axios parameter creator
 * @export
 */
export const DysonSphereProgramApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDSPComputedRecipe: async (recipeRequest?: Array<ComputedRecipeRequest>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/dsp/computedRecipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all DSP recipes
         * @summary Get all DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDSPRecipes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/dsp/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Re-scrapes the DSP recipes
         * @summary Re-scrapes the DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reloadDSPRecipes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/dsp/recipes/reload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DysonSphereProgramApi - functional programming interface
 * @export
 */
export const DysonSphereProgramApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DysonSphereProgramApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDSPComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ComputedRecipe>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDSPComputedRecipe(recipeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all DSP recipes
         * @summary Get all DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDSPRecipes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Array<Recipe>>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDSPRecipes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Re-scrapes the DSP recipes
         * @summary Re-scrapes the DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reloadDSPRecipes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reloadDSPRecipes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DysonSphereProgramApi - factory interface
 * @export
 */
export const DysonSphereProgramApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DysonSphereProgramApiFp(configuration)
    return {
        /**
         * Get the computed recipe
         * @summary Get the computed recipe
         * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDSPComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: any): AxiosPromise<Array<ComputedRecipe>> {
            return localVarFp.getDSPComputedRecipe(recipeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all DSP recipes
         * @summary Get all DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDSPRecipes(options?: any): AxiosPromise<Array<Array<Recipe>>> {
            return localVarFp.getDSPRecipes(options).then((request) => request(axios, basePath));
        },
        /**
         * Re-scrapes the DSP recipes
         * @summary Re-scrapes the DSP recipes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reloadDSPRecipes(options?: any): AxiosPromise<string> {
            return localVarFp.reloadDSPRecipes(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DysonSphereProgramApi - object-oriented interface
 * @export
 * @class DysonSphereProgramApi
 * @extends {BaseAPI}
 */
export class DysonSphereProgramApi extends BaseAPI {
    /**
     * Get the computed recipe
     * @summary Get the computed recipe
     * @param {Array<ComputedRecipeRequest>} [recipeRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DysonSphereProgramApi
     */
    public getDSPComputedRecipe(recipeRequest?: Array<ComputedRecipeRequest>, options?: AxiosRequestConfig) {
        return DysonSphereProgramApiFp(this.configuration).getDSPComputedRecipe(recipeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all DSP recipes
     * @summary Get all DSP recipes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DysonSphereProgramApi
     */
    public getDSPRecipes(options?: AxiosRequestConfig) {
        return DysonSphereProgramApiFp(this.configuration).getDSPRecipes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Re-scrapes the DSP recipes
     * @summary Re-scrapes the DSP recipes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DysonSphereProgramApi
     */
    public reloadDSPRecipes(options?: AxiosRequestConfig) {
        return DysonSphereProgramApiFp(this.configuration).reloadDSPRecipes(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TwitterApi - axios parameter creator
 * @export
 */
export const TwitterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get inART
         * @summary Get inART
         * @param {number} page Numeric ID of the page to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInArt: async (page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getInArt', 'page', page)
            const localVarPath = `/twitter/inArt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TwitterApi - functional programming interface
 * @export
 */
export const TwitterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TwitterApiAxiosParamCreator(configuration)
    return {
        /**
         * Get inART
         * @summary Get inART
         * @param {number} page Numeric ID of the page to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInArt(page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TwitterMedia>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInArt(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TwitterApi - factory interface
 * @export
 */
export const TwitterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TwitterApiFp(configuration)
    return {
        /**
         * Get inART
         * @summary Get inART
         * @param {number} page Numeric ID of the page to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInArt(page: number, options?: any): AxiosPromise<Array<TwitterMedia>> {
            return localVarFp.getInArt(page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TwitterApi - object-oriented interface
 * @export
 * @class TwitterApi
 * @extends {BaseAPI}
 */
export class TwitterApi extends BaseAPI {
    /**
     * Get inART
     * @summary Get inART
     * @param {number} page Numeric ID of the page to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwitterApi
     */
    public getInArt(page: number, options?: AxiosRequestConfig) {
        return TwitterApiFp(this.configuration).getInArt(page, options).then((request) => request(this.axios, this.basePath));
    }
}


