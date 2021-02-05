import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { LoadingHook } from '../util';
export declare type IDOptions = {
    idField?: string;
    refField?: string;
};
export declare type Options = {
    snapshotListenOptions?: FirebaseFirestoreTypes.SnapshotListenOptions;
};
export declare type DataOptions = Options & IDOptions;
export declare type OnceOptions = {
    getOptions?: FirebaseFirestoreTypes.GetOptions;
};
export declare type OnceDataOptions = OnceOptions & IDOptions;
export declare type Data<T = FirebaseFirestoreTypes.DocumentData, IDField extends string = '', RefField extends string = ''> = T & Record<IDField, string> & Record<RefField, string>;
export declare type CollectionHook<T = FirebaseFirestoreTypes.DocumentData> = LoadingHook<FirebaseFirestoreTypes.QuerySnapshot<T>, Error>;
export declare type CollectionDataHook<T = FirebaseFirestoreTypes.DocumentData, IDField extends string = '', RefField extends string = ''> = LoadingHook<Data<T, IDField, RefField>[], Error>;
export declare type DocumentHook<T = FirebaseFirestoreTypes.DocumentData> = LoadingHook<FirebaseFirestoreTypes.DocumentSnapshot<T>, Error>;
export declare type DocumentDataHook<T = FirebaseFirestoreTypes.DocumentData, IDField extends string = '', RefField extends string = ''> = LoadingHook<Data<T, IDField, RefField>, Error>;
