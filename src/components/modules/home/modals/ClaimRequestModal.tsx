import React from "react";
import FXModal from "./FXModal";
import FxForm from "@/src/components/form/FxForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";
import { Button } from "@heroui/button";

interface IProps {
  id: string;
  questions: string[];
}

export default function ClaimRequestModal({ id, questions }: IProps) {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FXModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FxForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-2">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextArea label="Description" name="description" />
        <div>
          <Button className="w-full my-4" size="lg" type="submit">Send</Button>
        </div>
      </FxForm>
    </FXModal>
  );
}
