/* eslint-disable react/prop-types */ 
import { useLoaderData } from "react-router-dom";
import { getMedical } from "../../services/apiMedical";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createPatientArray, setPatientInfo } from "../patients/patientSlice";
import PatientList from "../patients/PatientList";
import PatientPicture from "../patients/PatientPicture";

function Dashboard() {
  
  const [patient, setPatient] = useState({});
  const [holdPatients, setHoldPatients] = useState({});
  const patients = useLoaderData();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(createPatientArray(patients));
    setHoldPatients(patients)
    setPatient(patients[0])
  },[])

  function handleClick(e) {
    setPatient(holdPatients[e])
    dispatch(setPatientInfo(e));
  }

  return (
    <div className="flex">
      <span>
        <PatientList handleClick={handleClick} className="border border-slate-500"/>
      </span>
      <span>
        <PatientPicture patient={patient} />
      </span>
    </div>
  )
}

export async function loader() {
  const patients = await getMedical();
  return patients;
}

export default Dashboard;