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
import { getProgram } from "./graphql/queries";
import { updateProgram } from "./graphql/mutations";
const client = generateClient();
export default function ProgramUpdateForm(props) {
  const {
    id: idProp,
    program: programModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sortType: "",
    name: "",
    nrmpProgramCode: "",
    type: "",
  };
  const [sortType, setSortType] = React.useState(initialValues.sortType);
  const [name, setName] = React.useState(initialValues.name);
  const [nrmpProgramCode, setNrmpProgramCode] = React.useState(
    initialValues.nrmpProgramCode
  );
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = programRecord
      ? { ...initialValues, ...programRecord }
      : initialValues;
    setSortType(cleanValues.sortType);
    setName(cleanValues.name);
    setNrmpProgramCode(cleanValues.nrmpProgramCode);
    setType(cleanValues.type);
    setErrors({});
  };
  const [programRecord, setProgramRecord] = React.useState(programModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProgram.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProgram
        : programModelProp;
      setProgramRecord(record);
    };
    queryData();
  }, [idProp, programModelProp]);
  React.useEffect(resetStateValues, [programRecord]);
  const validations = {
    sortType: [{ type: "Required" }],
    name: [],
    nrmpProgramCode: [],
    type: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          sortType,
          name: name ?? null,
          nrmpProgramCode: nrmpProgramCode ?? null,
          type: type ?? null,
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
            query: updateProgram.replaceAll("__typename", ""),
            variables: {
              input: {
                id: programRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProgramUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sort type"
        isRequired={true}
        isReadOnly={false}
        value={sortType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType: value,
              name,
              nrmpProgramCode,
              type,
            };
            const result = onChange(modelFields);
            value = result?.sortType ?? value;
          }
          if (errors.sortType?.hasError) {
            runValidationTasks("sortType", value);
          }
          setSortType(value);
        }}
        onBlur={() => runValidationTasks("sortType", sortType)}
        errorMessage={errors.sortType?.errorMessage}
        hasError={errors.sortType?.hasError}
        {...getOverrideProps(overrides, "sortType")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
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
              sortType,
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
              sortType,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || programModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || programModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
