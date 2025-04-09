import { useContext } from "react"
import DataContext from "../context/DataContext"

import { useParams } from "react-router-dom"
export default function ProfilePage() {
  const { profiles } = useContext(DataContext)
  console.log(profiles.length)
  const { profileId } = useParams()
  console.log(typeof profileId)
  const isnum = /^\d+$/.test(profileId)
  return (
    <>
      {profileId > profiles.length || !isnum ? (
        <h2>Profile {profileId} doesn&apos;t exist</h2>
      ) : (
        <h2>Profile {profileId}</h2>
      )}
    </>
  )
}
