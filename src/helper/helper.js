import { ref, onValue } from 'firebase/database'
import { database } from '../firebaseConfig'

export const setDataFromFirebaseDatabase = (path, dataCreator, dataSetter) => {
  const databaseRef = ref(database, path)

  onValue(databaseRef, (snapshot) => {
    const rawData = snapshot.val()
    const data = dataCreator(rawData)
    dataSetter(data)
  })
}
