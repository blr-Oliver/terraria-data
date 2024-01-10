export type VaryingValue<T, U extends keyof any> = {
  [key in U]?: T
}

export type VaryingObject<T extends object, U extends keyof any> = {
  [K in keyof T]: VaryingValue<T[K], U>;
}

export type Varying<T, U extends keyof any> =
    T extends Array<infer E> ? VaryingValue<Array<E>, U> :
        T extends Function ? VaryingValue<T, U> :
            T extends object ? VaryingObject<T, U> :
                VaryingValue<T, U>;

export enum Platform {
  pc = 1,
  console = 2,
  oldGen = 3,
  mobile = 4,
  threeDS = 5
}

export type PlatformName = keyof typeof Platform;
export type PlatformList = PlatformName[];

export type PlatformVaryingValue<T> = VaryingValue<T, PlatformName>;
export type PlatformVarying<T> = Varying<T, PlatformName>;