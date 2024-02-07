import { useSelector } from "react-redux"

export default function Footer() {
  const data = useSelector((state)=>state.patient.patientInfo)

  return (
    <footer className="bg-stone-600 text-stone-200">
      {data && (<p1> Patient ID: {data.id}</p1>)}
      <br/>
      {data && (<p1>Patient Name: {data.name}</p1>)}
    </footer>
  )
}
