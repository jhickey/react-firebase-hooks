import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export const snapshotToData = (
  snapshot: FirebaseFirestoreTypes.DocumentSnapshot,
  idField?: string,
  refField?: string
) => {
  if (!snapshot.exists) {
    return undefined;
  }

  return {
    ...snapshot.data(),
    ...(idField ? { [idField]: snapshot.id } : null),
    ...(refField ? { [refField]: snapshot.ref } : null),
  };
};
