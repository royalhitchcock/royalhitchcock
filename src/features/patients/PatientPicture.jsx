/* eslint-disable react/prop-types */ 

export default function PatientPicture({patient}) {

    return (
     < img src={patient.imageUrl} 
         alt={patient.name}
         className="h-96 my-8 ml-60 absolute shrink"
     />
  )
}
