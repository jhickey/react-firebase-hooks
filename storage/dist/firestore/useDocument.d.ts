import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Data, DataOptions, OnceOptions, OnceDataOptions, Options } from './types';
export declare const useDocument: <T = FirebaseFirestoreTypes.DocumentData>(docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null | undefined, options?: Options | undefined) => [FirebaseFirestoreTypes.DocumentSnapshot<T> | undefined, boolean, Error | undefined];
export declare const useDocumentOnce: <T = FirebaseFirestoreTypes.DocumentData>(docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null | undefined, options?: OnceOptions | undefined) => [FirebaseFirestoreTypes.DocumentSnapshot<T> | undefined, boolean, Error | undefined];
export declare const useDocumentData: <T = FirebaseFirestoreTypes.DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null | undefined, options?: DataOptions | undefined) => [Data<T, IDField, RefField> | undefined, boolean, Error | undefined];
export declare const useDocumentDataOnce: <T = FirebaseFirestoreTypes.DocumentData, IDField extends string = "", RefField extends string = "">(docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null | undefined, options?: OnceDataOptions | undefined) => [Data<T, IDField, RefField> | undefined, boolean, Error | undefined];
