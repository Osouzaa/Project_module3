import * as yup from "yup";

const makeCreateUserSchema = () => {
  return yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório"),
    password: yup.string().required("O password é obrigatório"),
  });
};

export { makeCreateUserSchema };
