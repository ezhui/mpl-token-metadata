/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  publicKey as publicKeySerializer,
  struct,
  tuple,
  u64,
} from '@metaplex-foundation/umi/serializers';
import {
  LeafInfo,
  LeafInfoArgs,
  SeedsVec,
  SeedsVecArgs,
  getLeafInfoSerializer,
  getSeedsVecSerializer,
} from '.';

export type PayloadType =
  | { __kind: 'Pubkey'; fields: [PublicKey] }
  | { __kind: 'Seeds'; fields: [SeedsVec] }
  | { __kind: 'MerkleProof'; fields: [LeafInfo] }
  | { __kind: 'Number'; fields: [bigint] };

export type PayloadTypeArgs =
  | { __kind: 'Pubkey'; fields: [PublicKey] }
  | { __kind: 'Seeds'; fields: [SeedsVecArgs] }
  | { __kind: 'MerkleProof'; fields: [LeafInfoArgs] }
  | { __kind: 'Number'; fields: [number | bigint] };

/** @deprecated Use `getPayloadTypeSerializer()` without any argument instead. */
export function getPayloadTypeSerializer(
  _context: object
): Serializer<PayloadTypeArgs, PayloadType>;
export function getPayloadTypeSerializer(): Serializer<
  PayloadTypeArgs,
  PayloadType
>;
export function getPayloadTypeSerializer(
  _context: object = {}
): Serializer<PayloadTypeArgs, PayloadType> {
  return dataEnum<PayloadType>(
    [
      [
        'Pubkey',
        struct<GetDataEnumKindContent<PayloadType, 'Pubkey'>>([
          ['fields', tuple([publicKeySerializer()])],
        ]),
      ],
      [
        'Seeds',
        struct<GetDataEnumKindContent<PayloadType, 'Seeds'>>([
          ['fields', tuple([getSeedsVecSerializer()])],
        ]),
      ],
      [
        'MerkleProof',
        struct<GetDataEnumKindContent<PayloadType, 'MerkleProof'>>([
          ['fields', tuple([getLeafInfoSerializer()])],
        ]),
      ],
      [
        'Number',
        struct<GetDataEnumKindContent<PayloadType, 'Number'>>([
          ['fields', tuple([u64()])],
        ]),
      ],
    ],
    { description: 'PayloadType' }
  ) as Serializer<PayloadTypeArgs, PayloadType>;
}

// Data Enum Helpers.
export function payloadType(
  kind: 'Pubkey',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Pubkey'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'Pubkey'>;
export function payloadType(
  kind: 'Seeds',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Seeds'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'Seeds'>;
export function payloadType(
  kind: 'MerkleProof',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'MerkleProof'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'MerkleProof'>;
export function payloadType(
  kind: 'Number',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Number'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'Number'>;
export function payloadType<K extends PayloadTypeArgs['__kind']>(
  kind: K,
  data?: any
): Extract<PayloadTypeArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isPayloadType<K extends PayloadType['__kind']>(
  kind: K,
  value: PayloadType
): value is PayloadType & { __kind: K } {
  return value.__kind === kind;
}
