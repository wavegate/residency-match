/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createProgram } from "./graphql/mutations";
import { useAuthenticator } from "@aws-amplify/ui-react";
const client = generateClient();
export default function ProgramCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    nrmpProgramCode: "",
    type: "",
    institutionId: "",
    specialtyId: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [nrmpProgramCode, setNrmpProgramCode] = React.useState(
    initialValues.nrmpProgramCode
  );
  const [type, setType] = React.useState(initialValues.type);
  const [institutionId, setInstitutionId] = React.useState(
    initialValues.institutionId
  );
  const [specialtyId, setSpecialtyId] = React.useState(
    initialValues.specialtyId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setNrmpProgramCode(initialValues.nrmpProgramCode);
    setType(initialValues.type);
    setInstitutionId(initialValues.institutionId);
    setSpecialtyId(initialValues.specialtyId);
    setErrors({});
  };
  const validations = {
    name: [],
    nrmpProgramCode: [],
    type: [],
    institutionId: [],
    specialtyId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const { user } = useAuthenticator((context) => [context.user]);
  const [institutions, setInstitutions] = React.useState([]);
  const [specialties, setSpecialties] = React.useState([]);

  React.useEffect(() => {
    client.models.Institution.observeQuery().subscribe({
      next: (data) => setInstitutions([...data.items]),
    });
    client.models.Specialty.observeQuery().subscribe({
      next: (data) => setSpecialties([...data.items]),
    });
  }, [user]);

  return (
    <>
      <h1>Create Program</h1>
      <Grid
        as="form"
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        onSubmit={async (event) => {
          event.preventDefault();
          let modelFields = {
            name,
            nrmpProgramCode,
            type,
            institutionId,
            specialtyId,
          };
          const validationResponses = await Promise.all(
            Object.keys(validations).reduce((promises, fieldName) => {
              if (Array.isArray(modelFields[fieldName])) {
                promises.push(
                  ...modelFields[fieldName].map((item) =>
                    runValidationTasks(fieldName, item)
                  )
                );
                return promises;
              }
              promises.push(
                runValidationTasks(fieldName, modelFields[fieldName])
              );
              return promises;
            }, [])
          );
          if (validationResponses.some((r) => r.hasError)) {
            return;
          }
          if (onSubmit) {
            modelFields = onSubmit(modelFields);
          }
          try {
            Object.entries(modelFields).forEach(([key, value]) => {
              if (typeof value === "string" && value === "") {
                modelFields[key] = null;
              }
            });
            await client.graphql({
              query: createProgram.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFields,
                },
              },
              authMode: "userPool",
            });
            if (onSuccess) {
              onSuccess(modelFields);
            }
            if (clearOnSuccess) {
              resetStateValues();
            }
            console.log("hi");
          } catch (err) {
            if (onError) {
              const messages = err.errors.map((e) => e.message).join("\n");
              onError(modelFields, messages);
            }
          }
        }}
        {...getOverrideProps(overrides, "ProgramCreateForm")}
        {...rest}
      >
        <TextField
          label="Name"
          isRequired={false}
          isReadOnly={false}
          value={name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name: value,
                nrmpProgramCode,
                type,
              };
              const result = onChange(modelFields);
              value = result?.name ?? value;
            }
            if (errors.name?.hasError) {
              runValidationTasks("name", value);
            }
            setName(value);
          }}
          onBlur={() => runValidationTasks("name", name)}
          errorMessage={errors.name?.errorMessage}
          hasError={errors.name?.hasError}
          {...getOverrideProps(overrides, "name")}
        ></TextField>
        <TextField
          label="Nrmp program code"
          isRequired={false}
          isReadOnly={false}
          value={nrmpProgramCode}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                nrmpProgramCode: value,
                type,
              };
              const result = onChange(modelFields);
              value = result?.nrmpProgramCode ?? value;
            }
            if (errors.nrmpProgramCode?.hasError) {
              runValidationTasks("nrmpProgramCode", value);
            }
            setNrmpProgramCode(value);
          }}
          onBlur={() => runValidationTasks("nrmpProgramCode", nrmpProgramCode)}
          errorMessage={errors.nrmpProgramCode?.errorMessage}
          hasError={errors.nrmpProgramCode?.hasError}
          {...getOverrideProps(overrides, "nrmpProgramCode")}
        ></TextField>
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={type}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                nrmpProgramCode,
                type: value,
              };
              const result = onChange(modelFields);
              value = result?.type ?? value;
            }
            if (errors.type?.hasError) {
              runValidationTasks("type", value);
            }
            setType(value);
          }}
          onBlur={() => runValidationTasks("type", type)}
          errorMessage={errors.type?.errorMessage}
          hasError={errors.type?.hasError}
          {...getOverrideProps(overrides, "type")}
        >
          <option
            children="P"
            value="P"
            {...getOverrideProps(overrides, "typeoption0")}
          ></option>
          <option
            children="C"
            value="C"
            {...getOverrideProps(overrides, "typeoption1")}
          ></option>
          <option
            children="M"
            value="M"
            {...getOverrideProps(overrides, "typeoption2")}
          ></option>
          <option
            children="A"
            value="A"
            {...getOverrideProps(overrides, "typeoption3")}
          ></option>
          <option
            children="R"
            value="R"
            {...getOverrideProps(overrides, "typeoption4")}
          ></option>
          <option
            children="F"
            value="F"
            {...getOverrideProps(overrides, "typeoption5")}
          ></option>
        </SelectField>
        <SelectField
          label="Institution"
          placeholder="Please select an option"
          isDisabled={false}
          value={institutionId}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                nrmpProgramCode,
                type,
                institutionId: value,
              };
              const result = onChange(modelFields);
              value = result?.institutionId ?? value;
            }
            if (errors.institutionId?.hasError) {
              runValidationTasks("institutionId", value);
            }
            setInstitutionId(value);
          }}
          onBlur={() => runValidationTasks("institutionId", institutionId)}
          errorMessage={errors.institutionId?.errorMessage}
          hasError={errors.institutionId?.hasError}
          {...getOverrideProps(overrides, "institutionId")}
        >
          {institutions.map((institution) => {
            return (
              <option key={institution.id} value={institution.id}>
                {institution.name}
              </option>
            );
          })}
        </SelectField>
        <SelectField
          label="Specialty"
          placeholder="Please select an option"
          isDisabled={false}
          value={specialtyId}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                nrmpProgramCode,
                type,
                specialtyId: value,
              };
              const result = onChange(modelFields);
              value = result?.specialtyId ?? value;
            }
            if (errors.specialtyId?.hasError) {
              runValidationTasks("specialtyId", value);
            }
            setSpecialtyId(value);
          }}
          onBlur={() => runValidationTasks("specialtyId", specialtyId)}
          errorMessage={errors.specialtyId?.errorMessage}
          hasError={errors.specialtyId?.hasError}
          {...getOverrideProps(overrides, "specialtyId")}
        >
          {specialties.map((specialty) => {
            return (
              <option key={specialty.id} value={specialty.id}>
                {specialty.name}
              </option>
            );
          })}
        </SelectField>
        <Flex
          justifyContent="space-between"
          {...getOverrideProps(overrides, "CTAFlex")}
        >
          <Button
            children="Clear"
            type="reset"
            onClick={(event) => {
              event.preventDefault();
              resetStateValues();
            }}
            {...getOverrideProps(overrides, "ClearButton")}
          ></Button>
          <Flex
            gap="15px"
            {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
          >
            <Button
              children="Submit"
              type="submit"
              variation="primary"
              isDisabled={Object.values(errors).some((e) => e?.hasError)}
              {...getOverrideProps(overrides, "SubmitButton")}
            ></Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
