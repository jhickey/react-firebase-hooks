import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import { LoadingHook } from '../util';

export type IDOptions = {
  idField?: string;
  refField?: string;
};
export type Options = {
  snapshotListenOptions?: FirebaseFirestoreTypes.SnapshotListenOptions;
};
export type DataOptions = Options & IDOptions;
export type OnceOptions = {
  getOptions?: FirebaseFirestoreTypes.GetOptions;
};
export type OnceDataOptions = OnceOptions & IDOptions;
export type Data<
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
> = T & Record<IDField, string> & Record<RefField, string>;

export type CollectionHook<T = FirebaseFirestoreTypes.DocumentData> = LoadingHook<
  FirebaseFirestoreTypes.QuerySnapshot<T>,
  Error
>;
export type CollectionDataHook<
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
> = LoadingHook<Data<T, IDField, RefField>[], Error>;

export type DocumentHook<T = FirebaseFirestoreTypes.DocumentData> = LoadingHook<
  FirebaseFirestoreTypes.DocumentSnapshot<T>,
  Error
>;
export type DocumentDataHook<
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
> = LoadingHook<Data<T, IDField, RefField>, Error>;
