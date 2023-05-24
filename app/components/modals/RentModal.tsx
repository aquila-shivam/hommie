'use client'

import useRentModal from "@/app/hooks/useRentModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"

enum STEPS{
  CATEGORY = 0,
  LOCATION=1,
  INFO=2,
  IMAGES=3,
  DESCRIPTION=4,
  PRICE=5,

}

const RentModal = () => {
const rentModal = useRentModal();
const [step,setStep] = useState(STEPS.CATEGORY);

const onBack = () =>{
  setStep((value) => value-1 );
}

const onNext = () =>{
  setStep((value)=>value+1);
}

const actionLabel = useMemo(()=>{
  if(step === STEPS.PRICE){
    return 'Create'
  }

  return 'Next';

},[])

const secondaryActionLabel = useMemo(()=>{

  if(step == STEPS.CATEGORY){
    return undefined;
  }

  return 'Back';
},[step])
  

  let bodyContent = (

    <div className="flex flex-col gap-8">
      <Heading 
      title={"Which of this best describes your place ?"}
      subtitle="Pick a category"
      />
      <div className="
      grid
      grid-col
      grid
      gap-3
      ">
        shivam
      </div>

    </div>
  )


  return (
    <div>
      <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Be a Hommie"
      body={bodyContent}
      />
    </div>
  )
}

export default RentModal
