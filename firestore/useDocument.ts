import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import { useEffect, useMemo } from 'react';
import { snapshotToData } from './helpers';
import {
  Data,
  DataOptions,
  DocumentHook,
  DocumentDataHook,
  OnceOptions,
  OnceDataOptions,
  Options,
} from './types';
import { useIsEqualRef, useLoadingValue } from '../util';

export const useDocument = <T = FirebaseFirestoreTypes.DocumentData>(
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: Options
): DocumentHook<T> => {
  return useDocumentInternal(true, docRef, options);
};

export const useDocumentOnce = <T = FirebaseFirestoreTypes.DocumentData>(
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: OnceOptions
): DocumentHook<T> => {
  return useDocumentInternal(false, docRef, options);
};

export const useDocumentData = <
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
>(
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: DataOptions
): DocumentDataHook<T, IDField, RefField> => {
  return useDocumentDataInternal(true, docRef, options);
};

export const useDocumentDataOnce = <
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
>(
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: OnceDataOptions
): DocumentDataHook<T, IDField, RefField> => {
  return useDocumentDataInternal(false, docRef, options);
};

const useDocumentInternal = <T = FirebaseFirestoreTypes.DocumentData>(
  listen: boolean,
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: Options & OnceOptions
): DocumentHook<T> => {
  const { error, loading, reset, setError, setValue, value } = useLoadingValue<
    FirebaseFirestoreTypes.DocumentSnapshot,
    Error
  >();
  const ref = useIsEqualRef(docRef, reset);

  useEffect(() => {
    if (!ref.current) {
      setValue(undefined);
      return;
    }
    if (listen) {
      const listener =
        options && options.snapshotListenOptions
          ? ref.current.onSnapshot(
              options.snapshotListenOptions,
              setValue,
              setError
            )
          : ref.current.onSnapshot(setValue, setError);

      return () => {
        listener();
      };
    } else {
      ref.current
        .get(options ? options.getOptions : undefined)
        .then(setValue)
        .catch(setError);
    }
  }, [ref.current]);

  const resArray: DocumentHook<T> = [
    value as FirebaseFirestoreTypes.DocumentSnapshot<T>,
    loading,
    error,
  ];
  return useMemo(() => resArray, resArray);
};

const useDocumentDataInternal = <
  T = FirebaseFirestoreTypes.DocumentData,
  IDField extends string = '',
  RefField extends string = ''
>(
  listen: boolean,
  docRef?: FirebaseFirestoreTypes.DocumentReference<T> | null,
  options?: DataOptions
): DocumentDataHook<T, IDField, RefField> => {
  const idField = options ? options.idField : undefined;
  const refField = options ? options.refField : undefined;
  const [snapshot, loading, error] = useDocumentInternal<T>(
    listen,
    docRef,
    options
  );
  const value = useMemo(
    () =>
      (snapshot
        ? snapshotToData(snapshot, idField, refField)
        : undefined) as Data<T, IDField, RefField>,
    [snapshot, idField, refField]
  );

  const resArray: DocumentDataHook<T, IDField, RefField> = [
    value,
    loading,
    error,
  ];
  return useMemo(() => resArray, resArray);
};
