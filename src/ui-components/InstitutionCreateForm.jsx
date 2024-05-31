/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInstitution } from "./graphql/mutations";
const client = generateClient();
export default function InstitutionCreateForm(props) {
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
    institutionCode: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [institutionCode, setInstitutionCode] = React.useState(
    initialValues.institutionCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setInstitutionCode(initialValues.institutionCode);
    setErrors({});
  };
  const validations = {
    name: [],
    institutionCode: [],
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
    <>
      <h1>Create Institution</h1>

      <Grid
        as="form"
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        onSubmit={async (event) => {
          event.preventDefault();
          let modelFields = {
            name,
            institutionCode,
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
              query: createInstitution.replaceAll("__typename", ""),
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
          } catch (err) {
            if (onError) {
              const messages = err.errors.map((e) => e.message).join("\n");
              onError(modelFields, messages);
            }
          }
        }}
        {...getOverrideProps(overrides, "InstitutionCreateForm")}
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
                institutionCode,
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
          label="Institution code"
          isRequired={false}
          isReadOnly={false}
          value={institutionCode}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                institutionCode: value,
              };
              const result = onChange(modelFields);
              value = result?.institutionCode ?? value;
            }
            if (errors.institutionCode?.hasError) {
              runValidationTasks("institutionCode", value);
            }
            setInstitutionCode(value);
          }}
          onBlur={() => runValidationTasks("institutionCode", institutionCode)}
          errorMessage={errors.institutionCode?.errorMessage}
          hasError={errors.institutionCode?.hasError}
          {...getOverrideProps(overrides, "institutionCode")}
        ></TextField>
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
