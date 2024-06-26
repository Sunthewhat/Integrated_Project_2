
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model certificate
 * 
 */
export type certificate = $Result.DefaultSelection<Prisma.$certificatePayload>
/**
 * Model trader
 * 
 */
export type trader = $Result.DefaultSelection<Prisma.$traderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.certificateDelegate<ExtArgs>;

  /**
   * `prisma.trader`: Exposes CRUD operations for the **trader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traders
    * const traders = await prisma.trader.findMany()
    * ```
    */
  get trader(): Prisma.traderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    certificate: 'certificate',
    trader: 'trader'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'certificate' | 'trader'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      certificate: {
        payload: Prisma.$certificatePayload<ExtArgs>
        fields: Prisma.certificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.certificateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.certificateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          findFirst: {
            args: Prisma.certificateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.certificateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          findMany: {
            args: Prisma.certificateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>[]
          }
          create: {
            args: Prisma.certificateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          createMany: {
            args: Prisma.certificateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.certificateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          update: {
            args: Prisma.certificateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          deleteMany: {
            args: Prisma.certificateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.certificateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.certificateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.certificateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.certificateCountArgs<ExtArgs>,
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      trader: {
        payload: Prisma.$traderPayload<ExtArgs>
        fields: Prisma.traderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.traderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.traderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          findFirst: {
            args: Prisma.traderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.traderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          findMany: {
            args: Prisma.traderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>[]
          }
          create: {
            args: Prisma.traderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          createMany: {
            args: Prisma.traderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.traderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          update: {
            args: Prisma.traderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          deleteMany: {
            args: Prisma.traderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.traderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.traderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$traderPayload>
          }
          aggregate: {
            args: Prisma.TraderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrader>
          }
          groupBy: {
            args: Prisma.traderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TraderGroupByOutputType>[]
          }
          count: {
            args: Prisma.traderCountArgs<ExtArgs>,
            result: $Utils.Optional<TraderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    certificate: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | UserCountOutputTypeCountCertificateArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificateWhereInput
  }


  /**
   * Count Type TraderCountOutputType
   */

  export type TraderCountOutputType = {
    certificate: number
  }

  export type TraderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | TraderCountOutputTypeCountCertificateArgs
  }

  // Custom InputTypes
  /**
   * TraderCountOutputType without action
   */
  export type TraderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderCountOutputType
     */
    select?: TraderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TraderCountOutputType without action
   */
  export type TraderCountOutputTypeCountCertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    nameTitle: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    company: string | null
    expectedMonthly: string | null
    profileImage: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    nameTitle: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    company: string | null
    expectedMonthly: string | null
    profileImage: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    nameTitle: number
    firstname: number
    lastname: number
    email: number
    company: number
    expectedMonthly: number
    profileImage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    nameTitle?: true
    firstname?: true
    lastname?: true
    email?: true
    company?: true
    expectedMonthly?: true
    profileImage?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    nameTitle?: true
    firstname?: true
    lastname?: true
    email?: true
    company?: true
    expectedMonthly?: true
    profileImage?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    nameTitle?: true
    firstname?: true
    lastname?: true
    email?: true
    company?: true
    expectedMonthly?: true
    profileImage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    username: string
    password: string
    nameTitle: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    company: string | null
    expectedMonthly: string | null
    profileImage: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    password?: boolean
    nameTitle?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    company?: boolean
    expectedMonthly?: boolean
    profileImage?: boolean
    certificate?: boolean | user$certificateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type userSelectScalar = {
    userId?: boolean
    username?: boolean
    password?: boolean
    nameTitle?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    company?: boolean
    expectedMonthly?: boolean
    profileImage?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | user$certificateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      certificate: Prisma.$certificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      password: string
      nameTitle: string | null
      firstname: string | null
      lastname: string | null
      email: string | null
      company: string | null
      expectedMonthly: string | null
      profileImage: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    certificate<T extends user$certificateArgs<ExtArgs> = {}>(args?: Subset<T, user$certificateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly userId: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly nameTitle: FieldRef<"user", 'String'>
    readonly firstname: FieldRef<"user", 'String'>
    readonly lastname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly company: FieldRef<"user", 'String'>
    readonly expectedMonthly: FieldRef<"user", 'String'>
    readonly profileImage: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.certificate
   */
  export type user$certificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    where?: certificateWhereInput
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    cursor?: certificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    userId: number | null
    traderId: number | null
  }

  export type CertificateSumAggregateOutputType = {
    userId: number | null
    traderId: number | null
  }

  export type CertificateMinAggregateOutputType = {
    certificateId: string | null
    userId: number | null
    traderId: number | null
    date: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    certificateId: string | null
    userId: number | null
    traderId: number | null
    date: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    certificateId: number
    userId: number
    traderId: number
    date: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    userId?: true
    traderId?: true
  }

  export type CertificateSumAggregateInputType = {
    userId?: true
    traderId?: true
  }

  export type CertificateMinAggregateInputType = {
    certificateId?: true
    userId?: true
    traderId?: true
    date?: true
  }

  export type CertificateMaxAggregateInputType = {
    certificateId?: true
    userId?: true
    traderId?: true
    date?: true
  }

  export type CertificateCountAggregateInputType = {
    certificateId?: true
    userId?: true
    traderId?: true
    date?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificate to aggregate.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type certificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificateWhereInput
    orderBy?: certificateOrderByWithAggregationInput | certificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: certificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    certificateId: string
    userId: number
    traderId: number
    date: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends certificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type certificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    certificateId?: boolean
    userId?: boolean
    traderId?: boolean
    date?: boolean
    userCertificate?: boolean | userDefaultArgs<ExtArgs>
    traderCertificate?: boolean | traderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>


  export type certificateSelectScalar = {
    certificateId?: boolean
    userId?: boolean
    traderId?: boolean
    date?: boolean
  }

  export type certificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCertificate?: boolean | userDefaultArgs<ExtArgs>
    traderCertificate?: boolean | traderDefaultArgs<ExtArgs>
  }

  export type $certificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "certificate"
    objects: {
      userCertificate: Prisma.$userPayload<ExtArgs>
      traderCertificate: Prisma.$traderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      certificateId: string
      userId: number
      traderId: number
      date: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type certificateGetPayload<S extends boolean | null | undefined | certificateDefaultArgs> = $Result.GetResult<Prisma.$certificatePayload, S>

  type certificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<certificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface certificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['certificate'], meta: { name: 'certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {certificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends certificateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, certificateFindUniqueArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {certificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends certificateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends certificateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateFindFirstArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends certificateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `certificateId`
     * const certificateWithCertificateIdOnly = await prisma.certificate.findMany({ select: { certificateId: true } })
     * 
    **/
    findMany<T extends certificateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Certificate.
     * @param {certificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
    **/
    create<T extends certificateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, certificateCreateArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Certificates.
     * @param {certificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends certificateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificate.
     * @param {certificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
    **/
    delete<T extends certificateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, certificateDeleteArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Certificate.
     * @param {certificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends certificateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, certificateUpdateArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Certificates.
     * @param {certificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends certificateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, certificateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends certificateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, certificateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {certificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
    **/
    upsert<T extends certificateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, certificateUpsertArgs<ExtArgs>>
    ): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends certificateCountArgs>(
      args?: Subset<T, certificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends certificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: certificateGroupByArgs['orderBy'] }
        : { orderBy?: certificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, certificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the certificate model
   */
  readonly fields: certificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__certificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userCertificate<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    traderCertificate<T extends traderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, traderDefaultArgs<ExtArgs>>): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the certificate model
   */ 
  interface certificateFieldRefs {
    readonly certificateId: FieldRef<"certificate", 'String'>
    readonly userId: FieldRef<"certificate", 'Int'>
    readonly traderId: FieldRef<"certificate", 'Int'>
    readonly date: FieldRef<"certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * certificate findUnique
   */
  export type certificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate findUniqueOrThrow
   */
  export type certificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate findFirst
   */
  export type certificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate findFirstOrThrow
   */
  export type certificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate findMany
   */
  export type certificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter, which certificates to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate create
   */
  export type certificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * The data needed to create a certificate.
     */
    data: XOR<certificateCreateInput, certificateUncheckedCreateInput>
  }

  /**
   * certificate createMany
   */
  export type certificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many certificates.
     */
    data: certificateCreateManyInput | certificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * certificate update
   */
  export type certificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * The data needed to update a certificate.
     */
    data: XOR<certificateUpdateInput, certificateUncheckedUpdateInput>
    /**
     * Choose, which certificate to update.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate updateMany
   */
  export type certificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update certificates.
     */
    data: XOR<certificateUpdateManyMutationInput, certificateUncheckedUpdateManyInput>
    /**
     * Filter which certificates to update
     */
    where?: certificateWhereInput
  }

  /**
   * certificate upsert
   */
  export type certificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * The filter to search for the certificate to update in case it exists.
     */
    where: certificateWhereUniqueInput
    /**
     * In case the certificate found by the `where` argument doesn't exist, create a new certificate with this data.
     */
    create: XOR<certificateCreateInput, certificateUncheckedCreateInput>
    /**
     * In case the certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<certificateUpdateInput, certificateUncheckedUpdateInput>
  }

  /**
   * certificate delete
   */
  export type certificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    /**
     * Filter which certificate to delete.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate deleteMany
   */
  export type certificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificates to delete
     */
    where?: certificateWhereInput
  }

  /**
   * certificate without action
   */
  export type certificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
  }


  /**
   * Model trader
   */

  export type AggregateTrader = {
    _count: TraderCountAggregateOutputType | null
    _avg: TraderAvgAggregateOutputType | null
    _sum: TraderSumAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  export type TraderAvgAggregateOutputType = {
    traderId: number | null
    amount: number | null
  }

  export type TraderSumAggregateOutputType = {
    traderId: number | null
    amount: number | null
  }

  export type TraderMinAggregateOutputType = {
    traderId: number | null
    companyName: string | null
    amount: number | null
    available: boolean | null
  }

  export type TraderMaxAggregateOutputType = {
    traderId: number | null
    companyName: string | null
    amount: number | null
    available: boolean | null
  }

  export type TraderCountAggregateOutputType = {
    traderId: number
    companyName: number
    amount: number
    available: number
    _all: number
  }


  export type TraderAvgAggregateInputType = {
    traderId?: true
    amount?: true
  }

  export type TraderSumAggregateInputType = {
    traderId?: true
    amount?: true
  }

  export type TraderMinAggregateInputType = {
    traderId?: true
    companyName?: true
    amount?: true
    available?: true
  }

  export type TraderMaxAggregateInputType = {
    traderId?: true
    companyName?: true
    amount?: true
    available?: true
  }

  export type TraderCountAggregateInputType = {
    traderId?: true
    companyName?: true
    amount?: true
    available?: true
    _all?: true
  }

  export type TraderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trader to aggregate.
     */
    where?: traderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traders to fetch.
     */
    orderBy?: traderOrderByWithRelationInput | traderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: traderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned traders
    **/
    _count?: true | TraderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraderMaxAggregateInputType
  }

  export type GetTraderAggregateType<T extends TraderAggregateArgs> = {
        [P in keyof T & keyof AggregateTrader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrader[P]>
      : GetScalarType<T[P], AggregateTrader[P]>
  }




  export type traderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: traderWhereInput
    orderBy?: traderOrderByWithAggregationInput | traderOrderByWithAggregationInput[]
    by: TraderScalarFieldEnum[] | TraderScalarFieldEnum
    having?: traderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraderCountAggregateInputType | true
    _avg?: TraderAvgAggregateInputType
    _sum?: TraderSumAggregateInputType
    _min?: TraderMinAggregateInputType
    _max?: TraderMaxAggregateInputType
  }

  export type TraderGroupByOutputType = {
    traderId: number
    companyName: string
    amount: number
    available: boolean
    _count: TraderCountAggregateOutputType | null
    _avg: TraderAvgAggregateOutputType | null
    _sum: TraderSumAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  type GetTraderGroupByPayload<T extends traderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraderGroupByOutputType[P]>
            : GetScalarType<T[P], TraderGroupByOutputType[P]>
        }
      >
    >


  export type traderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    traderId?: boolean
    companyName?: boolean
    amount?: boolean
    available?: boolean
    certificate?: boolean | trader$certificateArgs<ExtArgs>
    _count?: boolean | TraderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trader"]>


  export type traderSelectScalar = {
    traderId?: boolean
    companyName?: boolean
    amount?: boolean
    available?: boolean
  }

  export type traderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | trader$certificateArgs<ExtArgs>
    _count?: boolean | TraderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $traderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trader"
    objects: {
      certificate: Prisma.$certificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      traderId: number
      companyName: string
      amount: number
      available: boolean
    }, ExtArgs["result"]["trader"]>
    composites: {}
  }

  type traderGetPayload<S extends boolean | null | undefined | traderDefaultArgs> = $Result.GetResult<Prisma.$traderPayload, S>

  type traderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<traderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TraderCountAggregateInputType | true
    }

  export interface traderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trader'], meta: { name: 'trader' } }
    /**
     * Find zero or one Trader that matches the filter.
     * @param {traderFindUniqueArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends traderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, traderFindUniqueArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Trader that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {traderFindUniqueOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends traderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, traderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Trader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderFindFirstArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends traderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, traderFindFirstArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Trader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderFindFirstOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends traderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, traderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Traders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traders
     * const traders = await prisma.trader.findMany()
     * 
     * // Get first 10 Traders
     * const traders = await prisma.trader.findMany({ take: 10 })
     * 
     * // Only select the `traderId`
     * const traderWithTraderIdOnly = await prisma.trader.findMany({ select: { traderId: true } })
     * 
    **/
    findMany<T extends traderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, traderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Trader.
     * @param {traderCreateArgs} args - Arguments to create a Trader.
     * @example
     * // Create one Trader
     * const Trader = await prisma.trader.create({
     *   data: {
     *     // ... data to create a Trader
     *   }
     * })
     * 
    **/
    create<T extends traderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, traderCreateArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Traders.
     * @param {traderCreateManyArgs} args - Arguments to create many Traders.
     * @example
     * // Create many Traders
     * const trader = await prisma.trader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends traderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, traderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trader.
     * @param {traderDeleteArgs} args - Arguments to delete one Trader.
     * @example
     * // Delete one Trader
     * const Trader = await prisma.trader.delete({
     *   where: {
     *     // ... filter to delete one Trader
     *   }
     * })
     * 
    **/
    delete<T extends traderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, traderDeleteArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Trader.
     * @param {traderUpdateArgs} args - Arguments to update one Trader.
     * @example
     * // Update one Trader
     * const trader = await prisma.trader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends traderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, traderUpdateArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Traders.
     * @param {traderDeleteManyArgs} args - Arguments to filter Traders to delete.
     * @example
     * // Delete a few Traders
     * const { count } = await prisma.trader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends traderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, traderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traders
     * const trader = await prisma.trader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends traderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, traderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trader.
     * @param {traderUpsertArgs} args - Arguments to update or create a Trader.
     * @example
     * // Update or create a Trader
     * const trader = await prisma.trader.upsert({
     *   create: {
     *     // ... data to create a Trader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trader we want to update
     *   }
     * })
    **/
    upsert<T extends traderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, traderUpsertArgs<ExtArgs>>
    ): Prisma__traderClient<$Result.GetResult<Prisma.$traderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderCountArgs} args - Arguments to filter Traders to count.
     * @example
     * // Count the number of Traders
     * const count = await prisma.trader.count({
     *   where: {
     *     // ... the filter for the Traders we want to count
     *   }
     * })
    **/
    count<T extends traderCountArgs>(
      args?: Subset<T, traderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraderAggregateArgs>(args: Subset<T, TraderAggregateArgs>): Prisma.PrismaPromise<GetTraderAggregateType<T>>

    /**
     * Group by Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends traderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: traderGroupByArgs['orderBy'] }
        : { orderBy?: traderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, traderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trader model
   */
  readonly fields: traderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__traderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    certificate<T extends trader$certificateArgs<ExtArgs> = {}>(args?: Subset<T, trader$certificateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the trader model
   */ 
  interface traderFieldRefs {
    readonly traderId: FieldRef<"trader", 'Int'>
    readonly companyName: FieldRef<"trader", 'String'>
    readonly amount: FieldRef<"trader", 'Int'>
    readonly available: FieldRef<"trader", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * trader findUnique
   */
  export type traderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter, which trader to fetch.
     */
    where: traderWhereUniqueInput
  }

  /**
   * trader findUniqueOrThrow
   */
  export type traderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter, which trader to fetch.
     */
    where: traderWhereUniqueInput
  }

  /**
   * trader findFirst
   */
  export type traderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter, which trader to fetch.
     */
    where?: traderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traders to fetch.
     */
    orderBy?: traderOrderByWithRelationInput | traderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for traders.
     */
    cursor?: traderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * trader findFirstOrThrow
   */
  export type traderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter, which trader to fetch.
     */
    where?: traderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traders to fetch.
     */
    orderBy?: traderOrderByWithRelationInput | traderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for traders.
     */
    cursor?: traderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * trader findMany
   */
  export type traderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter, which traders to fetch.
     */
    where?: traderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traders to fetch.
     */
    orderBy?: traderOrderByWithRelationInput | traderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing traders.
     */
    cursor?: traderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traders.
     */
    skip?: number
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * trader create
   */
  export type traderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * The data needed to create a trader.
     */
    data: XOR<traderCreateInput, traderUncheckedCreateInput>
  }

  /**
   * trader createMany
   */
  export type traderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many traders.
     */
    data: traderCreateManyInput | traderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trader update
   */
  export type traderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * The data needed to update a trader.
     */
    data: XOR<traderUpdateInput, traderUncheckedUpdateInput>
    /**
     * Choose, which trader to update.
     */
    where: traderWhereUniqueInput
  }

  /**
   * trader updateMany
   */
  export type traderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update traders.
     */
    data: XOR<traderUpdateManyMutationInput, traderUncheckedUpdateManyInput>
    /**
     * Filter which traders to update
     */
    where?: traderWhereInput
  }

  /**
   * trader upsert
   */
  export type traderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * The filter to search for the trader to update in case it exists.
     */
    where: traderWhereUniqueInput
    /**
     * In case the trader found by the `where` argument doesn't exist, create a new trader with this data.
     */
    create: XOR<traderCreateInput, traderUncheckedCreateInput>
    /**
     * In case the trader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<traderUpdateInput, traderUncheckedUpdateInput>
  }

  /**
   * trader delete
   */
  export type traderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
    /**
     * Filter which trader to delete.
     */
    where: traderWhereUniqueInput
  }

  /**
   * trader deleteMany
   */
  export type traderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which traders to delete
     */
    where?: traderWhereInput
  }

  /**
   * trader.certificate
   */
  export type trader$certificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificateInclude<ExtArgs> | null
    where?: certificateWhereInput
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    cursor?: certificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * trader without action
   */
  export type traderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trader
     */
    select?: traderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    password: 'password',
    nameTitle: 'nameTitle',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    company: 'company',
    expectedMonthly: 'expectedMonthly',
    profileImage: 'profileImage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    certificateId: 'certificateId',
    userId: 'userId',
    traderId: 'traderId',
    date: 'date'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const TraderScalarFieldEnum: {
    traderId: 'traderId',
    companyName: 'companyName',
    amount: 'amount',
    available: 'available'
  };

  export type TraderScalarFieldEnum = (typeof TraderScalarFieldEnum)[keyof typeof TraderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userId?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    nameTitle?: StringNullableFilter<"user"> | string | null
    firstname?: StringNullableFilter<"user"> | string | null
    lastname?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    company?: StringNullableFilter<"user"> | string | null
    expectedMonthly?: StringNullableFilter<"user"> | string | null
    profileImage?: StringNullableFilter<"user"> | string | null
    certificate?: CertificateListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nameTitle?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    expectedMonthly?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    certificate?: certificateOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    nameTitle?: StringNullableFilter<"user"> | string | null
    firstname?: StringNullableFilter<"user"> | string | null
    lastname?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    company?: StringNullableFilter<"user"> | string | null
    expectedMonthly?: StringNullableFilter<"user"> | string | null
    profileImage?: StringNullableFilter<"user"> | string | null
    certificate?: CertificateListRelationFilter
  }, "userId">

  export type userOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nameTitle?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    expectedMonthly?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    nameTitle?: StringNullableWithAggregatesFilter<"user"> | string | null
    firstname?: StringNullableWithAggregatesFilter<"user"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    company?: StringNullableWithAggregatesFilter<"user"> | string | null
    expectedMonthly?: StringNullableWithAggregatesFilter<"user"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type certificateWhereInput = {
    AND?: certificateWhereInput | certificateWhereInput[]
    OR?: certificateWhereInput[]
    NOT?: certificateWhereInput | certificateWhereInput[]
    certificateId?: StringFilter<"certificate"> | string
    userId?: IntFilter<"certificate"> | number
    traderId?: IntFilter<"certificate"> | number
    date?: DateTimeFilter<"certificate"> | Date | string
    userCertificate?: XOR<UserRelationFilter, userWhereInput>
    traderCertificate?: XOR<TraderRelationFilter, traderWhereInput>
  }

  export type certificateOrderByWithRelationInput = {
    certificateId?: SortOrder
    userId?: SortOrder
    traderId?: SortOrder
    date?: SortOrder
    userCertificate?: userOrderByWithRelationInput
    traderCertificate?: traderOrderByWithRelationInput
  }

  export type certificateWhereUniqueInput = Prisma.AtLeast<{
    certificateId?: string
    AND?: certificateWhereInput | certificateWhereInput[]
    OR?: certificateWhereInput[]
    NOT?: certificateWhereInput | certificateWhereInput[]
    userId?: IntFilter<"certificate"> | number
    traderId?: IntFilter<"certificate"> | number
    date?: DateTimeFilter<"certificate"> | Date | string
    userCertificate?: XOR<UserRelationFilter, userWhereInput>
    traderCertificate?: XOR<TraderRelationFilter, traderWhereInput>
  }, "certificateId">

  export type certificateOrderByWithAggregationInput = {
    certificateId?: SortOrder
    userId?: SortOrder
    traderId?: SortOrder
    date?: SortOrder
    _count?: certificateCountOrderByAggregateInput
    _avg?: certificateAvgOrderByAggregateInput
    _max?: certificateMaxOrderByAggregateInput
    _min?: certificateMinOrderByAggregateInput
    _sum?: certificateSumOrderByAggregateInput
  }

  export type certificateScalarWhereWithAggregatesInput = {
    AND?: certificateScalarWhereWithAggregatesInput | certificateScalarWhereWithAggregatesInput[]
    OR?: certificateScalarWhereWithAggregatesInput[]
    NOT?: certificateScalarWhereWithAggregatesInput | certificateScalarWhereWithAggregatesInput[]
    certificateId?: StringWithAggregatesFilter<"certificate"> | string
    userId?: IntWithAggregatesFilter<"certificate"> | number
    traderId?: IntWithAggregatesFilter<"certificate"> | number
    date?: DateTimeWithAggregatesFilter<"certificate"> | Date | string
  }

  export type traderWhereInput = {
    AND?: traderWhereInput | traderWhereInput[]
    OR?: traderWhereInput[]
    NOT?: traderWhereInput | traderWhereInput[]
    traderId?: IntFilter<"trader"> | number
    companyName?: StringFilter<"trader"> | string
    amount?: IntFilter<"trader"> | number
    available?: BoolFilter<"trader"> | boolean
    certificate?: CertificateListRelationFilter
  }

  export type traderOrderByWithRelationInput = {
    traderId?: SortOrder
    companyName?: SortOrder
    amount?: SortOrder
    available?: SortOrder
    certificate?: certificateOrderByRelationAggregateInput
  }

  export type traderWhereUniqueInput = Prisma.AtLeast<{
    traderId?: number
    AND?: traderWhereInput | traderWhereInput[]
    OR?: traderWhereInput[]
    NOT?: traderWhereInput | traderWhereInput[]
    companyName?: StringFilter<"trader"> | string
    amount?: IntFilter<"trader"> | number
    available?: BoolFilter<"trader"> | boolean
    certificate?: CertificateListRelationFilter
  }, "traderId">

  export type traderOrderByWithAggregationInput = {
    traderId?: SortOrder
    companyName?: SortOrder
    amount?: SortOrder
    available?: SortOrder
    _count?: traderCountOrderByAggregateInput
    _avg?: traderAvgOrderByAggregateInput
    _max?: traderMaxOrderByAggregateInput
    _min?: traderMinOrderByAggregateInput
    _sum?: traderSumOrderByAggregateInput
  }

  export type traderScalarWhereWithAggregatesInput = {
    AND?: traderScalarWhereWithAggregatesInput | traderScalarWhereWithAggregatesInput[]
    OR?: traderScalarWhereWithAggregatesInput[]
    NOT?: traderScalarWhereWithAggregatesInput | traderScalarWhereWithAggregatesInput[]
    traderId?: IntWithAggregatesFilter<"trader"> | number
    companyName?: StringWithAggregatesFilter<"trader"> | string
    amount?: IntWithAggregatesFilter<"trader"> | number
    available?: BoolWithAggregatesFilter<"trader"> | boolean
  }

  export type userCreateInput = {
    username: string
    password: string
    nameTitle?: string | null
    firstname?: string | null
    lastname?: string | null
    email?: string | null
    company?: string | null
    expectedMonthly?: string | null
    profileImage?: string | null
    certificate?: certificateCreateNestedManyWithoutUserCertificateInput
  }

  export type userUncheckedCreateInput = {
    userId?: number
    username: string
    password: string
    nameTitle?: string | null
    firstname?: string | null
    lastname?: string | null
    email?: string | null
    company?: string | null
    expectedMonthly?: string | null
    profileImage?: string | null
    certificate?: certificateUncheckedCreateNestedManyWithoutUserCertificateInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: certificateUpdateManyWithoutUserCertificateNestedInput
  }

  export type userUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: certificateUncheckedUpdateManyWithoutUserCertificateNestedInput
  }

  export type userCreateManyInput = {
    userId?: number
    username: string
    password: string
    nameTitle?: string | null
    firstname?: string | null
    lastname?: string | null
    email?: string | null
    company?: string | null
    expectedMonthly?: string | null
    profileImage?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type certificateCreateInput = {
    certificateId?: string
    date?: Date | string
    userCertificate: userCreateNestedOneWithoutCertificateInput
    traderCertificate: traderCreateNestedOneWithoutCertificateInput
  }

  export type certificateUncheckedCreateInput = {
    certificateId?: string
    userId: number
    traderId: number
    date?: Date | string
  }

  export type certificateUpdateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userCertificate?: userUpdateOneRequiredWithoutCertificateNestedInput
    traderCertificate?: traderUpdateOneRequiredWithoutCertificateNestedInput
  }

  export type certificateUncheckedUpdateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    traderId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateCreateManyInput = {
    certificateId?: string
    userId: number
    traderId: number
    date?: Date | string
  }

  export type certificateUpdateManyMutationInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateUncheckedUpdateManyInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    traderId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type traderCreateInput = {
    companyName: string
    amount: number
    available: boolean
    certificate?: certificateCreateNestedManyWithoutTraderCertificateInput
  }

  export type traderUncheckedCreateInput = {
    traderId?: number
    companyName: string
    amount: number
    available: boolean
    certificate?: certificateUncheckedCreateNestedManyWithoutTraderCertificateInput
  }

  export type traderUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    certificate?: certificateUpdateManyWithoutTraderCertificateNestedInput
  }

  export type traderUncheckedUpdateInput = {
    traderId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    certificate?: certificateUncheckedUpdateManyWithoutTraderCertificateNestedInput
  }

  export type traderCreateManyInput = {
    traderId?: number
    companyName: string
    amount: number
    available: boolean
  }

  export type traderUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type traderUncheckedUpdateManyInput = {
    traderId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CertificateListRelationFilter = {
    every?: certificateWhereInput
    some?: certificateWhereInput
    none?: certificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type certificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nameTitle?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    company?: SortOrder
    expectedMonthly?: SortOrder
    profileImage?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nameTitle?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    company?: SortOrder
    expectedMonthly?: SortOrder
    profileImage?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nameTitle?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    company?: SortOrder
    expectedMonthly?: SortOrder
    profileImage?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type TraderRelationFilter = {
    is?: traderWhereInput
    isNot?: traderWhereInput
  }

  export type certificateCountOrderByAggregateInput = {
    certificateId?: SortOrder
    userId?: SortOrder
    traderId?: SortOrder
    date?: SortOrder
  }

  export type certificateAvgOrderByAggregateInput = {
    userId?: SortOrder
    traderId?: SortOrder
  }

  export type certificateMaxOrderByAggregateInput = {
    certificateId?: SortOrder
    userId?: SortOrder
    traderId?: SortOrder
    date?: SortOrder
  }

  export type certificateMinOrderByAggregateInput = {
    certificateId?: SortOrder
    userId?: SortOrder
    traderId?: SortOrder
    date?: SortOrder
  }

  export type certificateSumOrderByAggregateInput = {
    userId?: SortOrder
    traderId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type traderCountOrderByAggregateInput = {
    traderId?: SortOrder
    companyName?: SortOrder
    amount?: SortOrder
    available?: SortOrder
  }

  export type traderAvgOrderByAggregateInput = {
    traderId?: SortOrder
    amount?: SortOrder
  }

  export type traderMaxOrderByAggregateInput = {
    traderId?: SortOrder
    companyName?: SortOrder
    amount?: SortOrder
    available?: SortOrder
  }

  export type traderMinOrderByAggregateInput = {
    traderId?: SortOrder
    companyName?: SortOrder
    amount?: SortOrder
    available?: SortOrder
  }

  export type traderSumOrderByAggregateInput = {
    traderId?: SortOrder
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type certificateCreateNestedManyWithoutUserCertificateInput = {
    create?: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput> | certificateCreateWithoutUserCertificateInput[] | certificateUncheckedCreateWithoutUserCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutUserCertificateInput | certificateCreateOrConnectWithoutUserCertificateInput[]
    createMany?: certificateCreateManyUserCertificateInputEnvelope
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
  }

  export type certificateUncheckedCreateNestedManyWithoutUserCertificateInput = {
    create?: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput> | certificateCreateWithoutUserCertificateInput[] | certificateUncheckedCreateWithoutUserCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutUserCertificateInput | certificateCreateOrConnectWithoutUserCertificateInput[]
    createMany?: certificateCreateManyUserCertificateInputEnvelope
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type certificateUpdateManyWithoutUserCertificateNestedInput = {
    create?: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput> | certificateCreateWithoutUserCertificateInput[] | certificateUncheckedCreateWithoutUserCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutUserCertificateInput | certificateCreateOrConnectWithoutUserCertificateInput[]
    upsert?: certificateUpsertWithWhereUniqueWithoutUserCertificateInput | certificateUpsertWithWhereUniqueWithoutUserCertificateInput[]
    createMany?: certificateCreateManyUserCertificateInputEnvelope
    set?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    disconnect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    delete?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    update?: certificateUpdateWithWhereUniqueWithoutUserCertificateInput | certificateUpdateWithWhereUniqueWithoutUserCertificateInput[]
    updateMany?: certificateUpdateManyWithWhereWithoutUserCertificateInput | certificateUpdateManyWithWhereWithoutUserCertificateInput[]
    deleteMany?: certificateScalarWhereInput | certificateScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type certificateUncheckedUpdateManyWithoutUserCertificateNestedInput = {
    create?: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput> | certificateCreateWithoutUserCertificateInput[] | certificateUncheckedCreateWithoutUserCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutUserCertificateInput | certificateCreateOrConnectWithoutUserCertificateInput[]
    upsert?: certificateUpsertWithWhereUniqueWithoutUserCertificateInput | certificateUpsertWithWhereUniqueWithoutUserCertificateInput[]
    createMany?: certificateCreateManyUserCertificateInputEnvelope
    set?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    disconnect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    delete?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    update?: certificateUpdateWithWhereUniqueWithoutUserCertificateInput | certificateUpdateWithWhereUniqueWithoutUserCertificateInput[]
    updateMany?: certificateUpdateManyWithWhereWithoutUserCertificateInput | certificateUpdateManyWithWhereWithoutUserCertificateInput[]
    deleteMany?: certificateScalarWhereInput | certificateScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCertificateInput = {
    create?: XOR<userCreateWithoutCertificateInput, userUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: userCreateOrConnectWithoutCertificateInput
    connect?: userWhereUniqueInput
  }

  export type traderCreateNestedOneWithoutCertificateInput = {
    create?: XOR<traderCreateWithoutCertificateInput, traderUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: traderCreateOrConnectWithoutCertificateInput
    connect?: traderWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutCertificateNestedInput = {
    create?: XOR<userCreateWithoutCertificateInput, userUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: userCreateOrConnectWithoutCertificateInput
    upsert?: userUpsertWithoutCertificateInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCertificateInput, userUpdateWithoutCertificateInput>, userUncheckedUpdateWithoutCertificateInput>
  }

  export type traderUpdateOneRequiredWithoutCertificateNestedInput = {
    create?: XOR<traderCreateWithoutCertificateInput, traderUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: traderCreateOrConnectWithoutCertificateInput
    upsert?: traderUpsertWithoutCertificateInput
    connect?: traderWhereUniqueInput
    update?: XOR<XOR<traderUpdateToOneWithWhereWithoutCertificateInput, traderUpdateWithoutCertificateInput>, traderUncheckedUpdateWithoutCertificateInput>
  }

  export type certificateCreateNestedManyWithoutTraderCertificateInput = {
    create?: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput> | certificateCreateWithoutTraderCertificateInput[] | certificateUncheckedCreateWithoutTraderCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutTraderCertificateInput | certificateCreateOrConnectWithoutTraderCertificateInput[]
    createMany?: certificateCreateManyTraderCertificateInputEnvelope
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
  }

  export type certificateUncheckedCreateNestedManyWithoutTraderCertificateInput = {
    create?: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput> | certificateCreateWithoutTraderCertificateInput[] | certificateUncheckedCreateWithoutTraderCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutTraderCertificateInput | certificateCreateOrConnectWithoutTraderCertificateInput[]
    createMany?: certificateCreateManyTraderCertificateInputEnvelope
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type certificateUpdateManyWithoutTraderCertificateNestedInput = {
    create?: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput> | certificateCreateWithoutTraderCertificateInput[] | certificateUncheckedCreateWithoutTraderCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutTraderCertificateInput | certificateCreateOrConnectWithoutTraderCertificateInput[]
    upsert?: certificateUpsertWithWhereUniqueWithoutTraderCertificateInput | certificateUpsertWithWhereUniqueWithoutTraderCertificateInput[]
    createMany?: certificateCreateManyTraderCertificateInputEnvelope
    set?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    disconnect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    delete?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    update?: certificateUpdateWithWhereUniqueWithoutTraderCertificateInput | certificateUpdateWithWhereUniqueWithoutTraderCertificateInput[]
    updateMany?: certificateUpdateManyWithWhereWithoutTraderCertificateInput | certificateUpdateManyWithWhereWithoutTraderCertificateInput[]
    deleteMany?: certificateScalarWhereInput | certificateScalarWhereInput[]
  }

  export type certificateUncheckedUpdateManyWithoutTraderCertificateNestedInput = {
    create?: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput> | certificateCreateWithoutTraderCertificateInput[] | certificateUncheckedCreateWithoutTraderCertificateInput[]
    connectOrCreate?: certificateCreateOrConnectWithoutTraderCertificateInput | certificateCreateOrConnectWithoutTraderCertificateInput[]
    upsert?: certificateUpsertWithWhereUniqueWithoutTraderCertificateInput | certificateUpsertWithWhereUniqueWithoutTraderCertificateInput[]
    createMany?: certificateCreateManyTraderCertificateInputEnvelope
    set?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    disconnect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    delete?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    connect?: certificateWhereUniqueInput | certificateWhereUniqueInput[]
    update?: certificateUpdateWithWhereUniqueWithoutTraderCertificateInput | certificateUpdateWithWhereUniqueWithoutTraderCertificateInput[]
    updateMany?: certificateUpdateManyWithWhereWithoutTraderCertificateInput | certificateUpdateManyWithWhereWithoutTraderCertificateInput[]
    deleteMany?: certificateScalarWhereInput | certificateScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type certificateCreateWithoutUserCertificateInput = {
    certificateId?: string
    date?: Date | string
    traderCertificate: traderCreateNestedOneWithoutCertificateInput
  }

  export type certificateUncheckedCreateWithoutUserCertificateInput = {
    certificateId?: string
    traderId: number
    date?: Date | string
  }

  export type certificateCreateOrConnectWithoutUserCertificateInput = {
    where: certificateWhereUniqueInput
    create: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput>
  }

  export type certificateCreateManyUserCertificateInputEnvelope = {
    data: certificateCreateManyUserCertificateInput | certificateCreateManyUserCertificateInput[]
    skipDuplicates?: boolean
  }

  export type certificateUpsertWithWhereUniqueWithoutUserCertificateInput = {
    where: certificateWhereUniqueInput
    update: XOR<certificateUpdateWithoutUserCertificateInput, certificateUncheckedUpdateWithoutUserCertificateInput>
    create: XOR<certificateCreateWithoutUserCertificateInput, certificateUncheckedCreateWithoutUserCertificateInput>
  }

  export type certificateUpdateWithWhereUniqueWithoutUserCertificateInput = {
    where: certificateWhereUniqueInput
    data: XOR<certificateUpdateWithoutUserCertificateInput, certificateUncheckedUpdateWithoutUserCertificateInput>
  }

  export type certificateUpdateManyWithWhereWithoutUserCertificateInput = {
    where: certificateScalarWhereInput
    data: XOR<certificateUpdateManyMutationInput, certificateUncheckedUpdateManyWithoutUserCertificateInput>
  }

  export type certificateScalarWhereInput = {
    AND?: certificateScalarWhereInput | certificateScalarWhereInput[]
    OR?: certificateScalarWhereInput[]
    NOT?: certificateScalarWhereInput | certificateScalarWhereInput[]
    certificateId?: StringFilter<"certificate"> | string
    userId?: IntFilter<"certificate"> | number
    traderId?: IntFilter<"certificate"> | number
    date?: DateTimeFilter<"certificate"> | Date | string
  }

  export type userCreateWithoutCertificateInput = {
    username: string
    password: string
    nameTitle?: string | null
    firstname?: string | null
    lastname?: string | null
    email?: string | null
    company?: string | null
    expectedMonthly?: string | null
    profileImage?: string | null
  }

  export type userUncheckedCreateWithoutCertificateInput = {
    userId?: number
    username: string
    password: string
    nameTitle?: string | null
    firstname?: string | null
    lastname?: string | null
    email?: string | null
    company?: string | null
    expectedMonthly?: string | null
    profileImage?: string | null
  }

  export type userCreateOrConnectWithoutCertificateInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCertificateInput, userUncheckedCreateWithoutCertificateInput>
  }

  export type traderCreateWithoutCertificateInput = {
    companyName: string
    amount: number
    available: boolean
  }

  export type traderUncheckedCreateWithoutCertificateInput = {
    traderId?: number
    companyName: string
    amount: number
    available: boolean
  }

  export type traderCreateOrConnectWithoutCertificateInput = {
    where: traderWhereUniqueInput
    create: XOR<traderCreateWithoutCertificateInput, traderUncheckedCreateWithoutCertificateInput>
  }

  export type userUpsertWithoutCertificateInput = {
    update: XOR<userUpdateWithoutCertificateInput, userUncheckedUpdateWithoutCertificateInput>
    create: XOR<userCreateWithoutCertificateInput, userUncheckedCreateWithoutCertificateInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCertificateInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCertificateInput, userUncheckedUpdateWithoutCertificateInput>
  }

  export type userUpdateWithoutCertificateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateWithoutCertificateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nameTitle?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMonthly?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type traderUpsertWithoutCertificateInput = {
    update: XOR<traderUpdateWithoutCertificateInput, traderUncheckedUpdateWithoutCertificateInput>
    create: XOR<traderCreateWithoutCertificateInput, traderUncheckedCreateWithoutCertificateInput>
    where?: traderWhereInput
  }

  export type traderUpdateToOneWithWhereWithoutCertificateInput = {
    where?: traderWhereInput
    data: XOR<traderUpdateWithoutCertificateInput, traderUncheckedUpdateWithoutCertificateInput>
  }

  export type traderUpdateWithoutCertificateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type traderUncheckedUpdateWithoutCertificateInput = {
    traderId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type certificateCreateWithoutTraderCertificateInput = {
    certificateId?: string
    date?: Date | string
    userCertificate: userCreateNestedOneWithoutCertificateInput
  }

  export type certificateUncheckedCreateWithoutTraderCertificateInput = {
    certificateId?: string
    userId: number
    date?: Date | string
  }

  export type certificateCreateOrConnectWithoutTraderCertificateInput = {
    where: certificateWhereUniqueInput
    create: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput>
  }

  export type certificateCreateManyTraderCertificateInputEnvelope = {
    data: certificateCreateManyTraderCertificateInput | certificateCreateManyTraderCertificateInput[]
    skipDuplicates?: boolean
  }

  export type certificateUpsertWithWhereUniqueWithoutTraderCertificateInput = {
    where: certificateWhereUniqueInput
    update: XOR<certificateUpdateWithoutTraderCertificateInput, certificateUncheckedUpdateWithoutTraderCertificateInput>
    create: XOR<certificateCreateWithoutTraderCertificateInput, certificateUncheckedCreateWithoutTraderCertificateInput>
  }

  export type certificateUpdateWithWhereUniqueWithoutTraderCertificateInput = {
    where: certificateWhereUniqueInput
    data: XOR<certificateUpdateWithoutTraderCertificateInput, certificateUncheckedUpdateWithoutTraderCertificateInput>
  }

  export type certificateUpdateManyWithWhereWithoutTraderCertificateInput = {
    where: certificateScalarWhereInput
    data: XOR<certificateUpdateManyMutationInput, certificateUncheckedUpdateManyWithoutTraderCertificateInput>
  }

  export type certificateCreateManyUserCertificateInput = {
    certificateId?: string
    traderId: number
    date?: Date | string
  }

  export type certificateUpdateWithoutUserCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    traderCertificate?: traderUpdateOneRequiredWithoutCertificateNestedInput
  }

  export type certificateUncheckedUpdateWithoutUserCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    traderId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateUncheckedUpdateManyWithoutUserCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    traderId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateCreateManyTraderCertificateInput = {
    certificateId?: string
    userId: number
    date?: Date | string
  }

  export type certificateUpdateWithoutTraderCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userCertificate?: userUpdateOneRequiredWithoutCertificateNestedInput
  }

  export type certificateUncheckedUpdateWithoutTraderCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateUncheckedUpdateManyWithoutTraderCertificateInput = {
    certificateId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TraderCountOutputTypeDefaultArgs instead
     */
    export type TraderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TraderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use certificateDefaultArgs instead
     */
    export type certificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = certificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use traderDefaultArgs instead
     */
    export type traderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = traderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}