/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  struct,
  tuple,
  unit,
} from '@metaplex-foundation/umi/serializers';
import {
  CollectionDetails,
  CollectionDetailsArgs,
  getCollectionDetailsSerializer,
} from '.';

export type CollectionDetailsToggle =
  | { __kind: 'None' }
  | { __kind: 'Clear' }
  | { __kind: 'Set'; fields: [CollectionDetails] };

export type CollectionDetailsToggleArgs =
  | { __kind: 'None' }
  | { __kind: 'Clear' }
  | { __kind: 'Set'; fields: [CollectionDetailsArgs] };

export function getCollectionDetailsToggleSerializer(): Serializer<
  CollectionDetailsToggleArgs,
  CollectionDetailsToggle
> {
  return dataEnum<CollectionDetailsToggle>(
    [
      ['None', unit()],
      ['Clear', unit()],
      [
        'Set',
        struct<GetDataEnumKindContent<CollectionDetailsToggle, 'Set'>>([
          ['fields', tuple([getCollectionDetailsSerializer()])],
        ]),
      ],
    ],
    { description: 'CollectionDetailsToggle' }
  ) as Serializer<CollectionDetailsToggleArgs, CollectionDetailsToggle>;
}

// Data Enum Helpers.
export function collectionDetailsToggle(
  kind: 'None'
): GetDataEnumKind<CollectionDetailsToggleArgs, 'None'>;
export function collectionDetailsToggle(
  kind: 'Clear'
): GetDataEnumKind<CollectionDetailsToggleArgs, 'Clear'>;
export function collectionDetailsToggle(
  kind: 'Set',
  data: GetDataEnumKindContent<CollectionDetailsToggleArgs, 'Set'>['fields']
): GetDataEnumKind<CollectionDetailsToggleArgs, 'Set'>;
export function collectionDetailsToggle<
  K extends CollectionDetailsToggleArgs['__kind']
>(kind: K, data?: any): Extract<CollectionDetailsToggleArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isCollectionDetailsToggle<
  K extends CollectionDetailsToggle['__kind']
>(
  kind: K,
  value: CollectionDetailsToggle
): value is CollectionDetailsToggle & { __kind: K } {
  return value.__kind === kind;
}
