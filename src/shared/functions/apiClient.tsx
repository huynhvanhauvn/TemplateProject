import axios, {AxiosRequestHeaders} from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const UrlParamater = {
  encode: (data: object) => {
    if (!data || typeof data !== 'object') {
      return '';
    }
    return `?${Object.entries(data)
      .map((entry: any[]) => `${entry[0]}=${entry[1]}`)
      .join('&')}`;
  },
  encode2: (data: object) => {
    if (!data || typeof data !== 'object') {
      return '';
    }
    return `${Object.entries(data)
      .map((entry: any[]) => `${entry[0]}=${entry[1]}`)
      .join('&')}`;
  },
};

export interface HTTPConfigs {
  domain?: string | undefined;
  url: string;
  authorization?: string | undefined;
  headers?: AxiosRequestHeaders | undefined;
  params?: any;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  options?: {
    json?: boolean;
    formData?: boolean;
    formUrlEncoded?: boolean;
    grantType?: boolean;
  };
  id?: number | string | undefined;
}

export const request = (configs: HTTPConfigs) => {
  let header = {
    'Content-type': 'application/x-www-form-urlencoded',
    ...configs.headers,
  };

  if (configs.authorization && configs.authorization.length > 0) {
    headers['Authorization'] = configs.authorization;
  }

  configs.url = configs.domain
    ? `${configs.domain}/${configs.url}`
    : configs.url;

  if (configs.method === 'GET' && configs.params) {
    configs.url += UrlParamater.encode(configs.params);
  }

  if (configs.method === 'DELETE' || configs.method === 'PUT') {
    if (configs.id) {
      configs.url = `${configs.url}/${configs.id}`;
    } else {
      configs.url = configs.url;
    }
  }

  if (
    configs.params &&
    (configs.method === 'POST' ||
      configs.method === 'PUT' ||
      configs.method === 'DELETE')
  ) {
    if (configs.options?.json) {
      configs.params = JSON.stringify(configs.params);
      header['Content-type'] = 'application/json';
    } else if (configs.options?.formData) {
      header['Content-type'] = 'multipart/form-data';
    } else {
      header['Content-type'] = 'application/x-www-form-urlencoded';
      if (configs.options?.grantType) {
        configs.params = UrlParamater.encode2(configs.params);
      } else {
        configs.params = Object.entries(configs.params).reduce(
          (body, entry) => {
            body.push({name: entry[0], data: entry[1]});
            return body;
          },
          [] as any[],
        );
      }
    }
  }

  console.log('log-url: ', configs.url);
  console.log('log-method: ', configs.method);
  console.log('log-header: ', header);
  console.log('log-prams: ', configs.params);

  return configs.method === 'POST' ||
    configs.method === 'PUT' ||
    configs.method === 'DELETE'
    ? axios.request({
        method: configs.method,
        url: configs.url,
        headers: configs.headers,
        params: configs.params,
      })
    : axios.get(configs.url);
};
