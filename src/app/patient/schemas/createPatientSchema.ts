import * as yup from "yup";

const makeCreatePatientSchema = () => {
  return yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    birthdate: yup.date().required("A data de nascimento é obrigatória"),
    contact: yup.string().required("O contato é obrigatório"),
    demands: yup.string().required("As demandas são obrigatórias"),
    personalAnnotations: yup.string().required("As anotações pessoais são obrigatórias"),
  });
};

export { makeCreatePatientSchema };
