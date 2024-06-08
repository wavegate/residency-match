/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSpecialty } from "./graphql/queries";
import { updateSpecialty } from "./graphql/mutations";
const client = generateClient();
export default function SpecialtyUpdateForm(props) {
  const {
    id: idProp,
    specialty: specialtyModelProp,
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
    acgmeSpecialtyCode: "",
  };
  const [sortType, setSortType] = React.useState(initialValues.sortType);
  const [name, setName] = React.useState(initialValues.name);
  const [acgmeSpecialtyCode, setAcgmeSpecialtyCode] = React.useState(
    initialValues.acgmeSpecialtyCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = specialtyRecord
      ? { ...initialValues, ...specialtyRecord }
      : initialValues;
    setSortType(cleanValues.sortType);
    setName(cleanValues.name);
    setAcgmeSpecialtyCode(cleanValues.acgmeSpecialtyCode);
    setErrors({});
  };
  const [specialtyRecord, setSpecialtyRecord] =
    React.useState(specialtyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSpecialty.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSpecialty
        : specialtyModelProp;
      setSpecialtyRecord(record);
    };
    queryData();
  }, [idProp, specialtyModelProp]);
  React.useEffect(resetStateValues, [specialtyRecord]);
  const validations = {
    sortType: [{ type: "Required" }],
    name: [],
    acgmeSpecialtyCode: [],
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
          acgmeSpecialtyCode: acgmeSpecialtyCode ?? null,
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
            query: updateSpecialty.replaceAll("__typename", ""),
            variables: {
              input: {
                id: specialtyRecord.id,
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
      {...getOverrideProps(overrides, "SpecialtyUpdateForm")}
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
              acgmeSpecialtyCode,
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
              acgmeSpecialtyCode,
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
        label="Acgme specialty code"
        isRequired={false}
        isReadOnly={false}
        value={acgmeSpecialtyCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              name,
              acgmeSpecialtyCode: value,
            };
            const result = onChange(modelFields);
            value = result?.acgmeSpecialtyCode ?? value;
          }
          if (errors.acgmeSpecialtyCode?.hasError) {
            runValidationTasks("acgmeSpecialtyCode", value);
          }
          setAcgmeSpecialtyCode(value);
        }}
        onBlur={() =>
          runValidationTasks("acgmeSpecialtyCode", acgmeSpecialtyCode)
        }
        errorMessage={errors.acgmeSpecialtyCode?.errorMessage}
        hasError={errors.acgmeSpecialtyCode?.hasError}
        {...getOverrideProps(overrides, "acgmeSpecialtyCode")}
      ></TextField>
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
          isDisabled={!(idProp || specialtyModelProp)}
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
              !(idProp || specialtyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
