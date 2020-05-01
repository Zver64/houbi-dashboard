declare global {

  interface SimpleObject {
    [key:string]: string|number|undefined
  }

  interface RequestSettings {
    [key:string]: string|number|undefined
  }

  interface RequestData {
    AccessKeyId?: string
    SignatureMethod?: string
    SignatureVersion?: number
    [key: string]: string | number | undefined
  }

  interface ApiKey {
    public: string,
    secret: string
  }
  
}

export {}